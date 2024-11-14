import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    plugins: ['eslint-plugin-promise'],
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
];
