"use strict";

const { parseForESLint } = require("eslint-parser-plain/index");
const eslintPluginLexsort = require("./eslint-plugin-lexsort");

module.exports = [
  {
    files: ["**/*.js", '**/*.properties'],
    languageOptions: {
      sourceType: "commonjs",
      ecmaVersion: "latest",
      parser: {"eslint-parser-plain": parseForESLint},
    },
    plugins: {"lexsort": eslintPluginLexsort},
    rules: {
      "lexsort/enforce-lexsort": "error",
    },
  }
]