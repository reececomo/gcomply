/* eslint-disable @typescript-eslint/naming-convention */

/**
 * Indicates grammatical persons in verb conjugation and pronoun usage.
 */
export enum GrammaticalPerson {
  /**
   * Referring to the speaker or group including the speaker.
   * @example "I", "we"
   */
  first = "first",

  /**
   * Referring to the person being spoken to.
   * @example "you"
   */
  second = "second",

  /**
   * Referring to someone or something being spoken about.
   * @example "he", "she", "they"
   */
  third = "third"
}

export type GrammaticalPersonLiteral = `${GrammaticalPerson}`;
