declare class LanguagePluralTable {
	private keys;
	private tags;
	private matcher;
	private nextId;
	private one;
	private other;
	private zero;
	private two;
	private few;
	private many;
	private tables;
	constructor();
	test(value: string, requiredTag?: Grammar.PartOfSpeech): boolean;
	getReplaceablePortion(token: string): string;
	replace(token: string, plurality: Grammar.GrammaticalNumber): string;
	addTagged(tag?: Grammar.PartOfSpeech, ...data: PluralEntry[]): this;
	add(...data: PluralEntry[]): this;
	private lookup;
	private getTable;
}
declare class PluralManager {
	private data;
	add(lang: string, ...data: PluralEntry[]): this;
	forLang(lang: string): LanguagePluralTable;
}
declare const Definiteness: Codable<{
	/** @example "the" */
	readonly definite: 1;
	/** @example "a", "some" */
	readonly indefinite: 2;
}, "definite" | "indefinite">;
declare const Determination: Codable<{
	/**
	 * The determiner modifies or accompanies a noun within the noun phrase. It
	 * cannot stand alone as a full noun phrase without the noun.
	 *
	 * @example "[My] car.", "[This] book."
	 */
	readonly dependent: 1;
	/**
	 * The determiner functions on its own, effectively standing in for a full
	 * noun phrase.
	 *
	 * @example "That is [hers].", "I want [those]."
	 */
	readonly independent: 2;
}, "dependent" | "independent">;
declare const GrammaticalCase: Codable<{
	/**
	 * Expresses movement away from something.
	 * @example "from the house"
	 */
	readonly ablative: 1;
	/**
	 * Marks the direct object of a verb.
	 * @example "I see the car"
	 */
	readonly accusative: 2;
	/**
	 * Denotes presence at a location, often used in Uralic languages.
	 * @example "at the station"
	 */
	readonly adessive: 3;
	/**
	 * Expresses motion toward something.
	 * @example "to the house"
	 */
	readonly allative: 4;
	/**
	 * Marks the indirect object or recipient.
	 * @example "I gave the book to her"
	 */
	readonly dative: 5;
	/**
	 * Indicates motion out of or from within.
	 * @example "out of the room"
	 */
	readonly elative: 6;
	/**
	 * Indicates a temporary or current state.
	 * @example "as a teacher"
	 */
	readonly essive: 7;
	/**
	 * Shows possession or relationship.
	 * @example "the boy's dog"
	 */
	readonly genitive: 8;
	/**
	 * Expresses motion into something.
	 * @example "into the house"
	 */
	readonly illative: 9;
	/**
	 * Denotes being inside something.
	 * @example "in the room"
	 */
	readonly inessive: 10;
	/**
	 * Marks location or position.
	 * @example "on the table"
	 */
	readonly locative: 11;
	/**
	 * Marks the subject of a sentence.
	 * @example "The cat sleeps"
	 */
	readonly nominative: 12;
	/**
	 * Often used with prepositions to show location or topic.
	 * @example "about the war"
	 */
	readonly prepositional: 13;
	/**
	 * Indicates a change of state or becoming something.
	 * @example "became a leader"
	 */
	readonly translative: 14;
}, "ablative" | "accusative" | "adessive" | "allative" | "dative" | "elative" | "essive" | "genitive" | "illative" | "inessive" | "locative" | "nominative" | "prepositional" | "translative">;
declare const GrammaticalGender: Codable<{
	/**
	 * The feminine grammatical gender.
	 */
	readonly feminine: 1;
	/**
	 * The masculine grammatical gender.
	 */
	readonly masculine: 2;
	/**
	 * Do not specify gender when inflecting a string.
	 */
	readonly neuter: 3;
}, "feminine" | "masculine" | "neuter">;
declare const GrammaticalNumber: Codable<typeof enumGrammaticalNumber, EncodedGrammaticalNumber>;
declare const GrammaticalPerson: Codable<{
	/**
	 * Referring to the speaker or group including the speaker.
	 * @example "I", "we"
	 */
	readonly first: 1;
	/**
	 * Referring to the person being spoken to.
	 * @example "you"
	 */
	readonly second: 2;
	/**
	 * Referring to someone or something being spoken about.
	 * @example "he", "she", "they"
	 */
	readonly third: 3;
}, "first" | "second" | "third">;
declare const PartOfSpeech: Codable<{
	/**
	 * Words that introduce and modify nouns (such as indefinite articles).
	 * @example "the", "a", "this"
	 */
	readonly determiner: 1;
	/**
	 * Words that take the place of nouns.
	 * @example "he", "she", "they", "it"
	 */
	readonly pronoun: 2;
	/**
	 * Individual alphabetic characters, used symbolically or phonetically.
	 * @example "A", "b", "z"
	 */
	readonly letter: 3;
	/**
	 * Words that modify verbs, adjectives, or other adverbs.
	 * @example "quickly", "very", "always"
	 */
	readonly adverb: 4;
	/**
	 * Function words often forming part of phrasal verbs or adding grammatical nuance.
	 * @example "up" (as in "give up"), "out" (as in "find out")
	 */
	readonly particle: 5;
	/**
	 * Words that describe or modify nouns.
	 * @example "red", "beautiful", "large"
	 */
	readonly adjective: 6;
	/**
	 * Words that show relationships between elements, including prepositions and
	 * postpositions.
	 * @example "on", "under", "beside"
	 */
	readonly adposition: 7;
	/**
	 * Words that express actions, events, or states of being.
	 * @example "run", "is", "seem"
	 */
	readonly verb: 8;
	/**
	 * Words that identify people, places, things, or concepts.
	 * @example "cat", "city", "freedom"
	 */
	readonly noun: 9;
	/**
	 * Words that link clauses, phrases, or words.
	 * @example "and", "but", "because"
	 */
	readonly conjunction: 10;
	/**
	 * Words that represent numbers or order.
	 * @example "one", "second", "forty"
	 */
	readonly numeral: 11;
	/**
	 * Words or sounds that express emotion or sudden reaction.
	 * @example "wow", "oops", "hey"
	 */
	readonly interjection: 12;
	/**
	 * A type of adposition placed before a noun to show relationship.
	 * @example "in", "by", "at"
	 */
	readonly preposition: 13;
	/**
	 * Shortened forms of words or phrases.
	 * @example "Dr.", "etc.", "UN"
	 */
	readonly abbreviation: 14;
}, "determiner" | "pronoun" | "letter" | "adverb" | "particle" | "adjective" | "adposition" | "verb" | "noun" | "conjunction" | "numeral" | "interjection" | "preposition" | "abbreviation">;
declare const PronounType: Codable<{
	/**
	 * Refers directly to a person or thing.
	 * @example "I", "you", "they"
	 */
	readonly personal: 1;
	/**
	 * Indicates possession.
	 * @example "my", "your", "their"
	 */
	readonly possessive: 2;
	/**
	 * Refers back to the subject of the clause.
	 * @example "myself", "yourself", "themselves"
	 */
	readonly reflexive: 3;
}, "personal" | "possessive" | "reflexive">;
declare const enumDefiniteness: {
	/** @example "the" */
	readonly definite: 1;
	/** @example "a", "some" */
	readonly indefinite: 2;
};
declare const enumDetermination: {
	/**
	 * The determiner modifies or accompanies a noun within the noun phrase. It
	 * cannot stand alone as a full noun phrase without the noun.
	 *
	 * @example "[My] car.", "[This] book."
	 */
	readonly dependent: 1;
	/**
	 * The determiner functions on its own, effectively standing in for a full
	 * noun phrase.
	 *
	 * @example "That is [hers].", "I want [those]."
	 */
	readonly independent: 2;
};
declare const enumGrammaticalCase: {
	/**
	 * Expresses movement away from something.
	 * @example "from the house"
	 */
	readonly ablative: 1;
	/**
	 * Marks the direct object of a verb.
	 * @example "I see the car"
	 */
	readonly accusative: 2;
	/**
	 * Denotes presence at a location, often used in Uralic languages.
	 * @example "at the station"
	 */
	readonly adessive: 3;
	/**
	 * Expresses motion toward something.
	 * @example "to the house"
	 */
	readonly allative: 4;
	/**
	 * Marks the indirect object or recipient.
	 * @example "I gave the book to her"
	 */
	readonly dative: 5;
	/**
	 * Indicates motion out of or from within.
	 * @example "out of the room"
	 */
	readonly elative: 6;
	/**
	 * Indicates a temporary or current state.
	 * @example "as a teacher"
	 */
	readonly essive: 7;
	/**
	 * Shows possession or relationship.
	 * @example "the boy's dog"
	 */
	readonly genitive: 8;
	/**
	 * Expresses motion into something.
	 * @example "into the house"
	 */
	readonly illative: 9;
	/**
	 * Denotes being inside something.
	 * @example "in the room"
	 */
	readonly inessive: 10;
	/**
	 * Marks location or position.
	 * @example "on the table"
	 */
	readonly locative: 11;
	/**
	 * Marks the subject of a sentence.
	 * @example "The cat sleeps"
	 */
	readonly nominative: 12;
	/**
	 * Often used with prepositions to show location or topic.
	 * @example "about the war"
	 */
	readonly prepositional: 13;
	/**
	 * Indicates a change of state or becoming something.
	 * @example "became a leader"
	 */
	readonly translative: 14;
};
declare const enumGrammaticalGender: {
	/**
	 * The feminine grammatical gender.
	 */
	readonly feminine: 1;
	/**
	 * The masculine grammatical gender.
	 */
	readonly masculine: 2;
	/**
	 * Do not specify gender when inflecting a string.
	 */
	readonly neuter: 3;
};
declare const enumGrammaticalNumber: {
	/**
	 * A single person or thing.
	 *
	 * Encoded value: "one"
	 */
	readonly singular: 1;
	/**
	 * Zero persons or things.
	 *
	 * Encoded value: "zero"
	 */
	readonly zero: 2;
	/**
	 * Multiple persons or things.
	 *
	 * Encoded value: "other"
	 */
	readonly plural: 3;
	/**
	 * Two persons or things.
	 *
	 * Encoded value: "two"
	 */
	readonly pluralTwo: 4;
	/**
	 * A small number of persons or things.
	 *
	 * Encoded value: "few"
	 */
	readonly pluralFew: 5;
	/**
	 * A large number of persons or things.
	 *
	 * Encoded value: "many"
	 */
	readonly pluralMany: 6;
};
declare const enumGrammaticalPerson: {
	/**
	 * Referring to the speaker or group including the speaker.
	 * @example "I", "we"
	 */
	readonly first: 1;
	/**
	 * Referring to the person being spoken to.
	 * @example "you"
	 */
	readonly second: 2;
	/**
	 * Referring to someone or something being spoken about.
	 * @example "he", "she", "they"
	 */
	readonly third: 3;
};
declare const enumPartOfSpeech: {
	/**
	 * Words that introduce and modify nouns (such as indefinite articles).
	 * @example "the", "a", "this"
	 */
	readonly determiner: 1;
	/**
	 * Words that take the place of nouns.
	 * @example "he", "she", "they", "it"
	 */
	readonly pronoun: 2;
	/**
	 * Individual alphabetic characters, used symbolically or phonetically.
	 * @example "A", "b", "z"
	 */
	readonly letter: 3;
	/**
	 * Words that modify verbs, adjectives, or other adverbs.
	 * @example "quickly", "very", "always"
	 */
	readonly adverb: 4;
	/**
	 * Function words often forming part of phrasal verbs or adding grammatical nuance.
	 * @example "up" (as in "give up"), "out" (as in "find out")
	 */
	readonly particle: 5;
	/**
	 * Words that describe or modify nouns.
	 * @example "red", "beautiful", "large"
	 */
	readonly adjective: 6;
	/**
	 * Words that show relationships between elements, including prepositions and
	 * postpositions.
	 * @example "on", "under", "beside"
	 */
	readonly adposition: 7;
	/**
	 * Words that express actions, events, or states of being.
	 * @example "run", "is", "seem"
	 */
	readonly verb: 8;
	/**
	 * Words that identify people, places, things, or concepts.
	 * @example "cat", "city", "freedom"
	 */
	readonly noun: 9;
	/**
	 * Words that link clauses, phrases, or words.
	 * @example "and", "but", "because"
	 */
	readonly conjunction: 10;
	/**
	 * Words that represent numbers or order.
	 * @example "one", "second", "forty"
	 */
	readonly numeral: 11;
	/**
	 * Words or sounds that express emotion or sudden reaction.
	 * @example "wow", "oops", "hey"
	 */
	readonly interjection: 12;
	/**
	 * A type of adposition placed before a noun to show relationship.
	 * @example "in", "by", "at"
	 */
	readonly preposition: 13;
	/**
	 * Shortened forms of words or phrases.
	 * @example "Dr.", "etc.", "UN"
	 */
	readonly abbreviation: 14;
};
declare const enumPronounType: {
	/**
	 * Refers directly to a person or thing.
	 * @example "I", "you", "they"
	 */
	readonly personal: 1;
	/**
	 * Indicates possession.
	 * @example "my", "your", "their"
	 */
	readonly possessive: 2;
	/**
	 * Refers back to the subject of the clause.
	 * @example "myself", "yourself", "themselves"
	 */
	readonly reflexive: 3;
};
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
export declare const Plurals: PluralManager;
/**
 * @example
 *  g`You have ${count} new message.`
 *
 *  // becomes
 *  "You have 2 new messages."
 */
