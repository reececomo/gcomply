import { GrammaticalPerson } from "../GrammaticalPerson";

describe("GrammaticalPerson", () =>
{
    describe("Codable behaviors", () =>
    {
        const cases: [GrammaticalPerson, string][] = [
            [GrammaticalPerson.first,   "first"],
            [GrammaticalPerson.second,  "second"],
            [GrammaticalPerson.third,   "third"],
        ];

        const Codable = GrammaticalPerson;

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
