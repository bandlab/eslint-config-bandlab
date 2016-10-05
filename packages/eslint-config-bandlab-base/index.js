module.exports = {
  extends: [
    './rules/base',
    './rules/es6',
    './rules/imports',
    './rules/node'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    strict: 'error',
  }
};
