import { pluralize } from "./numbers/pluralize";
import { processSentences } from "./util";

const NUMBER_TOKEN = /[0-9]+(?:,[0-9]+)*/;
const MAX_DIST = 3;
const BONUS_DIST = 1;

export function numberAgreement(value: string): string
{
    // early exit: no number pattern detected
    if (!NUMBER_TOKEN.test(value)) return value;

    return processSentences(value, coerceNumberAgreement);
}

function parseCountableNumber(token: string): number
{
    return Number.parseInt(token.replace(/[^0-9]/g, ""));
}

function coerceNumberAgreement(value: string): string
{
    const tokens = value.split(" ");
    const changed = new Array(tokens.length).fill(false);

    // iterate through the tokens, find a number, and then fix
    for (let i = 0; i < tokens.length; i++)
    {
        if (!NUMBER_TOKEN.test(tokens[i]))
        {
            continue;
        }

        const num = parseCountableNumber(tokens[i]);
        let stop = false;

        // search right
        for (let dist = 1; dist <= MAX_DIST; dist++)
        {
            if (stop) break;

            const r = i + dist;
            const l = i - dist;

            // search right
            if (r < tokens.length && !changed[r])
            {
                const rCoercedToken = pluralize(tokens[r], num, "only-nouns");

                if (rCoercedToken !== tokens[r])
                {
                    tokens[r] = rCoercedToken;
                    changed[r] = true;

                    for (let bonusR = r + 1; bonusR < tokens.length && bonusR <= r + BONUS_DIST; bonusR++)
                    {
                        if (changed[bonusR]) break;

                        const bonusCoercedToken = pluralize(tokens[bonusR], num, "only-nouns");
                        if (bonusCoercedToken === tokens[bonusR]) continue;

                        tokens[bonusR] = bonusCoercedToken;
                        changed[bonusR] = true;
                    }

                    stop = true;
                }
            }

            // search left
            if (l >= 0 && !changed[l])
            {
                const lCoercedToken = pluralize(tokens[l], num, "nouns-verbs");

                if (lCoercedToken !== tokens[l])
                {
                    let multipleFound = false;

                    // continue checking this many more indices
                    // and we want to skip replacement
                    for (let bonusL = l - 1; bonusL >= 0 && bonusL >= l - BONUS_DIST; bonusL--)
                    {
                        if (changed[bonusL]) break;

                        const coercedToken = pluralize(tokens[bonusL], num, "only-nouns");

                        if (coercedToken === tokens[bonusL]) continue;

                        multipleFound = true;
                    }

                    if (!multipleFound)
                    {
                        // only perform agreement leftwards when it is
                        //  a single word token in isolation
                        tokens[l] = lCoercedToken;
                        changed[l] = true;
                    }

                    stop = true;
                }
            }
        }
    }

    return tokens.join(" ");
}
