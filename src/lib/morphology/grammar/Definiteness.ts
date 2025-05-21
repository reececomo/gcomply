/* eslint-disable @typescript-eslint/naming-convention */

/**
 * Indicates whether a referent is identifiable and specific.
 */
export enum Definiteness
{
  /** @example "the" */
  definite = "definite",

  /** @example "a", "some" */
  indefinite = "indefinite",
}

export type DefinitenessLiteral = `${Definiteness}`;
