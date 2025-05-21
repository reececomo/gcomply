/* eslint-disable @typescript-eslint/naming-convention */

/**
 * Indicates the grammatical behavior of a determiner in relation to a noun.
 */
export enum Determination
{
  /**
   * The determiner modifies or accompanies a noun within the noun phrase. It
   * cannot stand alone as a full noun phrase without the noun.
   *
   * @example "[My] car.", "[This] book."
   */
  dependent = "dependent",

  /**
   * The determiner functions on its own, effectively standing in for a full
   * noun phrase.
   *
   * @example "That is [hers].", "I want [those]."
   */
  independent = "independent",
}

export type DeterminationLiteral = `${Determination}`;
