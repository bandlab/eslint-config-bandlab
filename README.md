# eslint-config-bandlab

This package provides BandLab's .eslintrc as an extensible shared config.
By adopting a common ESLint config, we are encouraging a consistent style and quality across all of our JavaScript projects.

## Usage

We export two ESLint configurations for your usage.

### eslint-config-bandlab

Our default export contains all our ESLint rules, including Angular. It requires `eslint` and `eslint-plugin-angular`.

1. `npm install --save-dev eslint-config-bandlab eslint-plugin-angular eslint`
2. add `"extends": "bandlab"` to your .eslintrc

### eslint-config-bandlab/base

Our default export contains our default ESLint rules. Requires `eslint`.

1. `npm install --save-dev eslint-config-bandlab eslint`
2. add `"extends": "bandlab/base"` to your .eslintrc

## Disclaimer

Use at your own risks, future versions might change as we improve our style!
