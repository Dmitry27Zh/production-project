module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['airbnb', 'airbnb-typescript'],
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
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react'],
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
    'max-len':['error', { ignoreComments: true, code: 100 },]
  },
  ignorePatterns: [".eslintrc.js"]
};
