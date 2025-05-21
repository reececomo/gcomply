import { type InflectionConcept } from "./lib";

/**
 * Configuration options for the localization of text.
 */
export interface LocalizationOptions
{
    inflect: boolean;

    /**
     * The inflection concepts for achieving automatic grammar agreement during
     * localization.
     */
    concepts?: InflectionConcept[];
}
