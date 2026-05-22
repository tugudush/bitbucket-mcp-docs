---
title: Branches & Commits
description: Tools for listing branches, exploring commit history, working with tags, and comparing branches.
sidebar:
  order: 3
---

**8 tools** for branches, commit history, tags, and branch comparison.

---

## `bb_get_branches`

List all branches in a repository.

| Parameter   | Required | Description      |
| ----------- | -------- | ---------------- |
| `workspace` | ✅       | Workspace slug   |
| `repo_slug` | ✅       | Repository slug  |
| `page`      | No       | Page number      |
| `pagelen`   | No       | Results per page |

**Example prompt:**

> "List all branches in myworkspace/myrepo"

---

## `bb_get_branch`

Get detailed information about a specific branch, including its latest commit.

| Parameter   | Required | Description     |
| ----------- | -------- | --------------- |
| `workspace` | ✅       | Workspace slug  |
| `repo_slug` | ✅       | Repository slug |
| `name`      | ✅       | Branch name     |

**Example prompt:**

> "Get details for the develop branch"

---

## `bb_get_commits`

List the commit history for a repository or a specific branch.

| Parameter   | Required | Description                           |
| ----------- | -------- | ------------------------------------- |
| `workspace` | ✅       | Workspace slug                        |
| `repo_slug` | ✅       | Repository slug                       |
| `branch`    | No       | Branch name (defaults to main branch) |
| `page`      | No       | Page number                           |
| `pagelen`   | No       | Results per page                      |

**Example prompt:**

> "Show recent commits on the main branch of myworkspace/myrepo"

---

## `bb_get_commit`

Get detailed information about a specific commit by its SHA.

| Parameter   | Required | Description                      |
| ----------- | -------- | -------------------------------- |
| `workspace` | ✅       | Workspace slug                   |
| `repo_slug` | ✅       | Repository slug                  |
| `commit`    | ✅       | Commit hash, branch name, or tag |

**Example prompt:**

> "Get commit details for abc123de"

---

## `bb_get_commit_statuses`

Get CI/CD build statuses for a specific commit.

| Parameter   | Required | Description      |
| ----------- | -------- | ---------------- |
| `workspace` | ✅       | Workspace slug   |
| `repo_slug` | ✅       | Repository slug  |
| `commit`    | ✅       | Commit SHA       |
| `page`      | No       | Page number      |
| `pagelen`   | No       | Results per page |

**Example prompt:**

> "What are the build statuses for commit abc123de?"

---

## `bb_get_merge_base`

Find the common ancestor (merge base) between two branches or commits. Useful for understanding divergence points.

| Parameter   | Required | Description                                                                |
| ----------- | -------- | -------------------------------------------------------------------------- |
| `workspace` | ✅       | Workspace slug                                                             |
| `repo_slug` | ✅       | Repository slug                                                            |
| `revspec`   | ✅       | Two commit hashes or branch names separated by `..` (e.g. `main..feature`) |

**Example prompt:**

> "Find the merge base between develop and main"

---

## `bb_get_tags`

List all tags in a repository.

| Parameter   | Required | Description      |
| ----------- | -------- | ---------------- |
| `workspace` | ✅       | Workspace slug   |
| `repo_slug` | ✅       | Repository slug  |
| `page`      | No       | Page number      |
| `pagelen`   | No       | Results per page |

**Example prompt:**

> "List all tags in myworkspace/myrepo"

---

## `bb_get_tag`

Get detailed information about a specific tag.

| Parameter   | Required | Description     |
| ----------- | -------- | --------------- |
| `workspace` | ✅       | Workspace slug  |
| `repo_slug` | ✅       | Repository slug |
| `name`      | ✅       | Tag name        |

**Example prompt:**

> "Get details for tag v1.0.0"
