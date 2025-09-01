import { Grammar } from "../morphology";
import { LanguagePluralTable } from "./LanguagePluralTable";
import { PluralEntry } from "./PluralEntry";

class PluralManager
{
    private data = new Map<string, LanguagePluralTable>();

    public add(lang: string, ...data: PluralEntry[]): this
    {
        this.forLang(lang).add(...data);

        return this;
    }

    public addTagged(lang: string, tag: Grammar.PartOfSpeech, ...data: PluralEntry[]): this
    {
        this.forLang(lang).addTagged(tag, ...data);

        return this;
    }

    public forLang(lang: string): LanguagePluralTable
    {
        if (!this.data.get(lang))
        {
            const instance = new LanguagePluralTable();
            this.data.set(lang, instance);
        }

        return this.data.get(lang)!;
    }
}

export const Plurals = new PluralManager();
