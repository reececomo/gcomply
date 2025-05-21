export type ValueOf<T> = T[keyof T];

type IntEnumLike = Record<string, number>;

export type Codable<E extends IntEnumLike, StringValue = keyof E> = E & {
    /**
     * @throws invalid value
     */
    init(encoded: StringValue): E[keyof E];
    encode(value: E[keyof E]): StringValue;
};

export function codable<E extends IntEnumLike>(raw: E): Codable<E>
{
    const e = raw as Codable<E>;

    /** @throws invalid value */
    e.init = (key: keyof E): E[keyof E] =>
    {
        const value = e[key];
        if (value == null) throw new Error("invalid value: " + value);

        return value;
    };

    e.encode = (value: E[keyof E]): keyof E =>
    {
        for (const key in e) if (e[key] === value) return key;
    };

    return e;
}
