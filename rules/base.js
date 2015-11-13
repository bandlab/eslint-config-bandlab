module.exports = {
  'extends': 'eslint:recommended',
  'rules': {
//    'lines-around-comment': [2, { 'beforeBlockComment': true, 'beforeLineComment': true }],
    'curly': 2,
    'dot-notation': 2,
    'eqeqeq': 2,
    'quotes': [2, 'single'],
    'linebreak-style': [2, 'unix'],
    'no-alert': 0,
    'no-console': 0,
    'no-extend-native': 2,
    'no-extra-bind': 1,
    'no-multiple-empty-lines': [2, { 'max': 1 }],
    'no-unused-vars': [1, { // Should be 2
      'vars': 'all',
      'args': 'none'
    }],
    'no-proto': 2,
    'no-redeclare': 2,
    'no-return-assign': 2,
    'no-void': 0,
    'space-after-keywords': [2, 'always'],
//    'spaced-comment': [2, 'always']
    'strict': [0],
    'yoda': 2
  }
};
