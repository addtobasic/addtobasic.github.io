module.exports = {
  extends: ['next', 'next/core-web-vitals', 'prettier'],
  rules: {
    semi: 'error',
    'import/prefer-default-export': 'off',
    'newline-before-return': 'error',
    'no-console': 'warn',
    'no-var': 'error',
  },
};
