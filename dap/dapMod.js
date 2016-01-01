(function(){
  'use strict';
  const name = 'dap',
        depends = [
          'dap.shell',
          'dap.search',
          'dap.weather',
          'dap.forecast',
          'dap.component',
          'dap.data'
        ];

  angular.module(name, depends);

}());