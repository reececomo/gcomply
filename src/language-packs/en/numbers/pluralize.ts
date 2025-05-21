import Nouns from "./en_nouns.json";
import Verbs from "./en_verbs.json";

type SearchMode = "only-nouns" | "nouns-verbs";

type Data = {
    all: {
        one: string[];
        other: string[];
        matcher: RegExp;
    },
    nouns: {
        one: string[];
        other: string[];
        matcher: RegExp;
    },
}

const LOWERCASE_PATTERN = /^[a-z]+$/;
const UPPERCASE_PATTERN = /^[A-Z]+$/;
const ALPHA_PATTERN = /[a-zA-Z]+/i;
const STRIP_SUFFIXES = /(?:\(s\)|\(ies\)|\(es\))/;
let lookupTable: Data | undefined;

export function pluralize(token: string, count: number, mode: SearchMode): string
{
    if (lookupTable === undefined)
    {
        lookupTable = init();
    }

    if (STRIP_SUFFIXES.test(token))
    {
        token = token.replace(STRIP_SUFFIXES, "");
    }

    const lookup = mode === "only-nouns"
        ? lookupTable.nouns
        : lookupTable.all;

    if (!lookup.matcher.test(token))
    {
        // early exit: no matches
        return token;
    }

    const lcToken = token.toLowerCase();
    const from = count === 1 ? lookup.other : lookup.one;
    const to   = count === 1 ? lookup.one : lookup.other;

    for (let i = 0; i < lookup.one.length; i++)
    {
        if (lcToken.includes(from[i]))
        {
            return caseAwareReplace(token, from[i], to[i]);
        }
    }

    return token;
}

function makeMatcher(words: string[]): RegExp
{
    return new RegExp(`\\b(?:${words.join('|')})\\b`, "i");
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

function init(): Data
{
    const nounsOne = Nouns.map($0 => $0.one);
    const nounsOther = Nouns.map($0 => $0.other);
    const allNouns = nounsOne.concat(nounsOther);
    const nouns = {
        one: nounsOne,
        other: nounsOther,
        matcher: makeMatcher(allNouns),
    };

    const verbsOne = Verbs.map($0 => $0.one);
    const verbsOther = Verbs.map($0 => $0.other);
    const allVerbs = verbsOne.concat(verbsOther);

    return {
        nouns,
        all: {
            one: nounsOne.concat(verbsOne),
            other: nounsOne.concat(verbsOther),
            matcher: makeMatcher(allNouns.concat(allVerbs)),
        },
    };
}
