(function(){
  'use strict';

  angular.module('dap.shell')
    .controller('Shell', ['$scope', 'weatherSrv', function($scope, weatherSrv){
      $scope.getWeatherImgUrl = weatherSrv.getWeatherImgUrl;  
      $scope.getCountryFlag = weatherSrv.getCountryFlag;
      $scope.kelvinToFahrenheit = weatherSrv.kelvinToFahrenheit;
      $scope.getTime = weatherSrv.getTime;
      
    }]);

}());
