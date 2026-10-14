// @ts-check
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';

export default defineConfig(
  {
    ignores: [
      'dist/',
      '.astro/',
      '.lighthouseci/',
      'prototype/',
      'node_modules/',
      'playwright-report/',
      'test-results/',
      'screenshots/',
    ],
  },
  tseslint.configs.recommended,
  astro.configs.recommended,
  // Static accessibility checks for .astro markup (eslint-plugin-jsx-a11y-x).
  astro.configs['jsx-a11y-recommended'],
  {
    files: ['**/*.astro'],
    rules: {
      // Scrollable regions must be keyboard-focusable (axe: scrollable-region-focusable).
      'astro/jsx-a11y/no-noninteractive-tabindex': ['error', { roles: ['tabpanel', 'region'] }],
    },
  },
);
