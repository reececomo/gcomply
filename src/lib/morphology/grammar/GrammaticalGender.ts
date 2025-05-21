/* eslint-disable @typescript-eslint/naming-convention */

/**
 * A representation of grammatical gender, used for inflecting strings.
 */
export enum GrammaticalGender
{
  /** The feminine grammatical gender. */
  feminine = "feminine",

  /** The masculine grammatical gender. */
  masculine = "masculine",

  /** Do not specify gender when inflecting a string. */
  neuter = "other",
}

export type GrammaticalGenderLiteral = `${GrammaticalGender}`;
