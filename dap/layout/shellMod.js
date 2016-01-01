(function(){
  'use strict';
  const name = 'dap.shell',
        depends = ['ui.router'];

  angular.module(name, depends)
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/search');
      
      $stateProvider
        .state('dap', {
          abstract: true,
          templateUrl: '/../../index.html'
        })
        .state('dap.shell', {
          abstract: true,
          templateUrl: 'dap/layout/shell.html',
          controller: 'Shell'
        })
        .state('dap.shell.search', {
          url: '/search',
          templateUrl: 'dap/search/search.html',
          controller: 'Search'
        })
        .state('dap.shell.weather', {
          url: '/weather/:id',
          templateUrl: 'dap/weather/weather.html',
          controller: 'Weather'
        })
        .state('dap.shell.forecast', {
          url: '/forecast/:id',
          templateUrl: 'dap/forecast/forecast.html',
          controller: 'Forecast'
        });
    }]);

}());