module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:wordpress/recommended', // Para soporte en WordPress
    'plugin:prettier/recommended', // Integra Prettier con ESLint
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['wordpress', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'warn',
    'no-unused-vars': 'warn',
  },
};
