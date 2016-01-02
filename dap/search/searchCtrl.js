(function(){
  'use strict';

  angular.module('dap.search')
    .controller('Search', ['$scope','weatherSrv', function($scope, weatherSrv){
      $scope.cities = null;
      $scope.$on('search', search);

      function search(evt, data) {
        console.log(data.str);
        weatherSrv.find(data.str)
          .then((response) => {
            // Success
            console.log(response);
            $scope.cities = response.list;
          }, (err) => {
            // Error
            console.log('error finding cities: ', err);
          });
      }
    }]);

}());