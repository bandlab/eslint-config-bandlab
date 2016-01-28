module.exports = {
  'plugins': [
    'angular'
  ],
  'rules': {
    'angular/controller-as': 0,
    'angular/controller-as-route': 0,
    'angular/controller-name': [2, '/[A-Z].*Ctrl$/'],
//    'angular/di-order': [2, true],
    'angular/di-unused': 1,
    'angular/document-service': 0,
    'angular/interval-service': 0,
    'angular/json-functions': 0,
    'angular/log': 0,
    'angular/no-private-call': 0,
    'angular/no-services': [2, ['$resource']],
    'angular/on-watch': 0,
    'angular/rest-service': 0,
    'angular/timeout-service': 0,
    'angular/window-service': 0
  }
};
