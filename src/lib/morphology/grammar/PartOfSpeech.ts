import { codable, ValueOf } from "../../../lib/utils";

const enumPartOfSpeech =
{
    /**
     * Words that introduce and modify nouns (such as indefinite articles).
     * @example "the", "a", "this"
     */
    determiner: 1,

    /**
     * Words that take the place of nouns.
     * @example "he", "she", "they", "it"
     */
    pronoun: 2,

    /**
     * Individual alphabetic characters, used symbolically or phonetically.
     * @example "A", "b", "z"
     */
    letter: 3,

    /**
     * Words that modify verbs, adjectives, or other adverbs.
     * @example "quickly", "very", "always"
     */
    adverb: 4,

    /**
     * Function words often forming part of phrasal verbs or adding grammatical nuance.
     * @example "up" (as in "give up"), "out" (as in "find out")
     */
    particle: 5,

    /**
     * Words that describe or modify nouns.
     * @example "red", "beautiful", "large"
     */
    adjective: 6,

    /**
     * Words that show relationships between elements, including prepositions and
     * postpositions.
     * @example "on", "under", "beside"
     */
    adposition: 7,

    /**
     * Words that express actions, events, or states of being.
     * @example "run", "is", "seem"
     */
    verb: 8,

    /**
     * Words that identify people, places, things, or concepts.
     * @example "cat", "city", "freedom"
     */
    noun: 9,

    /**
     * Words that link clauses, phrases, or words.
     * @example "and", "but", "because"
     */
    conjunction: 10,

    /**
     * Words that represent numbers or order.
     * @example "one", "second", "forty"
     */
    numeral: 11,

    /**
     * Words or sounds that express emotion or sudden reaction.
     * @example "wow", "oops", "hey"
     */
    interjection: 12,

    /**
     * A type of adposition placed before a noun to show relationship.
     * @example "in", "by", "at"
     */
    preposition: 13,

    /**
     * Shortened forms of words or phrases.
     * @example "Dr.", "etc.", "UN"
     */
    abbreviation: 14
} as const;

/**
 * Indicates grammatical part of speech, used for inflecting strings.
 */
export const PartOfSpeech = codable(enumPartOfSpeech);
export type PartOfSpeech = ValueOf<typeof enumPartOfSpeech>;
