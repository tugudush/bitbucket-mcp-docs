---
title: User Information
description: Tools for retrieving Bitbucket user profiles and authenticated user information.
sidebar:
  order: 8
---

**2 tools** for reading Bitbucket user profiles.

---

## `bb_get_user`

Get information about a Bitbucket user by username or UUID. If `selected_user` is omitted, returns information about the authenticated user.

| Parameter       | Required | Description                                                     |
| --------------- | -------- | --------------------------------------------------------------- |
| `selected_user` | No       | Username or UUID of the user to look up (omit for current user) |

**Example prompt:**

> "Get profile for user johndoe"

:::note
Use either the username (e.g., `johndoe`) or the UUID format (e.g., `{abc-123-def}`). If omitted, this tool behaves like `bb_get_current_user`.
:::

---

## `bb_get_current_user`

Get information about the currently authenticated user — the account associated with the configured `BITBUCKET_API_TOKEN` and `BITBUCKET_EMAIL`.

**Parameters:** None required.

**Example prompt:**

> "Who am I logged in as?"
