import { numberAgreement } from "../../language-packs/en";
import { Morphology } from "../morphology";

interface GrammarOptions
{
    language?: string;
    morphology?: Morphology;
}

type TextArgument = string | number;

/**
 * @example
 *  g`You have ${count} new message.`
 *
 *  // becomes
 *  "You have 2 new messages."
 */
export function g(
    raw: TemplateStringsArray,
    ...args: TextArgument[]
): string
{
    const compiled = raw.reduce((str, part, i) =>
    {
        const arg = args[i-1];
        if (arg === undefined) return str + part;
        else return str + arg + part;
    });

    return inflect(compiled);
}


/**
 * @example
 *  inflect("You have 2 new message.")
 *
 *  // becomes
 *  "You have 2 new messages."
 */
export function inflect(text: string, options?: GrammarOptions): string
{
    const lang = options?.language ?? "en";

    switch (lang)
    {
        case "en": return numberAgreement(text);
        default: return text;
    }
}
