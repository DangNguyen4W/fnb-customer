import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
   {
    rules: {
      "no-console": ["error", { allow: ["warn", "error"] }],
      "no-unused-vars": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-empty-object-type": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
      "jsx-a11y/alt-text": "off",
      "no-unused-expressions": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/triple-slash-reference": "warn",
      "tailwindcss/no-unnecessary-arbitrary-value": "off",
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "const", next: "var" },
        { blankLine: "always", prev: "const", next: "let" },
        { blankLine: "always", prev: "let", next: "function" },
        { blankLine: "always", prev: "function", next: "*" },
        { blankLine: "always", prev: "*", next: "return" },
      ],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;

