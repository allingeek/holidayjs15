  (function() {
    'use strict';

    angular
      .module('holidayjs15')
      .controller('MainController', MainController);

    /** @ngInject */
    function MainController($uibModal, $rootScope, back) {
      var vm = this;
      vm.gifts = {};
      vm.players = {};

      activate();

      function activate() {

        console.log('launching modal');

        var modalInstance = $uibModal.open({
          // animation: $scope.animationsEnabled,
          templateUrl: 'app/components/newPlayer/new-player.html',
          controller: 'NewPlayerCtrl',
          controllerAs: "playerCtrl"
            // size: size,
            // resolve: {
            // items: function () {
            // return $scope.items;
            // }
            // }
        });

        $rootScope.$on('closeModal', function() {
          console.log('closeModal')

          modalInstance.close();
        });

        modalInstance.result.then(function() {
          console.log("resolve")
          back.getList('players').then(function(data) {
            vm.players = data.data.data;
            console.log(vm.players);
          });
          back.getList('gifts').then(function(data) {
            vm.gifts = data.data.data;
            console.log(vm.gifts)
          });
        }).catch(function() {
          console.log("closed")
          back.getList('players').then(function(data) {
            vm.players = data.data.data;
            console.log(vm.players);
          });
          back.getList('gifts').then(function(data) {
            vm.gifts = data.data.data;
            console.log(vm.gifts)
          });


        });



      }

    }
  })();