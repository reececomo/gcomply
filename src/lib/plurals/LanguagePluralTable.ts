import { Grammar } from "../morphology";
import { PluralEntry } from "./PluralEntry";


const LOWERCASE_PATTERN = /^[a-z]+$/;
const UPPERCASE_PATTERN = /^[A-Z]+$/;
const ALPHA_PATTERN = /[a-zA-Z]+/i;

function makeMatcher(words: string[]): RegExp
{
    return new RegExp(`\\b(?:${words.join('|')})\\b`, "i");
}

function sortLongestLocaleCompare(a: string, b: string): number
{
    // First compare by length (longest first)
    if (a.length !== b.length) return b.length - a.length;

    // If same length, compare alphabetically
    return a.localeCompare(b);
}

type SparseArray<T> = Array<T | undefined>;

export class LanguagePluralTable
{
    private keys: Set<string>;
    private tags: SparseArray<Grammar.PartOfSpeech>;
    private matcher: RegExp;

    // table:
    private nextId = 0;
    private one: SparseArray<string> = [];
    private other: SparseArray<string> = [];
    private zero: SparseArray<string> = [];
    private two: SparseArray<string> = [];
    private few: SparseArray<string> = [];
    private many: SparseArray<string> = [];

    private tables = [
        this.one,
        this.other,
        this.zero,
        this.two,
        this.few,
        this.many
    ];

    public constructor()
    {
        this.keys = new Set();
        this.tags = [];
    }

    public test(value: string, requiredTag?: Grammar.PartOfSpeech): boolean
    {
        value = this.getReplaceablePortion(value);

        if (!this.matcher.test(value)) return false;
        if (requiredTag == null) return true;

        const id = this.lookup(value);
        const idTag = this.tags[id];

        return idTag === requiredTag;
    }

    public getReplaceablePortion(token: string): string
    {
        return (token.toLowerCase().match(/\b[a-zA-Z]+\b/) || [""])[0] ?? token;
    }

    public replace(token: string, plurality: Grammar.GrammaticalNumber): string
    {
        const substr = this.getReplaceablePortion(token);

        if (!this.keys.has(substr))
        {
            return substr;
        }

        const table = this.getTable(plurality);
        const id = this.lookup(substr);

        if (!table[id]) return token;

        return caseAwareReplace(token, substr, table[id]);
    }

    public addTagged(tag?: Grammar.PartOfSpeech, ...data: PluralEntry[]): this
    {
        for (const entry of data)
        {
            const entryKeys = [
                entry.zero,
                entry.one,
                entry.other,
                entry.two,
                entry.few,
                entry.many
            ].filter(v => !!v);

            for (const entryKey of entryKeys)
            {
                if (this.keys.has(entryKey))
                {
                    throw new Error("Duplicate entry added: " + entryKey);
                }

                this.keys.add(entryKey);
            }

            const id = this.nextId++;

            if (entry.zero) this.zero[id] = entry.zero.toLowerCase();
            if (entry.one) this.one[id] = entry.one.toLowerCase();
            if (entry.other) this.other[id] = entry.other.toLowerCase();
            if (entry.two) this.two[id] = entry.two.toLowerCase();
            if (entry.few) this.few[id] = entry.few.toLowerCase();
            if (entry.many) this.many[id] = entry.many.toLowerCase();

            if (tag != null)
            {
                this.tags[id] = tag;
            }
        }

        const allKeys = [...this.keys].sort(sortLongestLocaleCompare);

        this.matcher = makeMatcher(allKeys);

        return this;
    }

    public add(...data: PluralEntry[]): this
    {
        return this.addTagged(undefined, ...data);
    }

    // ----- Private implementation: -----

    private lookup(value: string): number
    {
        let i = -1;

        for (const table of this.tables)
        {
            i = table.indexOf(value);
            if (i > -1) break;
        }

        if (i === -1)
        {
            throw new Error("Unexpectedly failed to find known value: " + value);
        }

        return i;
    }

    private getTable(plurality: Grammar.GrammaticalNumber): SparseArray<string>
    {
        switch (plurality)
        {
            case Grammar.GrammaticalNumber.singular: return this.one;
            case Grammar.GrammaticalNumber.plural: return this.other;
            case Grammar.GrammaticalNumber.zero: return this.zero;
            case Grammar.GrammaticalNumber.pluralTwo: return this.two;
            case Grammar.GrammaticalNumber.pluralFew: return this.few;
            case Grammar.GrammaticalNumber.pluralMany: return this.many;
        }
    }
}

function caseAwareReplace(token: string, search: string, replace: string): string
{
    const index = token.toLowerCase().indexOf(search);
    const prefix = index <= 0 ? "" : token.substring(0, index);
    const original = token.substring(index, search.length);
    const suffix = index + search.length === token.length ? "" : token.substring(index + search.length);

    let formatted;
    if (LOWERCASE_PATTERN.test(original)) formatted = replace;
    else if (UPPERCASE_PATTERN.test(original)) formatted = replace.toUpperCase();
    else formatted = replace[0].toUpperCase() + replace.slice(1).toLowerCase();

    // we matched a substring
    if (ALPHA_PATTERN.test(prefix) || ALPHA_PATTERN.test(suffix))
    {
        // abort replacement: return the original token
        return token;
    }

    return prefix + formatted + suffix;
}
