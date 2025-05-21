import { GrammaticalGender } from "../GrammaticalGender";

describe("GrammaticalGender", () =>
{
    describe("Codable behaviors", () =>
    {
        const cases: [GrammaticalGender, string][] = [
            [GrammaticalGender.feminine,    "feminine"],
            [GrammaticalGender.masculine,   "masculine"],
            [GrammaticalGender.neuter,      "neuter"],
        ];

        const Codable = GrammaticalGender;

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
