// @ts-check
import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";

export default tseslint.config(
  // TypeScript-aware rules for .ts and .mjs files
  ...tseslint.configs.recommended,

  // Astro-aware rules for .astro files
  ...eslintPluginAstro.configs.recommended,

  // Disable ESLint rules that conflict with Prettier (must be last)
  prettier,

  {
    ignores: ["dist/", ".astro/", "node_modules/"],
  },
);
