module.exports = {
  extends: [
    'eslint-config-bandlab-base',
    './rules/angular'
  ].map(require.resolve),
  rules: {}
};
