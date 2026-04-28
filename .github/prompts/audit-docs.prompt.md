---
description: "Audit and verify Bitbucket MCP documentation against the live codebase at github.com/tugudush/bitbucket-mcp. Use when docs may be inaccurate, outdated, or missing coverage — e.g. 'audit the docs', 'verify the docs', 'check docs against codebase', 'are the docs up to date'."
name: "Audit Docs vs Codebase"
argument-hint: "Doc file or section to audit, e.g. 'tools/pull-requests.md' or 'all'"
agent: "agent"
tools: ["web/githubRepo", "read/readFile", "search"]
---

You are auditing the Bitbucket MCP documentation in this workspace against the live source code at **https://github.com/tugudush/bitbucket-mcp**.

## Target

$input (if blank, audit all documentation files under `src/content/docs/`)

## Process

### 1. Understand the codebase

Use GitHub tools to inspect the source repo:

- Browse the repository structure at `tugudush/bitbucket-mcp`
- Identify all MCP tool definitions (look for tool registration, handler files, `src/tools/`, `src/handlers/`, or similar)
- Note each tool's name, parameters, parameter types, and description as defined in source

### 2. Read the documentation

Read the relevant markdown files in `src/content/docs/` for the targeted section.

### 3. Compare and find discrepancies

For each documented item, verify against the source code:

| Check                    | What to look for                                                      |
| ------------------------ | --------------------------------------------------------------------- |
| **Tool existence**       | Is the tool still defined in source?                                  |
| **Tool name**            | Does the documented name match the registered tool name exactly?      |
| **Parameters**           | Are all parameters documented? Are any parameters missing or renamed? |
| **Parameter types**      | Do documented types match the source?                                 |
| **Required vs optional** | Are required/optional flags correct?                                  |
| **Descriptions**         | Does the documented behavior match the implementation?                |
| **Return values**        | Are the documented outputs still accurate?                            |
| **Undocumented tools**   | Are there tools in source that have no documentation?                 |

### 4. Report findings

Produce a structured report grouped by documentation file:

```
## <doc-file>

### ✅ Accurate
- <item>: matches source

### ⚠️ Inaccurate / Outdated
- <item>: <what is wrong> → should be <correct value>

### ❌ Missing from docs
- <tool/param>: exists in source but not documented

### 📄 Undocumented tools (no doc file)
- <tool>: defined in source, no corresponding documentation
```

After the report, list **recommended fixes** as concrete edits to make to specific doc files.
