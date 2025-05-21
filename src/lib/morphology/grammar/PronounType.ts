/* eslint-disable @typescript-eslint/naming-convention */

/**
 * Grammatical functions of pronouns.
 */
export enum PronounType
{
  /**
   * Refers directly to a person or thing.
   * @example "I", "you", "they"
   */
  personal = "personal",

  /**
   * Indicates possession.
   * @example "my", "your", "their"
   */
  possessive = "possessive",

  /**
   * Refers back to the subject of the clause.
   * @example "myself", "yourself", "themselves"
   */
  reflexive = "reflexive"
}

export type PronounTypeLiteral = `${PronounType}`;
