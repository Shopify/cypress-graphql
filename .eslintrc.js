module.exports = {
  env: {
    browser: false,
    es2021: true,
  },
  plugins: ['@shopify'],
  extends: ['plugin:@shopify/typescript'],
  ignorePatterns: ['dist/'],
  rules: {
    '@typescript-eslint/no-namespace': 'off',
    'no-confusing-arrow': 'off',
  }
};