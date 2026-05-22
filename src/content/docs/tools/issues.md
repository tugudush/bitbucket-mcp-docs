---
title: Issues
description: Tools for listing and inspecting Bitbucket repository issues.
sidebar:
  order: 6
---

**2 tools** for reading Bitbucket repository issues.

:::note
Bitbucket Issues must be enabled on the repository for these tools to return results. Issues are disabled by default on many repositories.
:::

---

## `bb_get_issues`

List all issues for a repository, with optional filtering by state or kind.

| Parameter   | Required | Description                                                                                        |
| ----------- | -------- | -------------------------------------------------------------------------------------------------- |
| `workspace` | ✅       | Workspace slug                                                                                     |
| `repo_slug` | ✅       | Repository slug                                                                                    |
| `state`     | No       | Filter by state: `new`, `open`, `resolved`, `on hold`, `invalid`, `duplicate`, `wontfix`, `closed` |
| `kind`      | No       | Filter by kind: `bug`, `enhancement`, `proposal`, `task`                                           |
| `page`      | No       | Page number                                                                                        |
| `pagelen`   | No       | Results per page                                                                                   |

**Example prompt:**

> "List open issues in myworkspace/myrepo"

---

## `bb_get_issue`

Get detailed information about a specific issue, including description, status, assignee, and comments.

| Parameter   | Required | Description     |
| ----------- | -------- | --------------- |
| `workspace` | ✅       | Workspace slug  |
| `repo_slug` | ✅       | Repository slug |
| `issue_id`  | ✅       | Issue number    |

**Example prompt:**

> "Get details for issue #42 in myworkspace/myrepo"
