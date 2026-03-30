---
title: CI/CD Pipelines
description: Tools for inspecting pipeline runs, steps, and build logs.
sidebar:
  order: 5
---

**4 tools** for inspecting Bitbucket Pipelines — all read-only.

---

## `bb_list_pipelines`

List pipeline runs for a repository, with the most recent runs first.

| Parameter   | Required | Description     |
| ----------- | -------- | --------------- |
| `workspace` | ✅       | Workspace slug  |
| `repo_slug` | ✅       | Repository slug |
| `page`      | No       | Page number     |

**Example prompt:**

> "List recent pipeline runs for myworkspace/myrepo"

---

## `bb_get_pipeline`

Get detailed information about a specific pipeline run, including its status, duration, and trigger.

| Parameter       | Required | Description     |
| --------------- | -------- | --------------- |
| `workspace`     | ✅       | Workspace slug  |
| `repo_slug`     | ✅       | Repository slug |
| `pipeline_uuid` | ✅       | Pipeline UUID   |

**Example prompt:**

> "Get details for pipeline {abc-123-def}"

---

## `bb_get_pipeline_steps`

List all steps (stages) within a pipeline run — shows each step's name, status, and duration.

| Parameter       | Required | Description     |
| --------------- | -------- | --------------- |
| `workspace`     | ✅       | Workspace slug  |
| `repo_slug`     | ✅       | Repository slug |
| `pipeline_uuid` | ✅       | Pipeline UUID   |

**Example prompt:**

> "Show the steps for pipeline {abc-123-def}"

---

## `bb_get_pipeline_step_log`

Retrieve the build log output for a specific pipeline step. Useful for diagnosing failed builds.

| Parameter       | Required | Description     |
| --------------- | -------- | --------------- |
| `workspace`     | ✅       | Workspace slug  |
| `repo_slug`     | ✅       | Repository slug |
| `pipeline_uuid` | ✅       | Pipeline UUID   |
| `step_uuid`     | ✅       | Step UUID       |

**Example prompt:**

> "Show the build log for the failing step in pipeline {abc-123-def}"
