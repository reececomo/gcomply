import { Morphology } from "../morphology/Morphology";

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
export class InflectionRule
{
    // ----- Determining Availability: -----

    /**
     * Whether the selected language supports grammar agreement.
     *
     * @param language A BCP 47 language code.
     */
    public static canInflect(language: string): boolean
    {
        return false; // TODO: implement?
    }

    // ----- Initializers: -----

    /**
     * An inflection rule that performs automatic grammar agreement with default
     * transformations.
     */
    public static readonly automatic = new InflectionRule();

    /**
     * An inflection rule that uses morphology to determine how to inflect strings.
     */
    public static explicit(morphology: Morphology): InflectionRule
    {
        return new InflectionRule(morphology);
    }

    // ----- Instance: -----

    /**
     * Explicit rules for applying inflection.
     * When absent, uses automatic inference.
     */
    public readonly morphology?: Morphology;

    private constructor(morphology?: Morphology)
    {
        this.morphology = morphology;
    }
}
