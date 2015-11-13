# eslint-config-bandlab

This package provides BandLab's .eslintrc as an extensible shared config.

Inspired by [Airbnb's Javascript style guide](https://github.com/airbnb/javascript/)

## Usage

We export two ESLint configurations for your usage.

### eslint-config-bandlab

Our default export contains all our ESLint rules, including Angular. It requires `eslint` and `eslint-plugin-angular`.

1. `npm install --save-dev git://github.com/bandlab/eslint-config-bandlab#v1.0.0 eslint-plugin-angular eslint`
2. add `"extends": "bandlab"` to your .eslintrc

### eslint-config-bandlab/base

Our default export contains our default ESLint rules. Requires `eslint`.

1. `npm install --save-dev git://github.com/bandlab/eslint-config-bandlab#v1.0.0 eslint`
2. add `"extends": "bandlab/base"` to your .eslintrc

## Disclaimer

Use at your own risks, this repository might be refactored as we improve our style!
