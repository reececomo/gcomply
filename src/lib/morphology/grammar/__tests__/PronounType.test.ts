import { PronounType } from "../PronounType";

describe("PronounType", () =>
{
    describe("Codable behaviors", () =>
    {
        const cases: [PronounType, string][] = [
            [PronounType.personal,      "personal"],
            [PronounType.possessive,    "possessive"],
            [PronounType.reflexive,     "reflexive"],
        ];

        const Codable = PronounType;

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
