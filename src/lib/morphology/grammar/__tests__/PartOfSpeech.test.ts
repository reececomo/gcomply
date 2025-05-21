import { PartOfSpeech } from "../PartOfSpeech";

describe("PartOfSpeech", () =>
{
    describe("Codable behaviors", () =>
    {
        const cases: [PartOfSpeech, string][] = [
            [PartOfSpeech.determiner, "determiner"],
            [PartOfSpeech.pronoun, "pronoun"],
            [PartOfSpeech.letter, "letter"],
            [PartOfSpeech.adverb, "adverb"],
            [PartOfSpeech.particle, "particle"],
            [PartOfSpeech.adjective, "adjective"],
            [PartOfSpeech.adposition, "adposition"],
            [PartOfSpeech.verb, "verb"],
            [PartOfSpeech.noun, "noun"],
            [PartOfSpeech.conjunction, "conjunction"],
            [PartOfSpeech.numeral, "numeral"],
            [PartOfSpeech.interjection, "interjection"],
            [PartOfSpeech.preposition, "preposition"],
        ];

        const Codable = PartOfSpeech;

        it.each(cases)("encodes %d as '%s'", (member, encoded) =>
        {
            expect(Codable.encode(member)).toBe(encoded);
        });

        it.each([32])("encodes unknown values as undefined", (num) =>
        {
            expect(Codable.encode(num as any)).toBeUndefined();
        });

        it.each(cases)("init '%s' to %d", (member, encoded) =>
        {
            expect(Codable.init(encoded as any)).toBe(member);
        });

        it("throws on an invalid decode value", () =>
        {
            expect(() => Codable.init("unknown" as any)).toThrow();
        });
    });
});
