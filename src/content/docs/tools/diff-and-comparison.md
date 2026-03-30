---
title: Diff & Comparison
description: Tools for comparing commits and getting per-file change statistics.
sidebar:
  order: 4
---

**2 tools** for comparing commits using unified diffs and per-file statistics.

---

## `bb_get_diff`

Get a unified diff between two commits or refs — shows all changes as a standard patch format.

| Parameter   | Required | Description                                                           |
| ----------- | -------- | --------------------------------------------------------------------- |
| `workspace` | ✅       | Workspace slug                                                        |
| `repo_slug` | ✅       | Repository slug                                                       |
| `spec`      | ✅       | Diff spec — two commit SHAs joined with `..` (e.g., `abc123..def456`) |

**Example prompt:**

> "Show the diff between commits abc123 and def456"

---

## `bb_get_diffstat`

Get per-file change statistics between two commits — shows lines added/removed and the type of change for each file (added, modified, removed).

| Parameter   | Required | Description                                                           |
| ----------- | -------- | --------------------------------------------------------------------- |
| `workspace` | ✅       | Workspace slug                                                        |
| `repo_slug` | ✅       | Repository slug                                                       |
| `spec`      | ✅       | Diff spec — two commit SHAs joined with `..` (e.g., `abc123..def456`) |

**Example prompt:**

> "How many files changed between abc123 and def456?"

:::tip
For PR-level diffs, use [`bb_get_pull_request_diff`](/tools/pull-requests/#bb_get_pull_request_diff) and [`bb_get_pull_request_diffstat`](/tools/pull-requests/#bb_get_pull_request_diffstat) instead.
:::
