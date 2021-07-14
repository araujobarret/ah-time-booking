module.exports = {
  extends: ["react-app"],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    semi: "error",
    "array-callback-return": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};
