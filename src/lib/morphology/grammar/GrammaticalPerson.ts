/* eslint-disable @typescript-eslint/naming-convention */

import { codable, ValueOf } from "../../../lib/utils";

const enumGrammaticalPerson =
{
    /**
     * Referring to the speaker or group including the speaker.
     * @example "I", "we"
     */
    first: 1,

    /**
     * Referring to the person being spoken to.
     * @example "you"
     */
    second: 2,

    /**
     * Referring to someone or something being spoken about.
     * @example "he", "she", "they"
     */
    third: 3,
} as const;

/**
 * Indicates grammatical persons in verb conjugation and pronoun usage.
 */
export const GrammaticalPerson = codable(enumGrammaticalPerson);
export type GrammaticalPerson = ValueOf<typeof enumGrammaticalPerson>;
