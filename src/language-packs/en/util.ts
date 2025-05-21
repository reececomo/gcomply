const SENTENCE_PATTERN = /(.*?)(\. |\n|$)/g;

export function processSentences(
    input: string,
    callback: (sentence: string) => string
): string
{
    return input.replace(SENTENCE_PATTERN, (_, sentence, delimiter) =>
        callback(sentence) + delimiter
    );
}
