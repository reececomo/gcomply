declare enum Definiteness {
	/** @example "the" */
	definite = "definite",
	/** @example "a", "some" */
	indefinite = "indefinite"
}
declare enum Determination {
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
	independent = "independent"
}
declare enum GrammaticalCase {
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
declare enum GrammaticalGender {
	/** The feminine grammatical gender. */
	feminine = "feminine",
	/** The masculine grammatical gender. */
	masculine = "masculine",
	/** Do not specify gender when inflecting a string. */
	neuter = "other"
}
declare enum GrammaticalNumber {
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
	plural = "other"
}
declare enum GrammaticalPerson {
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
declare enum PartOfSpeech {
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
declare enum PronounType {
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
/**
 * An inflection rule that performs automatic grammar agreement.
 *
 * Most applications can rely on default automatic grammar agreement. However, when the
 * system doesn’t have enough context about certain words in a string, you may need to
 * apply grammar rules programmatically.
 *
 * For example, if your application has information about a user's gender, you might want
 * to elect to to use the preferred pronoun (e.g. “Alex updated their profile”) at
 * runtime. In these cases, you define an inflection rule to tell the system which parts
 * of the string should be updated automatically and what data to match.
*/
export declare class InflectionRule {
	/**
	 * Whether the selected language supports grammar agreement.
	 *
	 * @param language A BCP 47 language code.
	 */
	static canInflect(language: string): boolean;
	/**
	 * An inflection rule that performs automatic grammar agreement with default
	 * transformations.
	 */
	static readonly automatic: InflectionRule;
	/**
	 * An inflection rule that uses morphology to determine how to inflect strings.
	 */
	static explicit(morphology: Morphology): InflectionRule;
	/**
	 * Explicit rules for applying inflection.
	 * When absent, uses automatic inference.
	 */
	readonly morphology?: Morphology;
	private constructor();
}
/**
 * The type for representing grammatical gender in localized text.
 *
 * Note: Not all terms of address exist in all languages.
 *
 * @example
 * const xemTermOfAddress = TermOfAddress.localized({
 *   language: "en",
 *   pronouns: [
 *     {
 *       pronoun: "xey",
 *       morphology: {
 *         grammaticalCase: "nominative"
 *       }
 *     },
 *     {
 *       pronoun: "xem",
 *       morphology: {
 *         grammaticalCase: "accusative"
 *       }
 *     },
 *     {
 *       pronoun: "xeir",
 *       morphology: {
 *         grammaticalCase: "genitive",
 *         determination: "dependent"
 *       }
 *     },
 *     {
 *       pronoun: "xeirs",
 *       morphology: {
 *         grammaticalCase: "genitive",
 *         determination: "independent"
 *       }
 *     },
 *     {
 *       pronoun: "xemself",
 *       morphology: {
 *         pronounType: "reflexive"
 *       }
 *     }
 *   ]
 * });
 */
export declare class TermOfAddress {
	/** Represents feminine pronouns and grammatical gender. */
	static readonly feminine: TermOfAddress;
	/** Represents masculine pronouns and grammatical gender. */
	static readonly masculine: TermOfAddress;
	/** Represents gender-neutral pronouns and grammatical gender. */
	static readonly neutral: TermOfAddress;
	/**
	 * @returns a term of address restricted to a specific language for a group of pronouns.
	 */
	static localized({ language, pronouns }: {
		/** The language to use for the term of address. */
		language: string;
		/** The pronouns for representing the terms of address. */
		pronouns: Pronoun[];
	}): TermOfAddress;
	/**
	 * The language associated with a term of address.
	 *
	 * Note: This is only set when created through {@link localized()}.
	 */
	readonly language?: string;
	/**
	 * The pronouns associated with a term of address.
	 *
	 * Note: This is only set when created through {@link localized()}.
	 */
	readonly pronouns?: Pronoun[];
	private constructor();
}
/**
 * Indicates that the system uses the associated string for grammatical agreement when
 * localizing text.
 */
export declare function localizedPhrase(localizedPhrase: LocalizedPhraseValue): LocalizedPhraseConcept;
/**
 * Indicates that the system uses the associated terms of address for grammatical
 * agreement when localizing text.
 */
export declare function termsOfAddress(termsOfAddress: TermsOfAddressValue): TermsOfAddressConcept;
/**
 * Configuration options for the localization of text.
 */
export interface LocalizationOptions {
	inflect: boolean;
	/**
	 * The inflection concepts for achieving automatic grammar agreement during
	 * localization.
	 */
	concepts?: InflectionConcept[];
}
/**
 * Describes the morphological and grammatical features of a phrase or token group,
 * including case, gender, number, person, and part of speech.
 */
export interface Morphology {
	/** Indicates whether the referent is identifiable and specific. */
	definiteness?: Grammar.DefinitenessLiteral;
	/** Indicates the behavior of a determiner in relation to a noun. */
	determination?: Grammar.DeterminationLiteral;
	/** Indicates the role of a noun or pronoun in a sentence. */
	grammaticalCase?: Grammar.GrammaticalCaseLiteral;
	/** Indicates the grammatical gender of a noun. */
	grammaticalGender?: Grammar.GrammaticalGenderLiteral;
	/** Indicates the grammatical persons in verb conjugation and pronoun usage. */
	grammaticalPerson?: Grammar.GrammaticalPersonLiteral;
	/** Indicates the grammatical number or plurality of a thing. */
	number?: Grammar.GrammaticalNumberLiteral;
	/** Indicates the grammatical part of speech. */
	partOfSpeech?: Grammar.PartOfSpeechLiteral;
	/** Indicates the grammatical function of pronouns. */
	pronounType?: Grammar.PronounTypeLiteral;
}
/**
 * A custom pronoun for referring to a third person.
 */
export interface Pronoun {
	/** The string representation of the pronoun. */
	pronoun: string;
	/** The morphology of the pronoun form. */
	morphology: Morphology;
	/** The dependent morphology of the pronoun form. */
	dependentMorphology?: Morphology;
}
export type DefinitenessLiteral = `${Definiteness}`;
export type DeterminationLiteral = `${Determination}`;
export type GrammaticalCaseLiteral = `${GrammaticalCase}`;
export type GrammaticalGenderLiteral = `${GrammaticalGender}`;
export type GrammaticalNumberLiteral = `${GrammaticalNumber}`;
export type GrammaticalPersonLiteral = `${GrammaticalPerson}`;
export type InflectionConcept = LocalizedPhraseConcept | TermsOfAddressConcept;
export type LocalizedPhraseConcept = {
	localizedPhrase: LocalizedPhraseValue;
};
export type LocalizedPhraseValue = string;
export type PartOfSpeechLiteral = `${PartOfSpeech}`;
export type PronounTypeLiteral = `${PronounType}`;
export type TermsOfAddressConcept = {
	termsOfAddress: TermsOfAddressValue;
};
export type TermsOfAddressValue = TermOfAddress[];

declare namespace Grammar {
	export { Definiteness, DefinitenessLiteral, Determination, DeterminationLiteral, GrammaticalCase, GrammaticalCaseLiteral, GrammaticalGender, GrammaticalGenderLiteral, GrammaticalNumber, GrammaticalNumberLiteral, GrammaticalPerson, GrammaticalPersonLiteral, PartOfSpeech, PartOfSpeechLiteral, PronounType, PronounTypeLiteral };
}

export {
	Grammar,
};

export {};
