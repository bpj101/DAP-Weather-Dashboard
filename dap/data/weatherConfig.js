(function(){
  'use strict';

  angular.module('dap.data')
    .value('weatherImgUrl', 'http://openweathermap.org/img/w/')
    .value('weatherSrvUrl', 'http://api.openweathermap.org/data/2.5/')
    .value('countryFlagUrl', 'http://openweathermap.org/images/flags/')
    .value('appid', '&appid=5f2ff633ab799b31e91a932d1c0c7dde');
}());