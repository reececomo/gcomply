/* eslint-disable @typescript-eslint/naming-convention */

import { codable, ValueOf } from "../../../lib/utils";

const enumDefiniteness =
{
    /** @example "the" */
    definite: 1,

    /** @example "a", "some" */
    indefinite: 2,
} as const;

/**
 * Indicates whether a referent article is identifiable and specific.
 */
export const Definiteness = codable(enumDefiniteness);
export type Definiteness = ValueOf<typeof enumDefiniteness>;
