import { Morphology } from "../morphology/Morphology";

/**
 * A custom pronoun for referring to a third person.
 */
export interface Pronoun
{
    /** The string representation of the pronoun. */
    pronoun: string;

    /** The morphology of the pronoun form. */
    morphology: Morphology;

    /** The dependent morphology of the pronoun form. */
    dependentMorphology?: Morphology;
}
