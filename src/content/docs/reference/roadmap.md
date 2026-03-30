---
title: Roadmap
description: Completed milestones and planned future enhancements for the Bitbucket MCP Server.
---

## Completed

All major milestones for v3.x are complete:

|     | Item                                                                                                      |
| --- | --------------------------------------------------------------------------------------------------------- |
| ✅  | **37 comprehensive tools** — full coverage of major Bitbucket Cloud API v2.0 endpoints                    |
| ✅  | **Comment threads with nested replies** — `bb_get_comment_thread` with `fetchAllPages()` pagination       |
| ✅  | **Comprehensive test suite** — 168 unit tests, 92.2% statement coverage, 31/37 integration tests verified |
| ✅  | **Modular handler architecture** — handler registry pattern across 8 domain modules                       |
| ✅  | **TOON output format** — compact tabular format, 30–60% token savings for LLM consumption                 |
| ✅  | **JSON output format** — pretty-printed structured data for programmatic use                              |
| ✅  | **JMESPath filtering** — data transformation on all 37 tools via the `filter` parameter                   |
| ✅  | **Server-side BBQL filtering** — repository search no longer limited to a single page                     |
| ✅  | **Jest coverage tooling** — `jest --coverage` fully operational                                           |
| ✅  | **Correct `bb_get_user` endpoint** — uses `GET /users/{selected_user}`                                    |

## Recent Updates (v3.6.x — February 2026)

- TOON output format added
- JSON output format added
- JMESPath filtering (`filter` parameter) added to all 37 tools
- Comprehensive unit tests for all 8 handler modules (168 tests, 12 suites)
- Jest coverage tooling fixed
- Repository search upgraded to server-side BBQL filtering
- Comment thread pagination via `fetchAllPages()`
- Fixed `bb_get_user` endpoint
- Removed `bb_list_user_pull_requests` (non-existent Bitbucket API v2.0 endpoint)

## Planned Enhancements

These are planned future additions — all read-only:

- **Repository statistics and analytics** — insights into repository activity, contributor stats
- **Enhanced search capabilities** — more filter options for code search
- **Webhook information retrieval** — list and inspect repository webhooks (read-only)
- **Extended pipeline details and logs** — richer pipeline step metadata
- **Repository comparison and analytics tools** — compare branches, track divergence metrics
- **Advanced code search with AI-powered insights** — semantic code search enhancements

## Version History

See the full [CHANGELOG](https://github.com/tugudush/bitbucket-mcp/blob/main/CHANGELOG.md) on GitHub for a complete release history.
