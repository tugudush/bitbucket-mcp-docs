---
title: Security & Limitations
description: Security guarantees and known limitations of the Bitbucket MCP Server.
---

## Security Guarantees

|     | Feature                       | Details                                                                                                               |
| --- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| ✅  | **Read-only by design**       | No write, delete, or modify operations exist at any layer of the codebase                                             |
| ✅  | **Runtime protection**        | `makeRequest()` in `src/api.ts` actively blocks any non-GET HTTP request — not just absent from the API               |
| ✅  | **Safe for production**       | No destructive actions are supported, making the server safe to connect to production Bitbucket workspaces            |
| ✅  | **Authenticated access**      | All requests require a valid API token — no anonymous access to private repositories                                  |
| ✅  | **Type-safe inputs**          | All tool parameters are validated with Zod schemas before reaching handler code                                       |
| ✅  | **Branch name support**       | Branch names with special characters (e.g., `feature/SSP-1024`) are correctly handled                                 |
| ✅  | **Dynamic commit resolution** | Branch names are automatically resolved to commit SHAs for subdirectory browsing — prevents path traversal edge cases |
| ✅  | **Context-aware errors**      | Error messages include actionable suggestions (e.g., enabling code search when `bb_search_code` fails)                |

## Known Limitations

|     | Limitation                         | Details                                                                                                                                            |
| --- | ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| ⚠️  | **Rate limiting**                  | Subject to Bitbucket Cloud API rate limits. The server does not implement custom throttling or request queuing.                                    |
| ⚠️  | **Code search requirement**        | `bb_search_code` requires code search to be manually enabled in Bitbucket account settings at [bitbucket.org/search](https://bitbucket.org/search) |
| ⚠️  | **File size limits**               | Large files are handled with pagination — up to 10,000 lines per request via `bb_get_file_content`                                                 |
| ⚠️  | **Bitbucket Cloud only**           | The server targets Bitbucket Cloud (bitbucket.org) API v2.0. Bitbucket Server (on-premises) is not supported.                                      |
| ⚠️  | **6 tools not integration-tested** | 31 of 37 tools are verified against real API endpoints. The remaining 6 use the same patterns but rely on unit test coverage.                      |

## Credential Security

- Store `BITBUCKET_API_TOKEN` and `BITBUCKET_EMAIL` only in your MCP client config file — never hard-code them in source files
- Add `.vscode/mcp.json` and `.cursor/mcp.json` to `.gitignore` if they contain real credentials
- Use API tokens with minimal required scope (Read only, Bitbucket app only)
- Set token expiry dates when creating API tokens in the Atlassian portal
- Rotate API tokens regularly

## Reporting Security Issues

Report security vulnerabilities via [GitHub Issues](https://github.com/tugudush/bitbucket-mcp/issues) or directly to the maintainer.
