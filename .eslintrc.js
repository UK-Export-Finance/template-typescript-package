module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    jest: true,
    browser: true,
  },
  root: true,
  rules: {
    'prettier/prettier': 'error',
    'max-len': [
      'error',
      160,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-console': ['error', { allow: ['info', 'error'] }],
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'import/no-named-as-default': 0,
    'implicit-arrow-linebreak': 0,
    'object-curly-newline': [
      'error',
      {
        consistent: true,
      },
    ],
    'no-unneeded-ternary': 0,
  },
};
