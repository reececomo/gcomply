/* eslint-disable @typescript-eslint/naming-convention */

import { codable, ValueOf } from "../../../lib/utils";

const enumDetermination =
{
    /**
     * The determiner modifies or accompanies a noun within the noun phrase. It
     * cannot stand alone as a full noun phrase without the noun.
     *
     * @example "[My] car.", "[This] book."
     */
    dependent: 1,

    /**
     * The determiner functions on its own, effectively standing in for a full
     * noun phrase.
     *
     * @example "That is [hers].", "I want [those]."
     */
    independent: 2,
} as const;

/**
 * Indicates the grammatical behavior of a determiner in relation to a noun.
 */
export const Determination = codable(enumDetermination);
export type Determination = ValueOf<typeof enumDetermination>;
