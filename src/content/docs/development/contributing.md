---
title: Contributing
description: Guidelines for contributing to the Bitbucket MCP Server project.
---

Contributions are welcome! Follow these guidelines to ensure your changes fit the project structure and design principles.

## Before You Start

- Read the [Architecture guide](/development/architecture/) to understand the handler registry pattern
- Review [Building & Testing](/development/building-and-testing/) to know the build and test commands
- Check [open issues](https://github.com/tugudush/bitbucket-mcp/issues) to avoid duplicate work

## Contribution Workflow

1. **Fork** the repository on GitHub
2. **Create a feature branch** from `main` or `develop`
3. **Implement your changes** (see guidelines below)
4. **Run the full pipeline** before committing:
   ```bash
   npm run ltfb
   ```
5. **Add tests** if you're adding or modifying a tool
6. **Submit a pull request** with a clear description of the change

## Code Guidelines

### Maintain Read-Only Design

This is a fundamental constraint — no write, delete, or modify operations should ever be added. The `makeRequest()` function in `src/api.ts` blocks non-GET requests at runtime. Any new tool must be read-only.

### Follow the Handler Registry Pattern

New tools follow this checklist:

- [ ] Add the handler function in the appropriate `src/handlers/*.ts` file
- [ ] Register the tool definition in `src/tools.ts`
- [ ] Add a Zod input schema in `src/schemas.ts`
- [ ] Add the TypeScript response interface in `src/types.ts`
- [ ] Use `makeRequest<T>()` with the correct generic type
- [ ] Format the response as human-readable text using the existing helper patterns

### TypeScript and Zod

- All tool parameters must have Zod schemas — no unvalidated inputs
- All API response shapes must have TypeScript interfaces in `src/types.ts`
- Avoid using `any` — use the typed `makeRequest<T>()` call

### Response Formatting

- Default response format is readable text (the `text` output format)
- Responses are also available as `json` and `toon` — the output format pipeline handles this automatically once you return a properly structured response from your handler

### Running Tests

Add unit tests for every new handler function:

```bash
npm test
```

Test patterns are in `src/__tests__/handlers/` — mock `makeRequest` and assert on formatted output.

## Getting Help

- [GitHub Issues](https://github.com/tugudush/bitbucket-mcp/issues) — bug reports and feature requests
- [`.github/copilot-instructions.md`](https://github.com/tugudush/bitbucket-mcp/blob/main/.github/copilot-instructions.md) — detailed development guidelines in the repo
