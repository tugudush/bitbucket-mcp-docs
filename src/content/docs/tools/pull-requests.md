---
title: Pull Requests
description: Tools for listing, inspecting, and analyzing pull requests — including comments, threads, diffs, and CI statuses.
sidebar:
  order: 2
---

**11 tools** for working with pull requests, including comments, activity, diffs, commit lists, CI/CD build statuses, and a curated context bundle.

---

## `bb_get_pull_requests`

List all pull requests for a repository, with optional state filtering.

| Parameter   | Required | Description                                                 |
| ----------- | -------- | ----------------------------------------------------------- |
| `workspace` | ✅       | Workspace slug                                              |
| `repo_slug` | ✅       | Repository slug                                             |
| `state`     | No       | Filter by state: `OPEN`, `MERGED`, `DECLINED`, `SUPERSEDED` |
| `page`      | No       | Page number                                                 |
| `pagelen`   | No       | Results per page                                            |

**Example prompt:**

> "Show open pull requests for myworkspace/myrepo"

---

## `bb_get_pull_request`

Get detailed information about a single pull request.

| Parameter         | Required | Description     |
| ----------------- | -------- | --------------- |
| `workspace`       | ✅       | Workspace slug  |
| `repo_slug`       | ✅       | Repository slug |
| `pull_request_id` | ✅       | PR number       |

**Example prompt:**

> "Get details for PR #123 in myworkspace/myrepo"

---

## `bb_get_pull_request_comments`

List all comments on a pull request, including inline code comments and general comments.

| Parameter         | Required | Description      |
| ----------------- | -------- | ---------------- |
| `workspace`       | ✅       | Workspace slug   |
| `repo_slug`       | ✅       | Repository slug  |
| `pull_request_id` | ✅       | PR number        |
| `page`            | No       | Page number      |
| `pagelen`         | No       | Results per page |

**Example prompt:**

> "List all comments on PR #123"

---

## `bb_get_pull_request_comment`

Get a single comment by its ID.

| Parameter         | Required | Description     |
| ----------------- | -------- | --------------- |
| `workspace`       | ✅       | Workspace slug  |
| `repo_slug`       | ✅       | Repository slug |
| `pull_request_id` | ✅       | PR number       |
| `comment_id`      | ✅       | Comment ID      |

**Example prompt:**

> "Get comment #12345678 from PR #123 in myworkspace/myrepo"

---

## `bb_get_comment_thread`

Get a full comment thread with all nested replies. Automatically fetches all pages for large PRs via `fetchAllPages()`.

| Parameter         | Required | Description     |
| ----------------- | -------- | --------------- |
| `workspace`       | ✅       | Workspace slug  |
| `repo_slug`       | ✅       | Repository slug |
| `pull_request_id` | ✅       | PR number       |
| `comment_id`      | ✅       | Root comment ID |

**Example prompt:**

> "Get the comment thread for comment #12345678 on PR #123"

---

## `bb_get_pull_request_activity`

Track the activity timeline of a pull request: reviews, approvals, comments, and state changes.

| Parameter         | Required | Description      |
| ----------------- | -------- | ---------------- |
| `workspace`       | ✅       | Workspace slug   |
| `repo_slug`       | ✅       | Repository slug  |
| `pull_request_id` | ✅       | PR number        |
| `page`            | No       | Page number      |
| `pagelen`         | No       | Results per page |

**Example prompt:**

> "Show the activity timeline for PR #123"

---

## `bb_get_pull_request_diff`

Get the unified diff for a pull request — shows all file changes as a standard patch format.

| Parameter         | Required | Description                            |
| ----------------- | -------- | -------------------------------------- |
| `workspace`       | ✅       | Workspace slug                         |
| `repo_slug`       | ✅       | Repository slug                        |
| `pull_request_id` | ✅       | PR number                              |
| `context`         | No       | Number of context lines around changes |
| `path`            | No       | Filter diff to a single file path      |

**Example prompt:**

> "Show me the diff for PR #123"

---

## `bb_get_pull_request_diffstat`

Get per-file change statistics for a pull request (lines added/removed, files changed).

| Parameter         | Required | Description                           |
| ----------------- | -------- | ------------------------------------- |
| `workspace`       | ✅       | Workspace slug                        |
| `repo_slug`       | ✅       | Repository slug                       |
| `pull_request_id` | ✅       | PR number                             |
| `path`            | No       | Filter diffstat to a single file path |

**Example prompt:**

> "How many files changed in PR #123?"

---

## `bb_get_pr_commits`

List all commits included in a pull request.

| Parameter         | Required | Description      |
| ----------------- | -------- | ---------------- |
| `workspace`       | ✅       | Workspace slug   |
| `repo_slug`       | ✅       | Repository slug  |
| `pull_request_id` | ✅       | PR number        |
| `page`            | No       | Page number      |
| `pagelen`         | No       | Results per page |

**Example prompt:**

> "List commits in PR #123"

---

## `bb_get_pr_statuses`

Get CI/CD build statuses for a pull request — shows pass/fail status for each build pipeline attached to the PR.

| Parameter         | Required | Description      |
| ----------------- | -------- | ---------------- |
| `workspace`       | ✅       | Workspace slug   |
| `repo_slug`       | ✅       | Repository slug  |
| `pull_request_id` | ✅       | PR number        |
| `page`            | No       | Page number      |
| `pagelen`         | No       | Results per page |

**Example prompt:**

> "Get build statuses for PR #123"

---

## `bb_get_context`

Get a curated bundle of PR context in a single call: PR metadata, diffstat summary, build/review status, and comment previews. Fetches all data in parallel. Accepts three input modes — direct params, a Bitbucket PR URL, or a branch name.

| Parameter         | Required | Description                                                                                                                                  |
| ----------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `workspace`       | No\*     | Workspace slug (\*required if `url` is not provided)                                                                                         |
| `repo_slug`       | No\*     | Repository slug (\*required if `url` is not provided)                                                                                        |
| `pull_request_id` | No       | PR number. If omitted, `branch` must be provided.                                                                                            |
| `branch`          | No       | Branch name to look up the open PR for. Ignored if `pull_request_id` is provided.                                                            |
| `url`             | No       | Bitbucket PR URL (e.g. `https://bitbucket.org/workspace/repo/pull-requests/42`). Extracts `workspace`, `repo_slug`, and PR ID automatically. |
| `detail_level`    | No       | `summary` (default) or `full`. Full adds PR description, per-file diffstat, and last 20 comments.                                            |

**Input modes:**

- **Mode 1 — Direct:** `workspace` + `repo_slug` + `pull_request_id`
- **Mode 2 — URL:** `url` (workspace, repo, and PR ID extracted automatically)
- **Mode 3 — Branch:** `workspace` + `repo_slug` + `branch` (finds the open PR for that branch)

**Example prompts:**

> "Get full context for PR #123 in myworkspace/myrepo"
>
> "Summarize this PR: https://bitbucket.org/myworkspace/myrepo/pull-requests/123"
>
> "What's the status of the feature/auth branch PR in myworkspace/myrepo?"
