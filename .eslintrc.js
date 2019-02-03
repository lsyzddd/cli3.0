module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-use-before-define": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-mixed-spaces-and-tabs": [2, false]
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 6
  }
};