(function(){
  'use strict';
  angular.module('dap.data')
    .factory('weatherSrv', [
      '$http',
      '$q',
      'weatherImgUrl',
      'weatherSrvUrl',
      'countryFlagUrl',
      'appid',
      function($http, $q, weatherImgUrl, weatherSrvUrl, countryFlagUrl, appid){
        return {
          find: findByLocation,
          getCurrent: getCurrentWeather,
          getForecast: getForecast,
          getWeatherImgUrl: getWeatherImgUrl,
          getCountryFlag: getCountryFlag,
          kelvinToFahrenheit: kelvinToFahrenheit,
          getTime: getTime
        }

      function findByLocation(location) {
        var url = weatherSrvUrl + 'find?q=' + location + appid;
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

      function getCurrentWeather(id) {
        var url = weatherSrvUrl + 'weather?id=' + id + appid;
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

      function getForecast(id) {
        var deferred = $q.defer();
        var url = weatherSrvUrl + 'forecast/daily?id=' + id + appid;

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

      function getWeatherImgUrl(imgStr) {
        return weatherImgUrl + imgStr +'.png';
      }

      function getCountryFlag(imgStr) {
        return countryFlagUrl + imgStr.toLowerCase() + '.png';        
      }

      function kelvinToFahrenheit(temp) {
        return (temp * 9/5) - 459.67;
      }

      function getTime(dt) {
        return new Date(dt * 1000);
      }

    }]);
}());