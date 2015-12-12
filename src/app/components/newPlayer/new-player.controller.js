  (function() {
    'use strict';

    angular
      .module('holidayjs15')
      .controller('NewPlayerCtrl', NewPlayerCtrl);

    /** @ngInject */
    function NewPlayerCtrl($uibModal, $rootScope, back) {
      var vm = this;

      vm.createUser = createUser;

      activate();

      function activate() {

        console.log('launching player modal');

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

      function createUser(playerName, giftName, giftURL) {
        console.log('test')
        console.log(playerName);
        back.createUser(playerName).then(function(playerID) {
          console.log(playerID)
          back.createGift(playerID.data.id, giftName, giftURL).then(function(data) {
            console.log(data)
          });
          console.log(playerID);
        });

        $rootScope.$broadcast('closeModal');

      }

    }
  })();
