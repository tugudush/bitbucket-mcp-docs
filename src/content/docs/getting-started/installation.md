---
title: Installation
description: How to install the Bitbucket MCP Server via NPM or from source.
sidebar:
  order: 2
---

import { Tabs, TabItem, Steps } from '@astrojs/starlight/components';

## Option 1: Install from NPM (Recommended)

The simplest way to install is from the npm registry as a global package:

```bash
npm install -g @tugudush/bitbucket-mcp
```

This makes the `bitbucket-mcp` command available globally — no path management needed.

### Check Version & Update

```bash
# Check the installed version
npm ls -g @tugudush/bitbucket-mcp

# Check if an update is available
npm outdated -g @tugudush/bitbucket-mcp

# Update to the latest version
npm install -g @tugudush/bitbucket-mcp@latest
```

---

## Option 2: Build from Source

Use this approach for local development or to run an unreleased version.

<Steps>

1. **Clone the repository**

   ```bash
   git clone https://github.com/tugudush/bitbucket-mcp.git
   cd bitbucket-mcp
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Build the TypeScript source**

   ```bash
   npm run build
   ```

   This compiles to `build/index.js`.

4. **Test the server starts**

   ```bash
   node build/index.js
   ```

</Steps>

:::tip
For day-to-day use, the NPM global install (Option 1) is strongly recommended — it is simpler, requires no path management, and gives you easy access to updates.
:::

## Next Steps

After installing, [configure your MCP client](/getting-started/configuration/) — VS Code, Cursor, or Claude Code.
