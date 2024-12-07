import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

/** @type {import('eslint').Linter.Config[]} */

export default [
  {
    languageOptions: { globals: globals.node },
  },
  {
    files: ["src/**/*.{ts}"],
  },
  {
    ignores: ["node_modules/**/*", "dist/**/*", "eslint.config.mjs"],
  },
  {
    rules: {
      "prettier/prettier": [
        "error",
        {
          singleQuote: true,
          parser: "flow",
          
        },
      ],
    },
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
];
