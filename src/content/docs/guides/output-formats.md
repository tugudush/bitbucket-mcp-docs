---
title: Output Formats
description: Control how Bitbucket MCP Server formats responses — text, JSON, or TOON (Token-Oriented Object Notation).
---

All 37 tools support an optional `output_format` parameter that controls how responses are returned.

## Available Formats

| Format | Description                                             | Best for                                   |
| ------ | ------------------------------------------------------- | ------------------------------------------ |
| `text` | Human-readable formatted output **(default)**           | Debugging, human review                    |
| `json` | Pretty-printed JSON with 2-space indentation            | Programmatic use, structured data          |
| `toon` | Token-Oriented Object Notation — compact tabular format | **LLM consumption (30–60% token savings)** |

## Using `output_format`

Pass `output_format` as a parameter in your prompt or tool call:

```
bb_list_repositories workspace=myworkspace output_format=toon
```

```
bb_get_pull_request workspace=myworkspace repo_slug=myrepo pull_request_id=123 output_format=json
```

## TOON Format

TOON (Token-Oriented Object Notation) is a compact tabular representation designed to reduce the number of tokens consumed by AI assistants when processing large Bitbucket API responses.

**Use TOON when:**

- Listing large collections (PR lists, commit histories, file trees)
- Passing Bitbucket data back into an LLM context window
- Working with large repositories where JSON verbosity becomes a bottleneck

**Savings:** TOON typically reduces token usage by **30–60%** compared to equivalent JSON output.

## JSON Format

Use `output_format=json` when you need structured, machine-readable output — for example, when piping data to another tool or when you want to apply your own JMESPath filtering downstream.

```
bb_get_pull_request workspace=myworkspace repo_slug=myrepo pull_request_id=123 output_format=json
```

## Text Format

`text` (the default) provides human-readable, formatted output — ideal when reviewing results directly in a chat interface or terminal.

## Setting a Global Default

To avoid specifying `output_format` on every call, set the `BITBUCKET_DEFAULT_FORMAT` environment variable in your MCP client config:

```json
{
  "env": {
    "BITBUCKET_API_TOKEN": "your-token",
    "BITBUCKET_EMAIL": "your@email.com",
    "BITBUCKET_DEFAULT_FORMAT": "toon"
  }
}
```

**Precedence rules:**

- If `BITBUCKET_DEFAULT_FORMAT` is unset, defaults to `text` (backward compatible)
- A per-call `output_format` parameter always takes priority over the environment variable
- Accepted values: `text`, `json`, `toon`

:::tip
When using the server with AI assistants on large datasets, set `BITBUCKET_DEFAULT_FORMAT=toon` globally to save 30–60% on token consumption for every request.
:::
