---
title: Pull Requests
description: Tools for listing, inspecting, and analyzing pull requests — including comments, threads, diffs, and CI statuses.
sidebar:
  order: 2
---

**10 tools** for working with pull requests, including comments, activity, diffs, commit lists, and CI/CD build statuses.

---

## `bb_get_pull_requests`

List all pull requests for a repository, with optional state filtering.

| Parameter   | Required | Description                                                 |
| ----------- | -------- | ----------------------------------------------------------- |
| `workspace` | ✅       | Workspace slug                                              |
| `repo_slug` | ✅       | Repository slug                                             |
| `state`     | No       | Filter by state: `OPEN`, `MERGED`, `DECLINED`, `SUPERSEDED` |
| `page`      | No       | Page number                                                 |

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

| Parameter         | Required | Description     |
| ----------------- | -------- | --------------- |
| `workspace`       | ✅       | Workspace slug  |
| `repo_slug`       | ✅       | Repository slug |
| `pull_request_id` | ✅       | PR number       |

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

| Parameter         | Required | Description     |
| ----------------- | -------- | --------------- |
| `workspace`       | ✅       | Workspace slug  |
| `repo_slug`       | ✅       | Repository slug |
| `pull_request_id` | ✅       | PR number       |

**Example prompt:**

> "Show the activity timeline for PR #123"

---

## `bb_get_pull_request_diff`

Get the unified diff for a pull request — shows all file changes as a standard patch format.

| Parameter         | Required | Description     |
| ----------------- | -------- | --------------- |
| `workspace`       | ✅       | Workspace slug  |
| `repo_slug`       | ✅       | Repository slug |
| `pull_request_id` | ✅       | PR number       |

**Example prompt:**

> "Show me the diff for PR #123"

---

## `bb_get_pull_request_diffstat`

Get per-file change statistics for a pull request (lines added/removed, files changed).

| Parameter         | Required | Description     |
| ----------------- | -------- | --------------- |
| `workspace`       | ✅       | Workspace slug  |
| `repo_slug`       | ✅       | Repository slug |
| `pull_request_id` | ✅       | PR number       |

**Example prompt:**

> "How many files changed in PR #123?"

---

## `bb_get_pr_commits`

List all commits included in a pull request.

| Parameter         | Required | Description     |
| ----------------- | -------- | --------------- |
| `workspace`       | ✅       | Workspace slug  |
| `repo_slug`       | ✅       | Repository slug |
| `pull_request_id` | ✅       | PR number       |

**Example prompt:**

> "List commits in PR #123"

---

## `bb_get_pr_statuses`

Get CI/CD build statuses for a pull request — shows pass/fail status for each build pipeline attached to the PR.

| Parameter         | Required | Description     |
| ----------------- | -------- | --------------- |
| `workspace`       | ✅       | Workspace slug  |
| `repo_slug`       | ✅       | Repository slug |
| `pull_request_id` | ✅       | PR number       |

**Example prompt:**

> "Get build statuses for PR #123"
