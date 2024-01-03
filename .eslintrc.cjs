module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  "extends": [
    "./node_modules/coding-standard/eslintDefaults.js",
    "./node_modules/coding-standard/.eslintrc-es6",
    "./node_modules/coding-standard/.eslintrc-jsx"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
