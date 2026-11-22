# TypeScript Blueprint

A structured, hands-on TypeScript learning repository designed to build mastery step by step — from global installation and primitive type annotations to functions, objects, classes, interfaces, generics, type narrowing, browser DOM, typed HTTP requests, and backend servers.

Every module is organized in **alphabetical order matching the exact learning sequence** (without numeric prefixes) and comes with concise study notes (`learn.md`) plus runnable TypeScript examples tested directly with **Bun** and verified with `tsc`.

## Getting Started

Make sure [Bun](https://bun.sh/) and [TypeScript](https://www.typescriptlang.org/) (`tsc`) are installed, then run any module directly from the project root:

```bash
# Run the installation hello example
bun app/about-installation/hello.ts

# Run a split module via its entry point
bun app/basic-type-annotations/index.ts

# Run an individual sub-topic file directly
bun app/basic-type-annotations/string.ts

# Type-check without emitting JavaScript files
tsc --noEmit app/basic-type-annotations/*.ts
```

> [!TIP]
> Need to install TypeScript globally first? Follow [app/about-installation/global.md](app/about-installation/global.md).

## Learning Path

Follow the modules from top to bottom — folder names are intentionally structured so alphabetical sorting reflects the recommended curriculum order.

### Foundations

- [About Installation](app/about-installation/) — global TypeScript setup ([global.md](app/about-installation/global.md)) and first runnable Bun script ([hello.ts](app/about-installation/hello.ts))
- [Basic Type Annotations](app/basic-type-annotations/) — split into standalone sub-topics (`string`, `number`, `boolean`, `type-inference`, `any-type`) loaded via [index.ts](app/basic-type-annotations/index.ts) ([learn.md](app/basic-type-annotations/learn.md))
- [Core Functions](app/core-functions/) — parameter annotations, default parameters, return annotations, `void`, and `never` ([learn.md](app/core-functions/learn.md))
- [Data Arrays](app/data-arrays/) — `T[]` bracket notation, `Array<T>` generic syntax, and multidimensional arrays ([learn.md](app/data-arrays/learn.md))

### Intermediate Type System

- [Essential Objects](app/essential-objects/) — object types, type aliases, optional properties (`?`), `readonly`, and intersection types (`&`) ([learn.md](app/essential-objects/learn.md))
- [Flexible Unions](app/flexible-unions/) — union types (`|`), mixed arrays, union objects, and literal types ([learn.md](app/flexible-unions/learn.md))
- [Grouped Tuples & Enums](app/grouped-tuples-enums/) — fixed-length typed tuples, destructuring, and enums ([learn.md](app/grouped-tuples-enums/learn.md))

### OOP & Generics

- [Hierarchy Classes](app/hierarchy-classes/) — class annotations, fields, `readonly`, `public`/`private`/`protected`, constructor parameter shorthand, getters/setters, and inheritance ([learn.md](app/hierarchy-classes/learn.md))
- [Interfaces](app/interfaces/) — object interfaces, function & method interfaces, extending interfaces, class `implements`, and declaration merging ([learn.md](app/interfaces/learn.md))
- [Modular Generics](app/modular-generics/) — generic functions, dictionary & array helpers, multiple type parameters (`<T, U>`), `extends` constraints, and generic classes ([learn.md](app/modular-generics/learn.md))
- [Narrowing Types](app/narrowing-types/) — `typeof` type guards, `instanceof` operator, and intersection narrowing ([learn.md](app/narrowing-types/learn.md))

### Runtime & Ecosystem

- [Page DOM](app/page-dom/) — type-safe DOM queries (`HTMLHeadingElement`, `HTMLButtonElement`) with [index.html](app/page-dom/index.html) and browser bundling via `bun build` ([learn.md](app/page-dom/learn.md))
- [Request Axios](app/request-axios/) — declaration files ([todo.d.ts](app/request-axios/todo.d.ts)), typed async HTTP requests with offline fallback, and Axios setup guide ([learn.md](app/request-axios/learn.md))
- [Server Express](app/server-express/) — typed HTTP request/response server runnable out of the box with `Bun.serve` (`--test` flag for quick verification) plus Express + `@types/express` guide ([learn.md](app/server-express/learn.md))

## How to Learn

1. Follow the modules in alphabetical order from `about-installation/` through `server-express/`.
2. Read the module's `learn.md` (or `global.md`) and the inline `/** ... */` JSDoc explanations inside each `.ts` file.
3. Run the module with `bun app/<module>/index.ts` and observe the terminal output.
4. Experiment by uncommenting type-error examples and running `tsc --noEmit` to see how TypeScript catches mistakes before runtime.

## Directory structure

<details>
<summary>View full directory tree</summary>

```text
app/
├── about-installation/
│   ├── global.md
│   └── hello.ts
├── basic-type-annotations/
│   ├── any-type.ts
│   ├── boolean.ts
│   ├── index.ts
│   ├── learn.md
│   ├── number.ts
│   ├── string.ts
│   └── type-inference.ts
├── core-functions/
│   ├── index.ts
│   └── learn.md
├── data-arrays/
│   ├── index.ts
│   └── learn.md
├── essential-objects/
│   ├── index.ts
│   └── learn.md
├── flexible-unions/
│   ├── index.ts
│   └── learn.md
├── grouped-tuples-enums/
│   ├── index.ts
│   └── learn.md
├── hierarchy-classes/
│   ├── index.ts
│   └── learn.md
├── interfaces/
│   ├── index.ts
│   └── learn.md
├── modular-generics/
│   ├── index.ts
│   └── learn.md
├── narrowing-types/
│   ├── index.ts
│   └── learn.md
├── page-dom/
│   ├── index.html
│   ├── index.ts
│   └── learn.md
├── request-axios/
│   ├── index.ts
│   ├── learn.md
│   └── todo.d.ts
└── server-express/
    ├── index.ts
    └── learn.md
```

</details>

## Contributing

Contributions that expand sub-topic splits, clarify `/** ... */` JSDoc explanations, or add practice exercises are welcome. Please follow the guidelines in [AGENTS.md](AGENTS.md) so every module remains consistent, type-safe, and runnable with Bun.
