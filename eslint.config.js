// @ts-check
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';

export default defineConfig(
  { ignores: ['dist/', '.astro/', '.lighthouseci/', 'prototype/', 'node_modules/'] },
  tseslint.configs.recommended,
  astro.configs.recommended,
  // Static accessibility checks for .astro markup (eslint-plugin-jsx-a11y-x).
  astro.configs['jsx-a11y-recommended'],
);
