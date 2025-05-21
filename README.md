# 🪡 Gcomply &nbsp;[![License](https://badgen.net/npm/license/gcomply)](https://github.com/reececomo/gcomplyblob/main/LICENSE) [![Downloads per month](https://img.shields.io/npm/dm/gcomply.svg)](https://www.npmjs.com/package/gcomply) [![NPM version](https://img.shields.io/npm/v/gcomply.svg)](https://www.npmjs.com/package/gcomply)

Create beautiful and natural-sounding text for users — via an ultra lightweight **automatic grammar agreement** engine.

```ts
`Add ${count} person(s) to group.`
// "Add 2 person(s) to group." ❌

g`Add ${count} person to group.`
// "Add 2 people to group." ✅
```

🗣️ Write language-aware interfaces that respect grammar rules in multiple languages.

> [!CAUTION]
> **Experimental**: This is an experimental API for automatic grammar agreement. Given
> the complexities of linguistics, the goal is to offer an ultra lightweight and
> extensible engine that can be tailored to specific domains and languages.

> [!IMPORTANT]
> 📦 **Localization (l10n) support:** Coming soon - aiming to be completely tree shakable.

## API

```ts
g`${posts.length} new posts, ${friendRequests.length} new friend requests`;
// "1 new post, 4 new friend requests"

const text = inflect("5 new message");
// "5 new messages"
```

### Grammatical Agreement

Based off of the new automatic grammatical agreement APIs in [Swift](https://developer.apple.com/videos/play/wwdc2023/10153/).

These are the Swift features:

| Implemented | Agreement Type | Proximity    | Code Changes | Description
| --- | ---------------------- | ------------ | ------------ | ---
| partial | `inflect`          | Immediate    | No           | Reference neighboring elements.
| ❌ | `agreeWithArgument`     | Same string  | No           | Directly reference other elements in the strings.
| ❌ | `agreeWithConcept`      | Detached     | Yes          | Agree with a `Concept` passed in via context.

> [!NOTE]
> **Source:** See [WWDC2023 @ 6:15](https://developer.apple.com/videos/play/wwdc2023/10153/)

### Practical Examples

> [!WARNING]
> **Not implemented:** Not yet implemented!

#### Grammatical Gender

```ts
inflect("Votre conseiller est prêt.").with({ grammarGender: "feminine" });
// "Votre conseillère est prête."
```

Here's how it might look in ICU MessageFormat:

```ts
const text = new Intl.MessageFormat(`Su {
    doctorGender, select,
      female {doctora}
      other  {doctor}
} {
    userGender, select,
      female {la}
      other  {lo}
} verá mañana.`).format({
  doctorGender: "female",
  userGender: "male",
});
```

```ts
g`Votre conseiller est prêt.`.with({ grammaticalGender: "feminine" });
// "Votre conseillère est prête."

g`Su {
    doctor_gender, select,
    masculine {doctor}
    feminine  {doctora}
} {
    user_gender, select,
    masculine {lo}
    feminine  {la}
} verá mañana.`
    .concepts([
        termsOfAddress([doctor.grammaticalGender]),
    ])
// "Su doctora la verá mañana."

g`"Su doctor lol verá mañana."`
    .set({ grammaticalGender: "feminine" })
    .set(1, { gender: null })
// "Su doctora lo verá mañana."
```


## ✨ Features

- 💬 **Automatic Grammar Agreement** — plurals, grammatical gender, articles
- 🔧 **Manual inflection** — for nouns, verbs and more
- 🌐 **Localization friendly** — leverage existing **Intl.MessageFormat** syntax
- 📦 **Zero dependencies** — compatible with React, Vue, Svelte, `i18next`, `formatjs`, etc.

> 🗣️ Write language-aware interfaces that respect grammar rules. Useful for i18n, content generation, conversational UI, and more.

---


## 🚀 Getting Started

### Installation

```bash
npm install gcomply

yarn add gcomply
```

### Importing a Language Pack

Languages are opt-in to reduce bundle size:

```ts
import { gcomply } from 'gcomply';
import { enUS } from 'gcomplylang/en-US';

const gcomply = new gcomply({ locale: enUS });
```

---

## 🧠 Core API

### `inflect(template: string, context: GrammarContext): string`

Use this to apply grammar agreement dynamically.

#### Example

```ts
gcomply.inflect(
  "The {author} {write|writes} a message.",
  { number: "singular", person: "third" }
);
// → "The author writes a message."
```

---

## 🧩 API Reference

### `GrammarContext`

```ts
type GrammarContext = {
  person?: "first" | "second" | "third";
  number?: "singular" | "plural";
  gender?: "masculine" | "feminine" | "neutral";
  formality?: "formal" | "informal"; // for supported locales
};
```

### gcomply Class

```ts
new gcomply(options: {
  locale: LocaleDefinition;
});

inflect(template: string, context: GrammarContext): string;
```

---

## 🌐 Supported Languages

Initial support includes:

| Language           | Code     |
|--------------------|----------|
| English (US)       | `en-US`  |
| English (UK)       | `en-GB`  |
| Spanish (Spain)    | `es`     |
| Spanish (Mexico)   | `es-MX`  |

To keep things efficient, **you must import the languages you use**.

```ts
import { esMX } from 'gcomplylang/es-MX';
```

---

## 🔌 Integrations (Coming Soon)

- React bindings (`<Inflect />`, `useInflection`)
- i18next plugin
- CLI tools for devs

---

## 🛠️ Contributing

We welcome contributions of:
- New language packs
- More granular inflection rules
- Bug fixes and test cases
- Integrations for other frameworks or i18n tools

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for details.

---

## 📄 License

MIT © 2025 [Your Name or Org]

---

## 🙋 FAQ

### Why only English and Spanish?
We’re starting with widely spoken languages that show clear morphological variation. More languages can be added as opt-in modules. Contributions welcome!

### How is this different from i18next plural/gender support?
Most i18n libraries handle pluralization and basic gender, but not **morphological agreement** (e.g., verb conjugation or adjective/noun matching). gcomply fills that gap.

---

## ⭐️ Star This Project

If you find gcomply useful, give it a ⭐️ and help grow the community!

### ICU syntax supported

```ts
g`{${count}, plural,
  one   {New message in inbox.}
  other {There are # new messages in your inbox.}}`;
// "New message in inbox."
```
