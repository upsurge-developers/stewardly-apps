
/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@stewardly/eslint-config/library.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
