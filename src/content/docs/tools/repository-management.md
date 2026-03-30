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

**Parameters:** None required.

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

| Parameter   | Required | Description    |
| ----------- | -------- | -------------- |
| `workspace` | ✅       | Workspace slug |
| `query`     | ✅       | Search term    |

**Example prompt:**

> "Search for repositories containing 'keycloak' in myworkspace"

---

## `bb_browse_repository`

Explore the directory structure of a repository. Supports branch names with slashes (e.g., `feature/SSP-1024`). Branch names are automatically resolved to commit SHAs for subdirectory browsing.

| Parameter   | Required | Description                              |
| ----------- | -------- | ---------------------------------------- |
| `workspace` | ✅       | Workspace slug                           |
| `repo_slug` | ✅       | Repository slug                          |
| `path`      | No       | Directory path to browse (default: root) |
| `branch`    | No       | Branch name or commit SHA                |

**Example prompt:**

> "Browse the tests directory in feature/deployment-fixes branch"

---

## `bb_get_file_content`

Read the content of a file with pagination support. Reads up to 10,000 lines per request.

| Parameter    | Required | Description                     |
| ------------ | -------- | ------------------------------- |
| `workspace`  | ✅       | Workspace slug                  |
| `repo_slug`  | ✅       | Repository slug                 |
| `path`       | ✅       | File path within the repository |
| `branch`     | No       | Branch name or commit SHA       |
| `start_line` | No       | First line to read (1-based)    |
| `end_line`   | No       | Last line to read               |

**Example prompts:**

> "Read lines 100–200 of `src/app.py` from myworkspace/myrepo"
>
> "Show me the `package.json` file from the develop branch"

---

## `bb_get_file_history`

Get the commit history for a specific file, showing which commits modified it.

| Parameter   | Required | Description     |
| ----------- | -------- | --------------- |
| `workspace` | ✅       | Workspace slug  |
| `repo_slug` | ✅       | Repository slug |
| `path`      | ✅       | File path       |
| `branch`    | No       | Branch name     |

**Example prompt:**

> "Get the commit history for `src/components/Header.tsx`"
