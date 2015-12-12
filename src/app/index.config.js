(function() {
  'use strict';

  angular
    .module('holidayjs15')
    .config(config);

  /** @ngInject */
  function config(BackandProvider) {
      BackandProvider.setAppName('holidayjs');
      BackandProvider.setSignUpToken('beca32ba-ec4f-4658-a6db-25e4ed677d96');
      BackandProvider.setAnonymousToken('d93fcfeb-4fec-4aad-8e02-64f92e40884a');
  }

})();
