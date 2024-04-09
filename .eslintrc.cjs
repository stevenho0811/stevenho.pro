module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:astro/recommended',
    'plugin:typescript-sort-keys/recommended',
  ],
  overrides: [
    {
      env: {
        'astro/astro': true,
        es2020: true,
        node: true,
      },
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        extraFileExtensions: ['.astro'],
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
      },
      plugins: ['astro'],
      rules: {
        'astro/no-conflict-set-directives': 'error',
        'astro/no-unused-define-vars-in-style': 'error',
      },
    },
    {
      env: {
        browser: true,
        es2020: true,
      },
      files: ['**/*.astro/*.js', '*.astro/*.js'],
      parserOptions: {
        sourceType: 'module',
      },
      rules: {
        'prettier/prettier': 'off',
      },
    },
    {
      extends: ['react-app'],
      files: ['**/*.tsx'],
      rules: {},
    },
  ],
  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['sort-keys-fix', 'prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': 'error',
    'sort-keys-fix/sort-keys-fix': 'warn',
  },
}
