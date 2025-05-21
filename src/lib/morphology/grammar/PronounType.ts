/* eslint-disable @typescript-eslint/naming-convention */

import { codable, ValueOf } from "../../../lib/utils";

const enumPronounType =
{
    /**
     * Refers directly to a person or thing.
     * @example "I", "you", "they"
     */
    personal: 1,

    /**
     * Indicates possession.
     * @example "my", "your", "their"
     */
    possessive: 2,

    /**
     * Refers back to the subject of the clause.
     * @example "myself", "yourself", "themselves"
     */
    reflexive: 3,
} as const;

/**
 * Grammatical functions of pronouns.
 */
export const PronounType = codable(enumPronounType);
export type PronounType = ValueOf<typeof enumPronounType>;
