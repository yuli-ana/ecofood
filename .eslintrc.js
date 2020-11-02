module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: "react-app",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  parser: "babel-eslint",
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};
