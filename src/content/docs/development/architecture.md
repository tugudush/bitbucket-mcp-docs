---
title: Architecture
description: Overview of the Bitbucket MCP Server's modular handler registry architecture.
---

The Bitbucket MCP Server is built with a modular, handler registry pattern that keeps domain logic organized and testable.

## Source Directory Layout

```
src/
├── handlers/           # Domain-specific tool handlers
│   ├── repository.ts   # Workspace and repository tools
│   ├── pullrequest.ts  # Pull request tools
│   ├── commit.ts       # Branch, commit, and tag tools
│   ├── diff.ts         # Diff and comparison tools
│   ├── workspace.ts    # Workspace management tools
│   ├── search.ts       # Code search tools
│   ├── issue.ts        # Issue tools
│   └── pipeline.ts     # CI/CD pipeline tools
├── tools.ts            # Tool definitions and handler routing
├── schemas.ts          # Zod validation schemas with API constants
├── types.ts            # TypeScript interfaces for Bitbucket API responses
├── api.ts              # HTTP request handling with retry logic
├── config.ts           # Configuration management (env vars)
├── errors.ts           # Custom error classes
└── version.ts          # Package version
```

## Key Modules

### `src/handlers/`

Each handler module contains the implementation for one category of tools. All handlers follow the same pattern — they receive typed parameters, call `makeRequest<T>()`, and return a formatted response string.

Adding a new tool means:

1. Adding the handler function in the relevant `src/handlers/*.ts` file
2. Registering the tool definition in `src/tools.ts`
3. Adding the Zod schema in `src/schemas.ts`
4. Adding the TypeScript interface in `src/types.ts`

### `src/tools.ts`

Central registry that maps tool names to their handler functions. Acts as the router between the MCP protocol layer and the handler modules.

### `src/schemas.ts`

[Zod](https://zod.dev/) schemas that validate all incoming tool parameters. Also houses Bitbucket API constants (endpoint paths, field names). All tool inputs are validated before reaching any handler.

### `src/types.ts`

TypeScript interfaces that model Bitbucket Cloud API v2.0 response shapes. Keeps handler code type-safe and prevents runtime shape mismatches.

### `src/api.ts`

The core HTTP client. Key behaviors:

- All requests use `makeRequest<T>()` which enforces **GET-only** at runtime — any non-GET request throws an error
- Includes retry logic for transient failures
- Handles Bitbucket pagination via `fetchAllPages()` for endpoints that return paginated results

### `src/config.ts`

Reads and validates environment variables at startup:

- `BITBUCKET_API_TOKEN`
- `BITBUCKET_EMAIL`
- `BITBUCKET_DEFAULT_FORMAT`
- `BITBUCKET_DEBUG`

### `src/errors.ts`

Custom error classes that produce context-aware error messages with actionable suggestions — e.g., prompting the user to enable code search when `bb_search_code` fails.

## Design Principles

- **Read-only by design** — no write operations exist at any layer
- **Type-safe throughout** — Zod validation at input; TypeScript interfaces on API responses
- **Fail loudly with context** — errors include both what went wrong and what to do next
- **Modular and testable** — each handler is independently testable via mocked `makeRequest` calls

See [`.github/copilot-instructions.md`](https://github.com/tugudush/bitbucket-mcp/blob/main/.github/copilot-instructions.md) in the source repo for detailed development guidelines.
