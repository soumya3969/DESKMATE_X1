import js from '@eslint/js'

const javascriptAndJsxFiles = ['**/*.{js,jsx}']
const ignoredBuildArtifacts = ['dist/**', 'node_modules/**']

export default [
  {
    ignores: ignoredBuildArtifacts,
  },
  {
    files: javascriptAndJsxFiles,
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      // Browser globals are used throughout this app.
      'no-undef': 'off',
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
]
