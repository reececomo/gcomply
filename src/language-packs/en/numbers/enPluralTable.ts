import Nouns from "./en_nouns.json";
import Verbs from "./en_verbs.json";

import { Grammar, Plurals } from "../../../lib";


export const enPluralTable = Plurals.forLang("en")
    .addTagged(Grammar.PartOfSpeech.noun, ...Nouns)
    .addTagged(Grammar.PartOfSpeech.verb, ...Verbs);
