<h1 align="center">
  🪡 GComply
</h1>

<p align="center">
  Beautiful and natural-sounding text for <i>humans</i>.
</p>

<p align="center">
  <a href="https://github.com/reececomo/gcomplyblob/main/LICENSE">
    <img alt="License" src="https://badgen.net/npm/license/gcomply">
  </a>
  <a href="https://www.npmjs.com/package/gcomply">
    <img alt="Downloads per month" src="https://img.shields.io/npm/dm/gcomply.svg">
  </a>
  <a href="https://www.npmjs.com/package/gcomply">
    <img alt="NPM version" src="https://img.shields.io/npm/v/gcomply.svg">
  </a>
</p>

<table align="center"><tr><td>

```ts
`Add ${count} person(s) to group.`
// "Add 2 person(s) to group." ❌

g`Add ${count} person to group.`
// "Add 2 people to group." ✅
```

</td></tr></table>

<p align="center">
A lightweight <strong>automatic grammar agreement</strong> engine.
</p>

> [!CAUTION]
> **Experimental**: This is an experimental API for automatic grammar agreement in
> JavaScript/TypeScript that relates to the ideals from Swift's new
> [InflectionRule API](https://developer.apple.com/documentation/foundation/inflectionrule).

## **🚀 Mission**

✅ **What gcomply is:**
Take the complexity of grammar agreement&mdash;such as pluralization
and gender support&mdash;out of dynamic strings. Improve user experience, simplify code,
and even improve localization quality.

❌ **What gcomply is NOT:**
Perfect and complete grammar correction for all languages.

<details><summary><h4>📘 Read more: Distinction from ICU Intl.MessageFormat</h4></summary>

**Intl.MessageFormat** provides manual support for plural/selects. But it is entirely
manual, and up to developers to predict all variance. It's also very challenging to
correctly translate any string where a parameter (i.e. a noun) is interpolated.

**Example:**

```ts
const notification = t("I was in {country}")
// German: "Ich war in {country}"

const switzerland = t("Switzerland")
// German: "die Schweiz"

notification.format({ country: switzerland })
// "Ich war in die Schweiz" ❌

// The feminine dative article is "der" (not 
// "die") so it should instead be:
// "Ich war in der Schweiz" ✅
```

In this example if you supported 180+ countries, you might have a much bigger problem.

So to summarize, **ICU MessageFormat** is a great tool, but its focused primarily on a
different problem.

</details>

## ✨ Features

- ⚡️ **Instant grammar agreement** — plurals, gender, articles, etc.
- 📦 **Highly pluggable** — compatible with any other framework
- 🌐 **Localizable** — add support for any natural language
- 🪶 **Featherweight** — <1kB, zero dependencies

Add custom transforms, domain terminology, nouns, pronouns, and more.

## API Usage

### Simple usage

- Syntax: ``` g`` ```

The `g` tagged template will coerce inline grammar
(in accordance to any global options).

```ts
import { g } from "gcomply";

let views = content.viewCount,
    shares = content.shareCount

let text = g`${views} new views, ${shares} new shares`
// "35 new views, 1 new share"
```

### Complex grammar

- Syntax: `inflect(text, options?)` 

The `inflect()` function provides a little more flexibility for complex
grammatical agreement, and may also be passed additional external options:

```ts
import { inflect } from "gcomply";

let text = "Votre conseiller est prêt."

let opts = {
    language: "fr",
    morphology: { grammaticalGender: "feminine" }
}

inflect(text)        // "Votre conseiller est prêt."
inflect(text, opts)  // "Votre conseillère est prête."
```

> [!NOTE]
> **Terminology:**
>
> Parts of the API terminology is modeled to be consistent with the emerging equivalent
> Swift APIs for
> [morphology](https://developer.apple.com/documentation/foundation/morphology)
> and [inflection](https://developer.apple.com/videos/play/wwdc2023/10153/).
>
> Notably though, there is **no direct proxy** for Swift's
> [AttributedString](https://developer.apple.com/documentation/foundation/attributedstring)
> in JavaScript.

## Implementation status

These are the Swift agreement features:

| Status | Agreement Type | Methodology | Code Changes | Description
| --- | ---------------------- | ----------------------- | ------------ | ---
| partial | `inflect` | Proximity-based | No | Reference neighboring elements.
| ❌ | `agreeWithArgument` | Explicit reference, same string | No | Directly reference other elements in the strings.
| ❌ | `agreeWithConcept` | Explicit reference, injected | Yes | Agree with a `Concept` passed in via context.

> [!NOTE]
> **Source:** See [WWDC2023 @ 6:15](https://developer.apple.com/videos/play/wwdc2023/10153/)

## 🛠️ Contributing

Contributions are welcome, such as:
- New language packs
- More granular inflection rules
- Bug fixes and test cases
- Integrations for other frameworks or i18n tools

> [!Important]
> Keep in mind, the goal of this package is not to provide perfect and comprehensive
> language support that covers all possible permutations out-of-the-box.

<!-- See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for details. -->
