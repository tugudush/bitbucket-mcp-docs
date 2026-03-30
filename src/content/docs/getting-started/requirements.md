---
title: Requirements
description: Prerequisites for running the Bitbucket MCP Server.
sidebar:
  order: 1
---

Before installing the Bitbucket MCP Server, make sure you have the following.

## Node.js 18+

The server uses the native `fetch` API, which requires **Node.js 18 or later**.

```bash
node --version
# Should output v18.x.x or higher
```

## Bitbucket Authentication

The server authenticates using **API token + email**. You will need:

- A Bitbucket (Atlassian) account
- An API token scoped to Bitbucket read operations
- Your Atlassian account email address

### Creating an API Token

1. Go to [https://id.atlassian.com/manage-profile/security/api-tokens](https://id.atlassian.com/manage-profile/security/api-tokens) and click **"Create API token with scopes"**.

   ![API Tokens page showing "Create API token with scopes" button](/screenshots/api-token/step-1-api-tokens-page.png)

2. Enter a name (e.g., `Bitbucket MCP`) and set an expiry date, then click **"Next"**.

   ![Name and expiry step with "Bitbucket MCP" entered as the token name](/screenshots/api-token/step-3-name-filled.png)

3. Select **"Bitbucket"** from the app list and click **"Next"**.

   ![Select app step with Bitbucket selected](/screenshots/api-token/step-4b-bitbucket-selected.png)

4. Click **"Scope actions"** and filter by **"Read"**, then set **Results per page** to **20**. Check all checkboxes and click **"Next"**.

   ![Select scopes step filtered to Read scopes with all 18 checked](/screenshots/api-token/step-5b-read-filter.png)

5. Review the token summary and click **"Create token"**.

   ![Review your API token step showing Bitbucket MCP with all Read scopes](/screenshots/api-token/step-6-review-token.png)

6. **Copy the generated token immediately** — it's shown only once. This is your `BITBUCKET_API_TOKEN`.

   ![Copy API token step showing the generated token](/screenshots/api-token/step-7-copy-token.png)

7. Use your Atlassian account email as `BITBUCKET_EMAIL`.

:::caution
The token is shown only once. Copy it immediately and store it securely.
:::

## Code Search (Highly Recommended)

The `bb_search_code` tool requires code search to be enabled in your Bitbucket account settings.

:::tip[Highly Recommended]
**Enable code search** at [https://bitbucket.org/search](https://bitbucket.org/search) to unlock the full power of the Bitbucket MCP Server. While all other 36 tools work without it, code search is essential for:

- Finding functions, classes, and interfaces across your codebase
- Locating TODO comments and technical debt
- Searching for authentication logic, API calls, and configuration patterns
- Discovering usage of specific libraries or frameworks
  :::

Enable it at [https://bitbucket.org/search](https://bitbucket.org/search).

Without this, all other 36 tools work normally — only `bb_search_code` is affected.
