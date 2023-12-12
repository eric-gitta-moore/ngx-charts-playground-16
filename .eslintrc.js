/**
 * @type {import('eslint-define-config').ESLintConfig}
 */
module.exports = {
  root: true,
  ignorePatterns: ['projects/**/*'],
  overrides: [
    {
      files: ['*.ts'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
        'prettier',
      ],
      rules: {
        '@angular-eslint/directive-selector': [
          'error',
          {
            type: 'attribute',
            prefix: 'app',
            style: 'camelCase',
          },
        ],
        '@angular-eslint/component-selector': [
          'warn',
          {
            type: 'element',
            prefix: 'app',
            style: 'kebab-case',
          },
        ],
        '@typescript-eslint/no-inferrable-types': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@angular-eslint/no-output-on-prefix': 'warn',
        '@angular-eslint/no-output-native': 'warn',
      },
    },
    {
      files: ['*.html'],
      extends: [
        'plugin:@angular-eslint/template/recommended',
        'plugin:@angular-eslint/template/accessibility',
      ],
      rules: {
        '@angular-eslint/template/interactive-supports-focus': 'warn',
        '@angular-eslint/template/label-has-associated-control': 'warn',
        '@angular-eslint/template/click-events-have-key-events': 'warn',
      },
    },
  ],
};
