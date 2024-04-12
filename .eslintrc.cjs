module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    'vitest-globals/env': true,
    'cypress/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:import/typescript',
    'plugin:vitest-globals/recommended',
    'plugin:testing-library/react',
    'plugin:cypress/recommended',
    'plugin:chai-friendly/recommended',
    'next/core-web-vitals',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    '@typescript-eslint',
    'vitest',
    'testing-library',
    'cypress',
    'prettier',
  ],
  rules: {
    'import/no-unresolved': 'error',
    // "@typescript-eslint/no-explicit-any": "off",
    '@typescript-eslint/no-non-null-assertion': 'off',
    // "@typescript-eslint/explicit-function-return-type": "off",
    '@typescript-eslint/camelcase': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': 'warn',
    'jsx-a11y/tabindex-no-positive': 'off',
    camelcase: 'off',
    'spaced-comment': 'error',
    quotes: ['error', 'single'],
    'no-duplicate-imports': 'error',
    'import/newline-after-import': ['error', { count: 1 }],
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
        typedefs: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'testing-library/prefer-explicit-assert': 'error',
    'testing-library/prefer-presence-queries': 'error',
    'testing-library/prefer-screen-queries': 'error',
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-force': 'warn',
    'cypress/no-async-tests': 'error',
    'cypress/no-pause': 'error',
  },
  overrides: [
    {
      files: ['cypress/**'],
      parserOptions: {
        project: './cypress/tsconfig.json',
      },
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: true,
    },
    react: {
      version: 'detect',
    },
    vitest: {
      typecheck: true,
    },
  },
};
