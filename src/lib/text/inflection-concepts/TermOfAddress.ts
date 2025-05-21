import { type Pronoun } from "./Pronoun";

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
export class TermOfAddress
{
    // ----- Predefined: -----

    /** Represents feminine pronouns and grammatical gender. */
    public static readonly feminine = new TermOfAddress();

    /** Represents masculine pronouns and grammatical gender. */
    public static readonly masculine = new TermOfAddress();

    /** Represents gender-neutral pronouns and grammatical gender. */
    public static readonly neutral = new TermOfAddress();

    // ----- Initializers: -----

    /**
     * @returns a term of address restricted to a specific language for a group of pronouns.
     */
    public static localized({
        language,
        pronouns
    }: {
        /** The language to use for the term of address. */
        language: string,
        /** The pronouns for representing the terms of address. */
        pronouns: Pronoun[]
    }): TermOfAddress
    {
        return new TermOfAddress(language, pronouns);
    }

    // ----- Instance: -----

    /**
     * The language associated with a term of address.
     *
     * Note: This is only set when created through {@link localized()}.
     */
    public readonly language?: string;

    /**
     * The pronouns associated with a term of address.
     *
     * Note: This is only set when created through {@link localized()}.
     */
    public readonly pronouns?: Pronoun[];

    private constructor(
        language?: string,
        pronouns?: Pronoun[],
    )
    {
        this.language = language;
        this.pronouns = pronouns;
    }
}
