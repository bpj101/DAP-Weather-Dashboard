(function(){
  'use strict';

  angular.module('dap.weather')
    .controller('Weather', [
      '$scope',
      '$stateParams',
      'weatherSrv',
      function($scope, $stateParams, weatherSrv){
        $scope.current = null;

        if ($stateParams.id !== undefined) {
          getCurrent($stateParams.id);
        }

        function getCurrent(id) {
           weatherSrv.getCurrent(id)
            .then((response) => {
              // Success
              console.log('Weather: ',response);
              $scope.current = response;
            }, (err) => {
              // Error
              console.log('Error loading current weather data: ', err);
            });
        }

    }]);

}());