// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Bitbucket MCP Server",
      description:
        "A read-only Model Context Protocol (MCP) server that provides secure access to Bitbucket repositories, pull requests, issues, and more.",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/tugudush/bitbucket-mcp",
        },
      ],
      sidebar: [
        {
          label: "Getting Started",
          items: [
            { label: "Requirements", slug: "getting-started/requirements" },
            { label: "Installation", slug: "getting-started/installation" },
            { label: "Configuration", slug: "getting-started/configuration" },
          ],
        },
        {
          label: "Tools",
          collapsed: false,
          items: [
            {
              label: "Repository Management",
              slug: "tools/repository-management",
            },
            { label: "Pull Requests", slug: "tools/pull-requests" },
            { label: "Branches & Commits", slug: "tools/branches-and-commits" },
            { label: "Diff & Comparison", slug: "tools/diff-and-comparison" },
            { label: "CI/CD Pipelines", slug: "tools/pipelines" },
            { label: "Issues", slug: "tools/issues" },
            { label: "Search & Discovery", slug: "tools/search" },
            { label: "User Information", slug: "tools/users" },
          ],
        },
        {
          label: "Guides",
          items: [
            { label: "Output Formats", slug: "guides/output-formats" },
            { label: "JMESPath Filtering", slug: "guides/jmespath-filtering" },
            { label: "Usage Examples", slug: "guides/usage-examples" },
            { label: "Debugging", slug: "guides/debugging" },
          ],
        },
        {
          label: "Development",
          collapsed: true,
          items: [
            { label: "Architecture", slug: "development/architecture" },
            {
              label: "Building & Testing",
              slug: "development/building-and-testing",
            },
            { label: "Contributing", slug: "development/contributing" },
          ],
        },
        {
          label: "Reference",
          collapsed: true,
          items: [
            { label: "API Coverage", slug: "reference/api-coverage" },
            { label: "Security & Limitations", slug: "reference/security" },
            { label: "Roadmap", slug: "reference/roadmap" },
          ],
        },
      ],
    }),
  ],
});
