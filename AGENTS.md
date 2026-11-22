# Project Rules

## Keep `readme.md` Updated

After adding, editing, renaming, or deleting files in this repository, always review and update `readme.md` so documentation stays in sync with the actual project contents.

Specifically check and update:

1. **Learning path sections** (`### Foundations`, `### Intermediate Type System`, `### OOP & Generics`, and `### Runtime & Ecosystem`): Add, update, or remove entries whenever topic files change. Only list topics that have actual content (do not list empty placeholder files).
2. **Directory structure** (`## Directory structure`): Keep the folder tree accurate and sorted alphabetically to match the available topics.
3. **Links, paths, and descriptions**: Ensure all relative links, example commands, and topic summaries in `readme.md` remain valid and reflect the latest changes.

## Documentation & Code Quality Standards

When creating or editing TypeScript learning materials in this repository:

1. **Document with JSDoc (`/** ... */`) and `learn.md`**:
   - Start each `.ts` file with a `/** ... */` overview explaining the concept and its common use cases.
   - Explain each section or example with concise `/** ... */` comments in Indonesian.
   - Document functions with proper `@param` and `@returns` JSDoc tags.
   - Include expected output comments next to `console.log()` calls where helpful.
   - Name module study guides `learn.md` (lowercase, not `README.md`).
2. **Write clean and proper TypeScript**:
   - Use `const` by default and `let` only when reassignment is required; never declare implicit globals or redeclare variables in the same scope (add `export {}` to standalone script files so TypeScript isolates module scope).
   - Prefer realistic, descriptive names and safe, idiomatic patterns (avoid unnecessary `any`, use strict equality `===`, guard nullable values, and document compile-time error examples inside comments).
   - Follow the repository formatting style: 4-space indentation, double quotes, trailing commas on multiline objects/arrays, and no semicolons.
   - Ensure every `.ts` file runs cleanly with Bun (`bun <file>`) without runtime errors and passes `tsc --noEmit` without type errors (wrap async entry points in `async function main(): Promise<void>` instead of bare top-level `await`).
3. **Consistent folder naming and entry point**:
   - Use lowercase kebab-case names for all topic folders and files, without numeric prefixes (`1.`, `01-`) or single-letter prefixes (`a-`, `b-`); choose natural topic names whose alphabetical order matches the learning sequence (e.g., `about-installation/`, `basic-type-annotations/`, `core-functions/`).
   - Every topic folder should use `index.ts` as its main entry file (except `about-installation/`, which provides `global.md` and `hello.ts`).
   - When a topic is split into multiple files for distinct sub-concepts, keep each sub-file independently runnable with Bun and load them sequentially from `index.ts` using an async `runTopic(title, modulePath)` wrapper function.

## Git & Pull Request Workflow

1. **Push only when requested**: Only run `git push` when the user explicitly asks to push directly. Otherwise, leave changes or commits local so the user can review them first.
2. **Pull Requests (`dev` -> `main`)**: When asked to open a Pull Request to `main`, create it from `dev` via the GitHub website, then wait for user review and explicit confirmation before merging.
3. **Keep `dev` branch**: Never delete the `dev` branch after merging a Pull Request into `main`.
