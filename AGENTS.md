# Project Rules

## Keep `readme.md` Updated

After adding, editing, renaming, or deleting files in this repository, always review and update `readme.md` so documentation stays in sync with the actual project contents.

Specifically check and update:

1. **Learning path sections** (`### Foundations`, `### Intermediate Type System`, `### OOP & Generics`, and `### Runtime & Ecosystem`): Add, update, or remove entries whenever topic files change. Only list topics that have actual content (do not list empty placeholder files).
2. **Directory structure** (`## Directory structure`): Keep the folder tree accurate and sorted alphabetically to match the available topics.
3. **Links, paths, and descriptions**: Ensure all relative links, example commands, and topic summaries in `readme.md` remain valid and reflect the latest changes.

## Documentation & Code Quality Standards

When creating or editing TypeScript learning materials in this repository:

1. **Document with JSDoc (`/** ... \*/`) and `learn.md`\*\*:
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

1. **Conventional Commits v1.0.0 & Co-Author Attribution**: Every commit message must follow [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) (`<type>[optional scope]: <description>`), using standard types (`feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`) and `!` or a `BREAKING CHANGE:` footer for breaking changes. Keep subjects concise, imperative, and lowercase without a trailing period, and include the trailer `Co-authored-by: Gemini <gemini@google.com>` (preceded by a blank line) on AI-assisted commits.
2. **Simplified Git-Flow Workflow** (adapted from [Git-Flow](https://danielkummer.github.io/git-flow-cheatsheet/index.id_ID.html) without a permanent `develop` branch):
    - **Single Main Branch (`main`)**: Keep `main` clean and release-ready; do not create a long-lived `dev` or `develop` branch.
    - **Short-Lived Branches by Purpose** (branched from `main`, lowercase kebab-case):
        - `feature/<name>` — new features, modules, or enhancements (e.g., `feature/core-functions`).
        - `hotfix/<name>` — urgent bug fixes or patches (e.g., `hotfix/auth-crash`); use `fix/<name>` for routine non-urgent fixes.
        - `docs/<name>` / `chore/<name>` — documentation, config, or maintenance updates (e.g., `docs/readme-update`).
        - `release/<version>` _(optional)_ — final preparation/stabilization before tagging a major/minor release (e.g., `release/v1.0.0`).
    - **Finish via Pull Request (Manual Branch Deletion)**: Merge completed branches into `main` via Pull Request (`<branch>` -> `main`), waiting for explicit user confirmation before merging. Do **not** automatically delete merged branches (local or remote); keep them for rollback or debugging and only delete manually when requested.
    - **Release Tagging (SemVer)**: Tag completed milestones or hotfixes on `main` using Semantic Versioning (`vMAJOR.MINOR.PATCH`, e.g., `v1.0.0`, `v1.1.0`, `v1.0.1`) and publish a GitHub Release when requested.
3. **Professional PR Descriptions & Review Comments**:
    - Structure Pull Request descriptions with **Summary / Context**, **Key Changes**, **Verification / Test Plan**, and **Notes / Risks** (when applicable).
    - Write concise, constructive, senior-engineer-level review comments labeled by severity (`[Blocker]`, `[Suggestion]`, `[Nit]`), citing exact files/lines, explaining _why_, and proposing concrete fixes.
4. **Push Only When Requested**: Only run `git push` when the user explicitly asks to push directly. Otherwise, leave changes or commits local so the user can review them first.
