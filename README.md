# Bitbucket MCP Documentation Site

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

This is the dedicated documentation site for [bitbucket-mcp](https://github.com/tugudush/bitbucket-mcp) — a Model Context Protocol (MCP) server that provides AI assistants with structured access to Bitbucket repositories, pull requests, pipelines, and more.

The docs cover installation, configuration, tool references, usage guides, and development resources for the `bitbucket-mcp` project.

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🔗 Links

- [bitbucket-mcp on GitHub](https://github.com/tugudush/bitbucket-mcp) — the main project repository
- [Starlight docs](https://starlight.astro.build/) — the documentation framework powering this site
