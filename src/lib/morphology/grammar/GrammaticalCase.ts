/* eslint-disable @typescript-eslint/naming-convention */

/**
 * Indicates the role of a noun or pronoun in a sentence.
 */
export enum GrammaticalCase
{
  /**
   * Expresses movement away from something.
   * @example "from the house"
   */
  ablative = "ablative",

  /**
   * Marks the direct object of a verb.
   * @example "I see the car"
   */
  accusative = "accusative",

  /**
   * Denotes presence at a location, often used in Uralic languages.
   * @example "at the station"
   */
  adessive = "adessive",

  /**
   * Expresses motion toward something.
   * @example "to the house"
   */
  allative = "allative",

  /**
   * Marks the indirect object or recipient.
   * @example "I gave the book to her"
   */
  dative = "dative",

  /**
   * Indicates motion out of or from within.
   * @example "out of the room"
   */
  elative = "elative",

  /**
   * Indicates a temporary or current state.
   * @example "as a teacher"
   */
  essive = "essive",

  /**
   * Shows possession or relationship.
   * @example "the boy's dog"
   */
  genitive = "genitive",

  /**
   * Expresses motion into something.
   * @example "into the house"
   */
  illative = "illative",

  /**
   * Denotes being inside something.
   * @example "in the room"
   */
  inessive = "inessive",

  /**
   * Marks location or position.
   * @example "on the table"
   */
  locative = "locative",

  /**
   * Marks the subject of a sentence.
   * @example "The cat sleeps"
   */
  nominative = "nominative",

  /**
   * Often used with prepositions to show location or topic.
   * @example "about the war"
   */
  prepositional = "prepositional",

  /**
   * Indicates a change of state or becoming something.
   * @example "became a leader"
   */
  translative = "translative"
}

export type GrammaticalCaseLiteral = `${GrammaticalCase}`;
