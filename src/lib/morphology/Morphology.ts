import * as Grammar from "./grammar/index";

/**
 * Describes the morphological and grammatical features of a phrase or token group,
 * including case, gender, number, person, and part of speech.
 */
export interface Morphology
{
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
