---
title: Building & Testing
description: Commands for building, testing, and linting the Bitbucket MCP Server source code.
---

## Build Commands

| Command               | Description                                               |
| --------------------- | --------------------------------------------------------- |
| `npm run build`       | Compile TypeScript to `build/`                            |
| `npm run watch`       | Development mode — auto-rebuild on file changes           |
| `npm run ltf`         | Lint → Typecheck → Format (recommended before committing) |
| `npm run ltfb`        | Lint → Typecheck → Format → Build (full pipeline)         |
| `node build/index.js` | Test that the server starts correctly                     |

Run `npm run ltfb` before any commit to ensure linting, type checking, formatting, and the build all pass.

## Unit Tests

Run the full test suite:

```bash
npm test
```

Run with coverage report:

```bash
jest --coverage
```

### Test Coverage

| Metric                 | Value                                                                             |
| ---------------------- | --------------------------------------------------------------------------------- |
| Unit tests             | 168 tests across 12 suites                                                        |
| Statement coverage     | 92.2%                                                                             |
| Handler modules tested | All 8 (repository, pullrequest, commit, diff, issue, pipeline, search, workspace) |
| Core modules tested    | `api`, `config`, `errors`                                                         |

### What's Tested

- All 8 handler modules with mocked `makeRequest` / `makeTextRequest` calls
- Output format conversion: `text`, `json`, `toon`
- JMESPath filtering with edge cases
- Error handling and custom error messages
- Configuration management

Unit tests live in `src/__tests__/handlers/` — follow existing patterns when adding new tests.

## Integration Tests

The server includes integration tests that verify tools against the real Bitbucket API.

| Metric         | Value                                                              |
| -------------- | ------------------------------------------------------------------ |
| Tools verified | 31 of 37 (100% success rate on testable tools)                     |
| Approach       | Discovery-based — extracts real IDs from API responses dynamically |

To run integration tests, the server must be able to authenticate against Bitbucket. Credentials are loaded from `.vscode/mcp.json`.

## Writing New Tests

1. Follow handler test patterns in `src/__tests__/handlers/`
2. Mock API calls using `jest.mock` for unit tests
3. For integration tests, load credentials from `.vscode/mcp.json`
4. Validate both successful responses and error conditions

## VS Code Integration

For development within VS Code:

- Install the **GitHub Copilot** extension
- Use the provided `.vscode/` configuration in the repo
- Open Copilot Chat with `Ctrl+Alt+I`
- Test with: `using bitbucket, list repositories in myworkspace`
