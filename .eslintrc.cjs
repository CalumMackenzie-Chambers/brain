module.exports = {
    env: {
        node: true,
        es2022: true,
        browser: true,
    },
    extends: ["eslint:recommended", "plugin:@docusaurus/recommended"],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {},
};
