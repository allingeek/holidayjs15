  (function() {
    'use strict';

    angular
      .module('holidayjs15')
      .controller('NewPlayerCtrl', NewPlayerCtrl);

    /** @ngInject */
    function NewPlayerCtrl($uibModal) {
      var vm = this;

      activate();

      function activate() {

        console.log('launching modal');

      //   var modalInstance = $uibModal.open({
      //   // animation: $scope.animationsEnabled,
      //   templateUrl: 'app/components/newPlayer/new-player.html'
      //   controller: 'NewPlayerCtrl'
      //   // size: size,
      //   // resolve: {
      //     // items: function () {
      //       // return $scope.items;
      //     // }
      //   // }
      // });

      }

    }
  })();