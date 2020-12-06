module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  settings: {
    react: {
      version: '16.13.1',
    },
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
    {
      files: ['server/tests/**/*.test.js'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/no-cycle': [2, { maxDepth: 1 }],
    'no-console': 0,
  },
};
