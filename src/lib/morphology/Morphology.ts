import * as Grammar from "./grammar/index.js";

/**
 * Describes the morphological and grammatical features of a phrase or token group,
 * including case, gender, number, person, and part of speech.
 */
export interface Morphology
{
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
