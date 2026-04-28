# Bitbucket MCP Docs — Agent Instructions

Documentation site for [bitbucket-mcp](https://github.com/tugudush/bitbucket-mcp), built with **Astro + Starlight**. All content lives in `src/content/docs/` as `.md` or `.mdx` files.

## Build & Dev Commands

| Command            | Purpose                                  |
| :----------------- | :--------------------------------------- |
| `npm run dev`      | Start dev server at `localhost:4321`     |
| `npm run build`    | Build production site to `./dist/`       |
| `npm run lint`     | Run ESLint                               |
| `npm run lint:fix` | Auto-fix ESLint issues                   |
| `npm run format`   | Format all files with Prettier           |
| `npm run lf`       | Lint + format in one step                |
| `npm run lfb`      | Lint + format + build (pre-commit check) |

Run `npm run lfb` before committing to catch lint, format, and build errors together.

## Content Structure

All docs are under `src/content/docs/` and map to URL routes by filename:

| Folder             | Content                                                       |
| :----------------- | :------------------------------------------------------------ |
| `getting-started/` | Requirements, installation, configuration                     |
| `tools/`           | One file per tool category (8 categories, 38 tools total)     |
| `guides/`          | Output formats, JMESPath filtering, usage examples, debugging |
| `reference/`       | API coverage, roadmap, security                               |
| `development/`     | Architecture, building/testing, contributing                  |

- `.md` for standard content; `.mdx` for pages that use Starlight components (`Card`, `CardGrid`, `Tabs`, `Steps`, etc.)
- The homepage (`index.mdx`) uses `template: splash` frontmatter

## Frontmatter Conventions

Every doc page requires at minimum:

```yaml
---
title: Page Title
description: One-sentence description used in meta tags and search.
---
```

Tool reference pages also include `sidebar: { order: N }` to control ordering within their section.

## Sidebar Navigation

The sidebar is defined statically in [`astro.config.mjs`](astro.config.mjs). When adding a new page, register it there under the correct `items` array with a `label` and `slug`.

## Content Conventions

- **Tool reference pages** (`tools/*.md`): Document each tool with a `##` heading matching the tool name (e.g., `## \`bb_get_pull_requests\``), a parameter table, and an **Example prompt** block.
- **Parameter tables**: Use `✅` for required parameters, `No` for optional.
- Horizontal rules (`---`) between tool sections for visual separation.

## Relevant Docs

- [Architecture](src/content/docs/development/architecture.md) — handler registry pattern of the MCP server itself
- [Contributing](src/content/docs/development/contributing.md) — workflow and code guidelines for the MCP server
- [Starlight docs](https://starlight.astro.build/) — framework reference
