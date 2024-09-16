module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:tailwindcss/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  ignorePatterns: [
    'apps/**/.contentlayer/**', // Ignore all contentlayer generated files
    'dist/**', // Ignore build directories
    'node_modules/**', // Ignore node_modules
    'apps/glinui-docs/components/**',
  ],
  rules: {
    'no-unused-vars': 'warn',
    'no-undef': 'off',
  },
  overrides: [
    {
      files: ['.eslintrc.cjs'], // Apply specific settings for ESLint config files
      rules: {
        '@typescript-eslint/no-var-requires': 'off', // Allow `require` in ESLint config
      },
      parserOptions: {
        project: null, // Do not check TypeScript project in this file
      },
    },
  ],
};
