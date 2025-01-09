module.exports = {
  env: {
    browser: true,
    es2024: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // TypeScript Essential Rules
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/explicit-function-return-type': ['error'],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],

    // Essential Code Quality Rules
    'require-await': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'prefer-const': 'error',
    'no-var': 'error',
    'no-param-reassign': 'error',
    'no-unneeded-ternary': 'error',
    'no-nested-ternary': 'error',
    'no-return-await': 'error',
    eqeqeq: ['error', 'always'],
    curly: ['error', 'all'],
    'max-lines': [
      'warn',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
  },
  ignorePatterns: ['node_modules', 'dist', '.git', '*.spec.ts'],
};
