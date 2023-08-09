module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'strict': ['error', 'global'],
    'one-var': ['error', { let: 'consecutive', const: 'never' }],
    'linebreak-style': 0,
    'prefer-const': 0,
    'quote-props': ['error', 'consistent-as-needed'],
    'comma-dangle': ['error', 'never'],
    'no-restricted-syntax': 0,
    'no-use-before-define': ['error', { functions: false }],
    'prefer-arrow-callback': 0,
    'func-names': ['error', 'never'],
    'consistent-return': 0,
    'array-callback-return': 0,
    'eol-last': 0,
    'prefer-destructuring': 0,
    'function-paren-newline': 0,
    'space-before-function-paren': 0,
    'max-len': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-unused-expressions': 'off',
    'brace-style': ['error', 'stroustrup'],
    'jsx-quotes': ['error', 'prefer-single'],
    'jsx-a11y/media-has-caption': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'no-plusplus': 'off',
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    'object-curly-newline': ['error', { consistent: true }],
    'react/jsx-boolean-value': ['error', 'always'],
    'react/prop-types': 0,
    'implicit-arrow-linebreak': 0,
    'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
    'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: true }],
    'no-underscore-dangle': 0,
    'react/no-unescaped-entities': 0,
    'jsx-a11y/label-has-associated-control': [2, {
      assert: 'either' // either check for `htmlFor` or `nesting`
    }]
  }
};