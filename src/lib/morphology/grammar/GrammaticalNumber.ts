/* eslint-disable @typescript-eslint/naming-convention */

import { Codable, ValueOf } from "../../../lib/utils";

type EncodedGrammaticalNumber = "one" | "zero" | "other" | "two" | "few" | "many";

const enumGrammaticalNumber =
{
    /**
     * A single person or thing.
     *
     * Encoded value: "one"
     */
    singular: 1,

    /**
     * Zero persons or things.
     *
     * Encoded value: "zero"
     */
    zero: 2,

    /**
     * Multiple persons or things.
     *
     * Encoded value: "other"
     */
    plural: 3,

    /**
     * Two persons or things.
     *
     * Encoded value: "two"
     */
    pluralTwo: 4,

    /**
     * A small number of persons or things.
     *
     * Encoded value: "few"
     */
    pluralFew: 5,

    /**
     * A large number of persons or things.
     *
     * Encoded value: "many"
     */
    pluralMany: 6,
} as const;

/**
 * Indicates grammatical number, used for inflecting strings.
 *
 * Uses CLDR/ICU MessageFormat syntax ("zero", "one", "two", "few", "many",
 * "other").
 */
export const GrammaticalNumber = enumGrammaticalNumber as Codable<
    typeof enumGrammaticalNumber,
    EncodedGrammaticalNumber
>;
export type GrammaticalNumber = ValueOf<typeof enumGrammaticalNumber>;

/** @throws invalid value */
GrammaticalNumber.init = (value: EncodedGrammaticalNumber): GrammaticalNumber =>
{
    switch (value)
    {
        case "one"   : return GrammaticalNumber.singular;
        case "zero"       : return GrammaticalNumber.zero;
        case "other"     : return GrammaticalNumber.plural;
        case "two"  : return GrammaticalNumber.pluralTwo;
        case "few"  : return GrammaticalNumber.pluralFew;
        case "many" : return GrammaticalNumber.pluralMany;
        default: throw new Error("invalid value: " + value);
    }
};

GrammaticalNumber.encode = (value: GrammaticalNumber): EncodedGrammaticalNumber =>
{
    switch (value)
    {
        case GrammaticalNumber.singular  : return "one";
        case GrammaticalNumber.zero      : return "zero";
        case GrammaticalNumber.plural    : return "other";
        case GrammaticalNumber.pluralTwo : return "two";
        case GrammaticalNumber.pluralFew : return "few";
        case GrammaticalNumber.pluralMany: return "many";
    }
};
