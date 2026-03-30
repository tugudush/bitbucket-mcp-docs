---
title: API Coverage
description: Full list of Bitbucket Cloud API v2.0 endpoints covered by the Bitbucket MCP Server.
---

The server implements **37 tools** covering all major Bitbucket Cloud API v2.0 endpoints. All operations are **read-only**.

## Endpoint Coverage by Category

### Workspaces API

| Tool                 | Endpoint                      |
| -------------------- | ----------------------------- |
| `bb_list_workspaces` | `GET /workspaces`             |
| `bb_get_workspace`   | `GET /workspaces/{workspace}` |

### Repositories API

| Tool                     | Endpoint                                     |
| ------------------------ | -------------------------------------------- |
| `bb_list_repositories`   | `GET /repositories/{workspace}`              |
| `bb_get_repository`      | `GET /repositories/{workspace}/{repo_slug}`  |
| `bb_search_repositories` | `GET /repositories/{workspace}?q=...` (BBQL) |

### Source API

| Tool                   | Endpoint                                                                |
| ---------------------- | ----------------------------------------------------------------------- |
| `bb_browse_repository` | `GET /repositories/{workspace}/{repo_slug}/src/{commit}/{path}`         |
| `bb_get_file_content`  | `GET /repositories/{workspace}/{repo_slug}/src/{commit}/{path}`         |
| `bb_get_file_history`  | `GET /repositories/{workspace}/{repo_slug}/filehistory/{commit}/{path}` |

### Pull Requests API

| Tool                           | Endpoint                                                                            |
| ------------------------------ | ----------------------------------------------------------------------------------- |
| `bb_get_pull_requests`         | `GET /repositories/{workspace}/{repo_slug}/pullrequests`                            |
| `bb_get_pull_request`          | `GET /repositories/{workspace}/{repo_slug}/pullrequests/{id}`                       |
| `bb_get_pull_request_comments` | `GET /repositories/{workspace}/{repo_slug}/pullrequests/{id}/comments`              |
| `bb_get_pull_request_comment`  | `GET /repositories/{workspace}/{repo_slug}/pullrequests/{id}/comments/{comment_id}` |
| `bb_get_comment_thread`        | `GET /repositories/{workspace}/{repo_slug}/pullrequests/{id}/comments` (paginated)  |
| `bb_get_pull_request_activity` | `GET /repositories/{workspace}/{repo_slug}/pullrequests/{id}/activity`              |
| `bb_get_pull_request_diff`     | `GET /repositories/{workspace}/{repo_slug}/pullrequests/{id}/diff`                  |
| `bb_get_pull_request_diffstat` | `GET /repositories/{workspace}/{repo_slug}/pullrequests/{id}/diffstat`              |
| `bb_get_pr_commits`            | `GET /repositories/{workspace}/{repo_slug}/pullrequests/{id}/commits`               |
| `bb_get_pr_statuses`           | `GET /repositories/{workspace}/{repo_slug}/pullrequests/{id}/statuses`              |

### Branches API

| Tool              | Endpoint                                                         |
| ----------------- | ---------------------------------------------------------------- |
| `bb_get_branches` | `GET /repositories/{workspace}/{repo_slug}/refs/branches`        |
| `bb_get_branch`   | `GET /repositories/{workspace}/{repo_slug}/refs/branches/{name}` |

### Commits API

| Tool                     | Endpoint                                                           |
| ------------------------ | ------------------------------------------------------------------ |
| `bb_get_commits`         | `GET /repositories/{workspace}/{repo_slug}/commits`                |
| `bb_get_commit`          | `GET /repositories/{workspace}/{repo_slug}/commit/{node}`          |
| `bb_get_commit_statuses` | `GET /repositories/{workspace}/{repo_slug}/commit/{node}/statuses` |
| `bb_get_merge_base`      | `GET /repositories/{workspace}/{repo_slug}/mergebase`              |

### Tags API

| Tool          | Endpoint                                                     |
| ------------- | ------------------------------------------------------------ |
| `bb_get_tags` | `GET /repositories/{workspace}/{repo_slug}/refs/tags`        |
| `bb_get_tag`  | `GET /repositories/{workspace}/{repo_slug}/refs/tags/{name}` |

### Diff API

| Tool              | Endpoint                                                    |
| ----------------- | ----------------------------------------------------------- |
| `bb_get_diff`     | `GET /repositories/{workspace}/{repo_slug}/diff/{spec}`     |
| `bb_get_diffstat` | `GET /repositories/{workspace}/{repo_slug}/diffstat/{spec}` |

### Issues API

| Tool            | Endpoint                                                      |
| --------------- | ------------------------------------------------------------- |
| `bb_get_issues` | `GET /repositories/{workspace}/{repo_slug}/issues`            |
| `bb_get_issue`  | `GET /repositories/{workspace}/{repo_slug}/issues/{issue_id}` |

### Search API

| Tool             | Endpoint                             |
| ---------------- | ------------------------------------ |
| `bb_search_code` | `GET /teams/{workspace}/search/code` |

### Users API

| Tool                  | Endpoint                     |
| --------------------- | ---------------------------- |
| `bb_get_user`         | `GET /users/{selected_user}` |
| `bb_get_current_user` | `GET /user`                  |

### Pipelines API

| Tool                       | Endpoint                                                                                    |
| -------------------------- | ------------------------------------------------------------------------------------------- |
| `bb_list_pipelines`        | `GET /repositories/{workspace}/{repo_slug}/pipelines/`                                      |
| `bb_get_pipeline`          | `GET /repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}`                       |
| `bb_get_pipeline_steps`    | `GET /repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/`                |
| `bb_get_pipeline_step_log` | `GET /repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/log` |

## Summary

| Category              | Tools  |
| --------------------- | ------ |
| Repository Management | 8      |
| Pull Requests         | 10     |
| Branches & Commits    | 8      |
| Diff & Comparison     | 2      |
| CI/CD Pipelines       | 4      |
| Issues                | 2      |
| Search & Discovery    | 1      |
| User Information      | 2      |
| **Total**             | **37** |
