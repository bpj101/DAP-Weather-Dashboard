(function(){
  'use strict';

  angular.module('dap.forecast')
    .controller('Forecast', ['$scope', '$stateParams', 'weatherSrv', function($scope, $stateParams, weatherSrv){
      $scope.forecast = null;

      if ($stateParams.id !== undefined) {
        getForecast($stateParams.id);
      }

      function getForecast(id) {
         weatherSrv.getForecast(id)
          .then((response) => {
            // Success
            
            $scope.forecast = response;
            console.log('Forecast: ', $scope.forecast);
          }, (err) => {
            // Error
            console.log('Error loading forecast data: ', err);
          });
      }

    }]);

}());