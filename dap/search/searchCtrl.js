(function(){
  'use strict';

  angular.module('dap.search')
    .controller('Search', ['$scope', function($scope){
      $scope.$on('search', search);

      function search(evt, data) {
        console.log(data.str);
      }
    }]);

}());