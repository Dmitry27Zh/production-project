module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['airbnb', 'airbnb-typescript', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['src/**/*.{ts,tsx}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
          'i18next/no-literal-string': 'off',
          'max-len': 'off'
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'max-len':['error', { ignoreComments: true, code: 120 },],
    'i18next/no-literal-string': ["error", { markupOnly: true, ignoreAttribute: ['data-testid', 'to'] }],
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  ignorePatterns: [".eslintrc.js", "webpack.config.ts", "build", "config", "scripts"]
};
