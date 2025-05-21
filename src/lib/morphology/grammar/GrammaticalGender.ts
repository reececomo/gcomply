/* eslint-disable @typescript-eslint/naming-convention */

import { codable, ValueOf } from "../../../lib/utils";

const enumGrammaticalGender =
{
    /**
     * The feminine grammatical gender.
     */
    feminine: 1,

    /**
     * The masculine grammatical gender.
     */
    masculine: 2,

    /**
     * Do not specify gender when inflecting a string.
     */
    neuter: 3,
} as const;

/**
 * A representation of grammatical gender, used for inflecting strings.
 */
export const GrammaticalGender = codable(enumGrammaticalGender);
export type GrammaticalGender = ValueOf<typeof enumGrammaticalGender>;
