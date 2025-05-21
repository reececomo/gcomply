/* eslint-disable @typescript-eslint/naming-convention */

/**
 * Indicates grammatical number, used for inflecting strings.
 *
 * Uses CLDR/ICU MessageFormat syntax ("zero", "one", "two", "few", "many",
 * "other").
 */
export enum GrammaticalNumber
{
  /** Zero persons or things. */
  zero = "zero",

  /** A single person or thing. */
  singular = "one",

  /** Two persons or things. */
  pluralTwo = "two",

  /** A small number of persons or things. */
  pluralFew = "few",

  /** A large number of persons or things. */
  pluralMany = "many",

  /** Multiple persons or things. */
  plural = "other",
}

export type GrammaticalNumberLiteral = `${GrammaticalNumber}`;
