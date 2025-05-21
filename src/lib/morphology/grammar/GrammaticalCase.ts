/* eslint-disable @typescript-eslint/naming-convention */

import { codable, ValueOf } from "../../../lib/utils";

export const enumGrammaticalCase =
{
    /**
     * Expresses movement away from something.
     * @example "from the house"
     */
    ablative: 1,

    /**
     * Marks the direct object of a verb.
     * @example "I see the car"
     */
    accusative: 2,

    /**
     * Denotes presence at a location, often used in Uralic languages.
     * @example "at the station"
     */
    adessive: 3,

    /**
     * Expresses motion toward something.
     * @example "to the house"
     */
    allative: 4,

    /**
     * Marks the indirect object or recipient.
     * @example "I gave the book to her"
     */
    dative: 5,

    /**
     * Indicates motion out of or from within.
     * @example "out of the room"
     */
    elative: 6,

    /**
     * Indicates a temporary or current state.
     * @example "as a teacher"
     */
    essive: 7,

    /**
     * Shows possession or relationship.
     * @example "the boy's dog"
     */
    genitive: 8,

    /**
     * Expresses motion into something.
     * @example "into the house"
     */
    illative: 9,

    /**
     * Denotes being inside something.
     * @example "in the room"
     */
    inessive: 10,

    /**
     * Marks location or position.
     * @example "on the table"
     */
    locative: 11,

    /**
     * Marks the subject of a sentence.
     * @example "The cat sleeps"
     */
    nominative: 12,

    /**
     * Often used with prepositions to show location or topic.
     * @example "about the war"
     */
    prepositional: 13,

    /**
     * Indicates a change of state or becoming something.
     * @example "became a leader"
     */
    translative: 14,
} as const;

/**
 * Indicates the role of a noun or pronoun in a sentence.
 */
export const GrammaticalCase = codable(enumGrammaticalCase);
export type GrammaticalCase = ValueOf<typeof enumGrammaticalCase>;
