---
title: Usage Examples
description: Natural-language prompt examples for all major Bitbucket MCP Server operations.
---

These examples show how to interact with the Bitbucket MCP Server using natural language in VS Code Copilot, Cursor, or Claude Code.

## Repository Discovery

```
List all my accessible workspaces
```

```
Browse the root directory of myworkspace/myrepo
```

```
Browse the tests directory in feature/deployment-fixes branch
```

```
Search for repositories containing 'keycloak' in myworkspace
```

## File Operations

```
Read lines 100–200 of src/app.py from myworkspace/myrepo
```

```
Get the first 50 lines of README.md
```

```
Show me the package.json file from develop branch
```

```
Get the commit history for src/components/Header.tsx
```

## Code Search

:::note
Requires [code search to be enabled](/getting-started/requirements/#code-search-optional) in Bitbucket account settings.
:::

```
Search for 'authentication' code in myworkspace/myrepo
```

```
Find all functions containing 'validate' in myworkspace/myrepo
```

```
Search for TypeScript interfaces in myworkspace/myrepo
```

```
Look for 'TODO' comments in myworkspace/myrepo
```

## Pull Requests & Comments

```
Show open pull requests for myworkspace/myrepo
```

```
Get details for PR #123 in myworkspace/myrepo
```

```
List all comments on PR #123
```

```
Get comment #12345678 from PR #123 in myworkspace/myrepo
```

```
Get the comment thread for comment #12345678 on PR #123
```

```
Show me the diff for PR #123
```

```
Get build statuses for PR #123
```

## Branches & Commits

```
List all branches in myworkspace/myrepo
```

```
Get details for the develop branch
```

```
Show recent commits on main branch of myworkspace/myrepo
```

```
Get commit details for abc123de
```

```
Find the merge base between develop and main
```

```
Show the diff between commits abc123 and def456
```

## Tags & Releases

```
List all tags in myworkspace/myrepo
```

```
Get details for tag v1.0.0
```

## CI/CD Pipelines

```
List recent pipeline runs for myworkspace/myrepo
```

```
Show the steps for the latest pipeline run
```

```
Get the build log for the failing step
```

## Users

```
Who am I logged in as?
```

```
Get profile for user johndoe
```

## Tips for Better Results

- Be specific about workspace and repo slug: `myworkspace/myrepo`
- For large responses, ask for TOON format: _"…in toon format"_
- Use line ranges for large files: _"lines 200–300 of src/server.ts"_
- Specify branch explicitly when not working on the default branch: _"from the feature/new-auth branch"_
