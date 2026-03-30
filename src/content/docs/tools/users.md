---
title: User Information
description: Tools for retrieving Bitbucket user profiles and authenticated user information.
sidebar:
  order: 8
---

**2 tools** for reading Bitbucket user profiles.

---

## `bb_get_user`

Get information about a specific Bitbucket user by username or UUID.

| Parameter       | Required | Description                  |
| --------------- | -------- | ---------------------------- |
| `selected_user` | ✅       | Username or UUID of the user |

**Example prompt:**

> "Get profile for user johndoe"

:::note
Use either the username (e.g., `johndoe`) or the UUID format (e.g., `{abc-123-def}`).
:::

---

## `bb_get_current_user`

Get information about the currently authenticated user — the account associated with the configured `BITBUCKET_API_TOKEN` and `BITBUCKET_EMAIL`.

**Parameters:** None required.

**Example prompt:**

> "Who am I logged in as?"
