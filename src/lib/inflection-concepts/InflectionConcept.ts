import { TermOfAddress } from "./TermOfAddress";

// ----- Inflection concepts: -----

export type InflectionConcept = LocalizedPhraseConcept | TermsOfAddressConcept;

// ----- Concept - Localized phrase: -----

type LocalizedPhraseValue = string;
type LocalizedPhraseConcept = { localizedPhrase: LocalizedPhraseValue; }

/**
 * Indicates that the system uses the associated string for grammatical agreement when
 * localizing text.
 */
export function localizedPhrase(localizedPhrase: LocalizedPhraseValue): LocalizedPhraseConcept
{
    return { localizedPhrase };
}

export function isLocalizedPhrase(x: InflectionConcept): x is LocalizedPhraseConcept
{
    return "localizedPhrase" in x;
}

// ----- Concept - Terms of address: -----

type TermsOfAddressValue = TermOfAddress[];
type TermsOfAddressConcept = { termsOfAddress: TermsOfAddressValue; }

/**
 * Indicates that the system uses the associated terms of address for grammatical
 * agreement when localizing text.
 */
export function termsOfAddress(termsOfAddress: TermsOfAddressValue): TermsOfAddressConcept
{
    return { termsOfAddress };
}

export function isTermsOfAddress(x: InflectionConcept): x is TermsOfAddressConcept
{
    return "termsOfAddress" in x;
}
