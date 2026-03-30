---
title: JMESPath Filtering
description: Apply JMESPath expressions to transform and filter Bitbucket API response data on any of the 37 tools.
---

All 37 tools support an optional `filter` parameter that accepts a [JMESPath](https://jmespath.org/) expression. Filtering is applied **before** format conversion, making it composable with any `output_format`.

## How It Works

1. The tool fetches data from the Bitbucket API
2. The JMESPath expression in `filter` is applied to transform the raw response JSON
3. The transformed result is then formatted according to `output_format`

This means you can chain `filter` and `output_format` freely.

## Basic Syntax

JMESPath operates on JSON structures. Common patterns:

| Expression                        | Description                               |
| --------------------------------- | ----------------------------------------- |
| `values[]`                        | Iterate over a `values` array             |
| `values[].title`                  | Extract the `title` field from each item  |
| `values[].{a: fieldA, b: fieldB}` | Project multiple fields into a new object |
| `values[?state=='OPEN']`          | Filter items where `state` equals `OPEN`  |
| `length(values)`                  | Count items in the array                  |

## Examples

### Extract PR titles and authors

```
bb_get_pull_requests workspace=myworkspace repo_slug=myrepo \
  filter="values[].{title: title, author: author.display_name}"
```

### Filter to only open PRs

```
bb_get_pull_requests workspace=myworkspace repo_slug=myrepo \
  filter="values[?state=='OPEN']"
```

### Extract repository names from a list

```
bb_list_repositories workspace=myworkspace \
  filter="values[].full_name"
```

### Combine filter + TOON output format

Get only PR IDs, titles, and states in compact format:

```
bb_get_pull_requests workspace=myworkspace repo_slug=myrepo \
  output_format=toon \
  filter="values[].{id: id, title: title, state: state}"
```

### Get JSON output of only open PRs

```
bb_get_pull_requests workspace=myworkspace repo_slug=myrepo \
  output_format=json \
  filter="values[?state=='OPEN']"
```

## Learning JMESPath

- **Official tutorial:** [jmespath.org/tutorial.html](https://jmespath.org/tutorial.html)
- **Online tester:** [jmespath.org](https://jmespath.org/) — paste a sample response and test your expression interactively

:::tip
Start with `values[]` to understand the array structure of a response, then add projections and filters from there.
:::
