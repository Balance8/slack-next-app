module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    '@jonny',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'ts-exports', 'prettier'],
  rules: {
    'ts-exports/unused-exports': 2,
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    // allow jsx syntax in js files (for next.js project)
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.ts', '.tsx'] }],
    'react/prop-types': 'off',
  },
  overrides: [
    {
      files: ['**/*.stories.tsx'],
      rules: {
        'ts-exports/unused-exports': 'off',
      },
    },
  ],
};
