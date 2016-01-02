(function(){
  'use strict';
  angular.module('dap.data')
    .factory('weatherSrv', ['$http', '$q', function($http, $q){
      return {
        find: findByLocation
      };

      function findByLocation(location) {
        var appid = '&appid=5f2ff633ab799b31e91a932d1c0c7dde';
        var url = 'http://api.openweathermap.org/data/2.5/find?q=' + location + appid;
        var deferred = $q.defer();

        $http.get(url)
          .success((response) => {
            // Resolve Promise
            deferred.resolve(response);
          })
          .error((err) => {
            // Reject Promis
            deferred.reject(err);
          });

        return deferred.promise;
      }

    }]);
}());