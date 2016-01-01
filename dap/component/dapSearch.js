(function(){
  'use strict';
  angular.module('dap.component')
    .directive('dapSearchBox', [function () {
      return {
        restrict: 'E',
        templateUrl: 'dap/component/dapSearchForm.html',
        controller: searchBoxCtrlFn
      };
    }]);

    function searchBoxCtrlFn($scope) {
      $scope.search = (searchStr) => {
        //code
        $scope.$emit('search', {str: searchStr});
      };
    }
}());