---
title: Debugging
description: How to enable debug logging to diagnose connection and API issues with the Bitbucket MCP Server.
---

The Bitbucket MCP Server supports verbose debug logging to help diagnose startup, authentication, and API request issues.

## Enabling Debug Logging

Set the `BITBUCKET_DEBUG` environment variable to `true` when starting the server:

```bash
BITBUCKET_DEBUG=true node build/index.js
```

Or add it to your MCP client config:

```json
{
  "servers": {
    "bitbucket-mcp": {
      "type": "stdio",
      "command": "bitbucket-mcp",
      "env": {
        "BITBUCKET_API_TOKEN": "your-token",
        "BITBUCKET_EMAIL": "your@email.com",
        "BITBUCKET_DEBUG": "true"
      }
    }
  }
}
```

## What Debug Output Includes

Debug output is printed to **stderr** and includes:

- **Configuration details at startup** — which env vars are set, their values (tokens are masked)
- **Authentication method used** — confirms token + email combination is recognized
- **API request details** — full URL, headers, and request parameters for each outgoing call
- **API response details** — status code, response shape, and error messages from Bitbucket

## Common Issues

### "Unauthorized" or 401 errors

- Verify `BITBUCKET_API_TOKEN` is correct and not expired
- Confirm `BITBUCKET_EMAIL` matches the Atlassian account that owns the token
- Check that the token has Bitbucket **Read** scope

### `bb_search_code` returns no results

- Code search must be explicitly enabled in Bitbucket account settings at [https://bitbucket.org/search](https://bitbucket.org/search)
- Wait a few minutes after enabling — indexing may take time

### Rate limiting errors

The server does not implement custom throttling. If you hit Bitbucket API rate limits, reduce request frequency. Debug logging will show the 429 response from the API.

### Server not connecting

If your MCP client says the server is unavailable:

1. Test the server starts successfully: `node build/index.js` (or `bitbucket-mcp` for the npm install)
2. Check the absolute path to `build/index.js` if using a local build
3. Ensure Node.js 18+ is the active version: `node --version`
