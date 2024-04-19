export default {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ['@angular-eslint'],
  extends: ['plugin:@angular-eslint/recommended'],
  parserOptions: {
    // Unset the default value for parserOptions.project that is found in earlier versions of @angular-eslint
    project: [],
  },
  rules: {},
};
