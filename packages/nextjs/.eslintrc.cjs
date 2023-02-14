/** @type {import("eslint").Linter.Config} */
var config = {
  extends: ["@naporin0624/eslint-config", "@naporin0624/eslint-config/react", "plugin:@next/next/recommended"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "no-console": "off"
  },
};

module.exports = config;
