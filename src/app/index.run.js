(function() {
  'use strict';

  angular
    .module('holidayjs15')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
