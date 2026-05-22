---
description: "Audit this docs site against the live bitbucket-mcp repo and update any inaccurate or missing content. Use when docs may be outdated -- e.g. 'audit the docs', 'verify the docs', 'check docs against the repo', 'are the docs up to date', 'update the documentation'."
name: "Audit Docs vs Repo"
argument-hint: "Optional: specific section to focus on, e.g. 'tools/pull-requests.md' or 'pipelines'. Leave blank to audit everything."
agent: "agent"
tools:
  - fetch_webpage
  - github_repo
  - mcp_io_github_git_get_file_contents
  - mcp_io_github_git_list_commits
  - mcp_io_github_git_get_commit
  - mcp_io_github_git_list_releases
  - mcp_io_github_git_get_latest_release
  - read_file
  - grep_search
  - file_search
  - replace_string_in_file
  - multi_replace_string_in_file
  - create_file
---

Audit this documentation site against the live source of truth at **https://github.com/tugudush/bitbucket-mcp** and **apply all necessary edits directly** to bring the docs up to date.

## Scope

${{ args }} -- if blank, audit all documentation files under `src/content/docs/`.

---

## Step 1 -- Understand the live implementation

Use the **GitHub MCP tools** (`mcp_io_github_git_get_file_contents`, `mcp_io_github_git_list_commits`) to inspect the live repo at `owner=tugudush repo=bitbucket-mcp`. Also use `github_repo` for semantic code search, and `fetch_webpage` as a fallback.

Fetch the following:

- **README**: `mcp_io_github_git_get_file_contents` → `path=README.md`
- **File tree**: `mcp_io_github_git_get_file_contents` → `path=/` (root listing), then drill into `src/`
- **Tool definitions**: `mcp_io_github_git_get_file_contents` → `path=src/tools.ts` — authoritative list of every tool name and its description
- **Schemas**: `mcp_io_github_git_get_file_contents` → `path=src/schemas.ts` — exact parameter names, types, and required/optional status
- **Recent changes**: `mcp_io_github_git_list_commits` — check the last ~10 commits for any tool additions, renames, or removals since the docs were last updated
- **Releases**: `mcp_io_github_git_get_latest_release` and `mcp_io_github_git_list_releases` — release notes often explicitly call out new tools, renamed parameters, and breaking changes; use these as a fast-path to spot what has changed between versions

Collect for every tool:

- Exact registered name (e.g. `bb_get_pull_requests`)
- All parameters: name, type, required/optional
- Short description / what the tool returns

---

## Step 2 -- Read the existing docs

Read the relevant files in `src/content/docs/` for the targeted scope:

| Section         | Files                               |
| --------------- | ----------------------------------- |
| Tools reference | `tools/*.md`                        |
| API coverage    | `reference/api-coverage.md`         |
| Configuration   | `getting-started/configuration.mdx` |
| Requirements    | `getting-started/requirements.md`   |
| Installation    | `getting-started/installation.mdx`  |
| Roadmap         | `reference/roadmap.md`              |
| Architecture    | `development/architecture.md`       |

Also read `astro.config.mjs` to verify the sidebar navigation matches all existing pages.

---

## Step 3 -- Compare and identify every discrepancy

For each documented item, check:

| Check                    | What to look for                                                    |
| ------------------------ | ------------------------------------------------------------------- |
| **Tool count**           | Does the stated total (e.g. "38 tools") match actual?               |
| **Tool existence**       | Any tools removed or renamed in source?                             |
| **Undocumented tools**   | Any tools in source with no doc entry?                              |
| **Parameter names**      | Do documented param names match source exactly?                     |
| **Required vs optional** | Are the checkmark / No flags correct?                               |
| **Descriptions**         | Does documented behavior match what the handler does?               |
| **Config options**       | Any new env vars or options not documented?                         |
| **Read-only status**     | Has anything changed from read-only to write, or added write tools? |
| **Sidebar nav**          | All pages registered in `astro.config.mjs`?                         |

---

## Step 4 -- Apply all updates

**Do not just report -- fix everything you find:**

1. Edit doc files directly, preserving the existing style:
   - Parameter tables use a checkmark for required, `No` for optional
   - Each tool gets a `##` heading with backtick-wrapped name
   - Tools separated by horizontal rules (`---`)
   - Each tool ends with an **Example prompt** block
2. If a net-new tool category is discovered, create a new file under `src/content/docs/tools/` matching the existing structure, then register it in `astro.config.mjs`.
3. Update `reference/api-coverage.md` with the accurate tool count and endpoint table.
4. Update tool-count callouts in `index.mdx` or any other page that states a total number of tools.

---

## Step 5 -- Output a summary

After all edits, output:

```
## Audit Summary

### Updated
- <file>: <what changed>

### Accurate -- no changes needed
- <file>

### Needs manual review
- <reason>
```

Do not create extra markdown files to document the audit itself -- only edit or create actual doc pages.
