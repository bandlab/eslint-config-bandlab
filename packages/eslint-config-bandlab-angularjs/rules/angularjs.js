module.exports = {
  plugins: ['angular'],
  rules: {
    // Possible Errors
    'angular/module-getter': 2,
    'angular/module-setter': 2,
    'angular/no-private-call': 0,

    // Best Practises
    'angular/component-limit': [0, 1],
    'angular/controller-as': 0,
    'angular/controller-as-route': 0,
    'angular/controller-as-vm': [2, 'vm'],
    'angular/deferred': 0,
    'angular/di-unused': 2,
    'angular/directive-restrict': [0, { restrict: 'AE', explicit: 'never' }],
    'angular/empty-controller': 0,
    'angular/no-controller': 0,
    'angular/no-inline-template': [0, { allowSimple: true }],
    'angular/no-run-logic': [0, { allowParams: true }],
    'angular/no-services': [2, ['$resource']],
    'angular/on-watch': 0,

    // Deprecated Features
    'angular/no-cookiestore': 2,
    'angular/no-directive-replace': 0,
    'angular/no-http-callback': 2,

    // Naming
    'angular/component-name': 0,
    'angular/constant-name': 0,
    'angular/controller-name': [2, '/[A-Z].*Ctrl$/'],
    'angular/directive-name': 0,
    'angular/factory-name': 0,
    'angular/file-name': 0,
    'angular/filter-name': 0,
    'angular/module-name': 0,
    'angular/provider-name': 0,
    'angular/value-name': 0,

    // Conventions
    'angular/di': [2, 'function'],
    'angular/di-order': [2, true, 'case_insensitive'],
    'angular/dumb-inject': 2,
    'angular/function-type': 0,
    'angular/no-service-method': 2,
    'angular/module-dependency-order': [0, { grouped: true, prefix: null }],
    'angular/one-dependency-per-line': 0,
    'angular/rest-service': 0,
    'angular/watchers-execution': [0, '$digest'],

    // Angular Wrappers
    'angular/angularelement': 2,
    'angular/definedundefined': 2,
    'angular/document-service': 0,
    'angular/foreach': 0,
    'angular/interval-service': 0,
    'angular/json-functions': 0,
    'angular/log': 0,
    'angular/no-angular-mock': 0,
    'angular/no-jquery-angularelement': 2,
    'angular/timeout-service': 0,
    'angular/typecheck-array': 2,
    'angular/typecheck-date': 2,
    'angular/typecheck-function': 2,
    'angular/typecheck-number': 2,
    'angular/typecheck-object': 2,
    'angular/typecheck-string': 2,
    'angular/window-service': 0,

    // Misspelling
    'angular/on-destroy': 2,
  },
};
