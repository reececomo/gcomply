import { GrammaticalCase } from "../GrammaticalCase";

describe("GrammaticalCase", () =>
{
    describe("Codable behaviors", () =>
    {
        const cases: [GrammaticalCase, string][] = [
            [GrammaticalCase.ablative,       "ablative"],
            [GrammaticalCase.accusative,     "accusative"],
            [GrammaticalCase.adessive,       "adessive"],
            [GrammaticalCase.allative,       "allative"],
            [GrammaticalCase.dative,         "dative"],
            [GrammaticalCase.elative,        "elative"],
            [GrammaticalCase.essive,         "essive"],
            [GrammaticalCase.genitive,       "genitive"],
            [GrammaticalCase.illative,       "illative"],
            [GrammaticalCase.inessive,       "inessive"],
            [GrammaticalCase.locative,       "locative"],
            [GrammaticalCase.nominative,     "nominative"],
            [GrammaticalCase.prepositional,  "prepositional"],
            [GrammaticalCase.translative,    "translative"],
        ];

        const Codable = GrammaticalCase;

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
