module.exports = {
  extends: './node_modules/kcd-scripts/eslint.js',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  rules: {
    'no-undef': 'off',
    'import/no-unresolved': 'off',
    'react/prop-types': 'off',
    'react/no-adjacent-inline-elements': 'off',
    'no-console': 'off',
    // I can't figure these out:
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
  },
}
