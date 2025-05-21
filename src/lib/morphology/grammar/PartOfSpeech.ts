/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */

/**
 * Indicates grammatical part of speech, used for inflecting strings.
 */
export enum PartOfSpeech
{
  /**
   * Words that describe or modify nouns.
   * @example "red", "beautiful", "large"
   */
  adjective = "adjective",

  /**
   * Words that express actions, events, or states of being.
   * @example "run", "is", "seem"
   */
  verb = "verb",

  /**
   * Words that identify people, places, things, or concepts.
   * @example "cat", "city", "freedom"
   */
  noun = "noun",

  /**
   * Words that introduce and modify nouns (such as indefinite articles).
   * @example "the", "a", "this"
   */
  determiner = "determiner",

  /**
   * Words that take the place of nouns.
   * @example "he", "she", "they", "it"
   */
  pronoun = "pronoun",

  /**
   * Individual alphabetic characters, used symbolically or phonetically.
   * @example "A", "b", "z"
   */
  letter = "letter",

  /**
   * Words that modify verbs, adjectives, or other adverbs.
   * @example "quickly", "very", "always"
   */
  adverb = "adverb",

  /**
   * Function words often forming part of phrasal verbs or adding grammatical nuance.
   * @example "up" (as in "give up"), "out" (as in "find out")
   */
  particle = "particle",

  /**
   * Words that show relationships between elements, including prepositions and postpositions.
   * @example "on", "under", "beside"
   */
  adposition = "adposition",

  /**
   * Words that link clauses, phrases, or words.
   * @example "and", "but", "because"
   */
  conjunction = "conjunction",

  /**
   * Words that represent numbers or order.
   * @example "one", "second", "forty"
   */
  numeral = "numeral",

  /**
   * Words or sounds that express emotion or sudden reaction.
   * @example "wow", "oops", "hey"
   */
  interjection = "interjection",

  /**
   * A type of adposition placed before a noun to show relationship.
   * @example "in", "by", "at"
   */
  preposition = "preposition",

  /**
   * Shortened forms of words or phrases.
   * @example "Dr.", "etc.", "UN"
   */
  abbreviation = "abbreviation"
}

export type PartOfSpeechLiteral = `${PartOfSpeech}`;
