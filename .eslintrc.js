module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest',
  ],
  rules: {
    'react/prop-types': 0,
    'react/jsx-no-bind': ['error', { allowFunctions: true }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-unused-vars': 'warn',
  },
};
