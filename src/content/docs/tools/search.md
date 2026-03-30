---
title: Search & Discovery
description: Advanced code search tool with language filtering and match highlighting.
sidebar:
  order: 7
---

**1 tool** for advanced code search across a Bitbucket workspace or repository.

:::caution[Prerequisite]
Code search must be enabled in your Bitbucket account settings before this tool will work. Enable it at [https://bitbucket.org/search](https://bitbucket.org/search). All other 36 tools work without this setting.
:::

---

## `bb_search_code`

Search for code across a workspace or repository using Bitbucket's code search API. Supports language filtering and returns results with match highlighting.

| Parameter   | Required | Description                                                           |
| ----------- | -------- | --------------------------------------------------------------------- |
| `workspace` | ✅       | Workspace slug                                                        |
| `query`     | ✅       | Search query string                                                   |
| `repo_slug` | No       | Limit search to a specific repository                                 |
| `language`  | No       | Filter results by programming language (e.g., `python`, `typescript`) |
| `page`      | No       | Page number                                                           |

**Example prompts:**

> "Search for 'authentication' code in myworkspace/myrepo"
>
> "Find all functions containing 'validate' in myworkspace/myrepo"
>
> "Search for TypeScript interfaces in myworkspace/myrepo"
>
> "Look for 'TODO' comments in myworkspace/myrepo"

**Language filter examples:**

| Language   | Value        |
| ---------- | ------------ |
| TypeScript | `typescript` |
| Python     | `python`     |
| Java       | `java`       |
| JavaScript | `javascript` |
| Go         | `go`         |
