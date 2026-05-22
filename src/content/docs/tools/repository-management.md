---
title: Repository Management
description: Tools for discovering workspaces, listing and browsing repositories, and reading file content.
sidebar:
  order: 1
---

**8 tools** for workspace and repository discovery, directory browsing, and file reading.

---

## `bb_list_workspaces`

Discover all Bitbucket workspaces accessible to the authenticated user.

| Parameter | Required | Description      |
| --------- | -------- | ---------------- |
| `page`    | No       | Page number      |
| `pagelen` | No       | Results per page |

**Example prompt:**

> "List all my accessible workspaces"

---

## `bb_get_workspace`

Get detailed information about a specific workspace.

| Parameter   | Required | Description            |
| ----------- | -------- | ---------------------- |
| `workspace` | ✅       | Workspace slug or UUID |

**Example prompt:**

> "Get details for the myworkspace workspace"

---

## `bb_list_repositories`

List all repositories within a workspace, with pagination support.

| Parameter   | Required | Description              |
| ----------- | -------- | ------------------------ |
| `workspace` | ✅       | Workspace slug           |
| `page`      | No       | Page number (default: 1) |
| `pagelen`   | No       | Results per page         |

**Example prompt:**

> "List repositories in myworkspace"

---

## `bb_get_repository`

Get detailed information about a specific repository.

| Parameter   | Required | Description     |
| ----------- | -------- | --------------- |
| `workspace` | ✅       | Workspace slug  |
| `repo_slug` | ✅       | Repository slug |

**Example prompt:**

> "Get details for myworkspace/myrepo"

---

## `bb_search_repositories`

Search for repositories by name or description within a workspace using server-side BBQL filtering.

| Parameter   | Required | Description                                                              |
| ----------- | -------- | ------------------------------------------------------------------------ |
| `workspace` | ✅       | Workspace slug                                                           |
| `query`     | ✅       | Search query to filter repositories by name or description (uses BBQL)   |
| `page`      | No       | Page number                                                              |
| `pagelen`   | No       | Results per page (defaults to 100 for search)                            |
| `sort`      | No       | Sort field, e.g. `-updated_on` for newest first, `name` for alphabetical |

**Example prompt:**

> "Search for repositories containing 'keycloak' in myworkspace"

---

## `bb_browse_repository`

Explore the directory structure of a repository. Supports branch names with slashes (e.g., `feature/SSP-1024`). Branch names are automatically resolved to commit SHAs for subdirectory browsing.

| Parameter   | Required | Description                                               |
| ----------- | -------- | --------------------------------------------------------- |
| `workspace` | ✅       | Workspace slug                                            |
| `repo_slug` | ✅       | Repository slug                                           |
| `path`      | No       | Directory path to browse (default: repo root)             |
| `ref`       | No       | Branch, tag, or commit hash (defaults to main branch)     |
| `limit`     | No       | Maximum number of items to return (default: 50, max: 100) |

**Example prompt:**

> "Browse the tests directory in feature/deployment-fixes branch"

---

## `bb_get_file_content`

Read the content of a file with pagination support. Reads up to 10,000 lines per request.

| Parameter   | Required | Description                                                   |
| ----------- | -------- | ------------------------------------------------------------- |
| `workspace` | ✅       | Workspace slug                                                |
| `repo_slug` | ✅       | Repository slug                                               |
| `file_path` | ✅       | Path to the file in the repository                            |
| `ref`       | No       | Branch, tag, or commit hash (defaults to main branch)         |
| `start`     | No       | Starting line number for pagination (1-based, default: 1)     |
| `limit`     | No       | Maximum number of lines to return (default: 1000, max: 10000) |

**Example prompts:**

> "Read lines 100–200 of `src/app.py` from myworkspace/myrepo"
>
> "Show me the `package.json` file from the develop branch"

---

## `bb_get_file_history`

Get the commit history for a specific file, showing which commits modified it.

| Parameter   | Required | Description                                       |
| ----------- | -------- | ------------------------------------------------- |
| `workspace` | ✅       | Workspace slug                                    |
| `repo_slug` | ✅       | Repository slug                                   |
| `commit`    | ✅       | Commit hash, branch, or tag to start history from |
| `path`      | ✅       | Path to the file in the repository                |
| `page`      | No       | Page number                                       |
| `pagelen`   | No       | Results per page                                  |

**Example prompt:**

> "Get the commit history for `src/components/Header.tsx`"
