# eslint-config-bandlab-angularjs

This package provides BandLab's .eslintrc as an extensible shared config.
By adopting a common ESLint config, we are encouraging a consistent style and quality across all of our JavaScript projects.

## Usage

We export two ESLint configurations for your usage.

### eslint-config-bandlab-angularjs

Our default export contains all our ESLint rules, including AngularJS rules. It requires `eslint` and `eslint-plugin-angular`.

1. `npm install --save-dev @bandlab/eslint-config-bandlab-angularjs @bandlab/eslint-plugin-angular eslint-plugin-unicorn eslint`
2. add `"extends": "@bandlab/eslint-config-bandlab-angularjs"` to your .eslintrc

### eslint-config-bandlab-base

See [eslint-config-bandlab-base](https://www.npmjs.com/package/@bandlab/eslint-config-bandlab-base) for the base without AngularJS support.

## Disclaimer

Use at your own risks, future versions might change as we improve our style!