export declare function g(raw: TemplateStringsArray, ...args: TextArgument[]): string;
/**
 * @example
 *  inflect("You have 2 new message.")
 *
 *  // becomes
 *  "You have 2 new messages."
 */
export declare function inflect(text: string, options?: GrammarOptions): string;
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
export interface GrammarOptions {
	language?: string;
	morphology?: Morphology;
}
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
	definiteness?: Grammar.Definiteness;
	/** Indicates the behavior of a determiner in relation to a noun. */
	determination?: Grammar.Determination;
	/** Indicates the role of a noun or pronoun in a sentence. */
	grammaticalCase?: Grammar.GrammaticalCase;
	/** Indicates the grammatical gender of a noun. */
	grammaticalGender?: Grammar.GrammaticalGender;
	/** Indicates the grammatical persons in verb conjugation and pronoun usage. */
	grammaticalPerson?: Grammar.GrammaticalPerson;
	/** Indicates the grammatical number or plurality of a thing. */
	number?: Grammar.GrammaticalNumber;
	/** Indicates the grammatical part of speech. */
	partOfSpeech?: Grammar.PartOfSpeech;
	/** Indicates the grammatical function of pronouns. */
	pronounType?: Grammar.PronounType;
}
export interface PluralEntry {
	zero?: string;
	one?: string;
	other?: string;
	two?: string;
	few?: string;
	many?: string;
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
export type Codable<E extends IntEnumLike, StringValue = keyof E> = E & {
	/**
	 * @throws invalid value
	 */
	init(encoded: StringValue): E[keyof E];
	encode(value: E[keyof E]): StringValue;
};
export type Definiteness = ValueOf<typeof enumDefiniteness>;
export type Determination = ValueOf<typeof enumDetermination>;
export type EncodedGrammaticalNumber = "one" | "zero" | "other" | "two" | "few" | "many";
export type GrammaticalCase = ValueOf<typeof enumGrammaticalCase>;
export type GrammaticalGender = ValueOf<typeof enumGrammaticalGender>;
export type GrammaticalNumber = ValueOf<typeof enumGrammaticalNumber>;
export type GrammaticalPerson = ValueOf<typeof enumGrammaticalPerson>;
export type InflectionConcept = LocalizedPhraseConcept | TermsOfAddressConcept;
export type IntEnumLike = Record<string, number>;
export type LocalizedPhraseConcept = {
	localizedPhrase: LocalizedPhraseValue;
};
export type LocalizedPhraseValue = string;
export type PartOfSpeech = ValueOf<typeof enumPartOfSpeech>;
export type PronounType = ValueOf<typeof enumPronounType>;
export type TermsOfAddressConcept = {
	termsOfAddress: TermsOfAddressValue;
};
export type TermsOfAddressValue = TermOfAddress[];
export type TextArgument = string | number;
export type ValueOf<T> = T[keyof T];

declare namespace Grammar {
	export { Definiteness, Determination, GrammaticalCase, GrammaticalGender, GrammaticalNumber, GrammaticalPerson, PartOfSpeech, PronounType, enumGrammaticalCase };
}

export {
	Grammar,
};

export {};
