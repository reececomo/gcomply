import { Grammar } from "../../../lib";
import { enPluralTable } from "./enPluralTable";

type SearchMode = "only-nouns" | "nouns-verbs";

const STRIP_SUFFIXES = /(?:\(s\)|\(ies\)|\(es\))/;

export function pluralize(token: string, count: number, mode: SearchMode): string
{
    if (STRIP_SUFFIXES.test(token))
    {
        token = token.replace(STRIP_SUFFIXES, "");
    }

    const requiredPartOfSpeech = mode === "only-nouns"
        ? Grammar.PartOfSpeech.noun
        : undefined;

    if (!enPluralTable.test(token, requiredPartOfSpeech))
    {
        // early exit: no matches
        return token;
    }

    const plurality = count === 1
        ? Grammar.GrammaticalNumber.singular
        : Grammar.GrammaticalNumber.plural;

    return enPluralTable.replace(token, plurality);
}
