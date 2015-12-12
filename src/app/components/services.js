  (function() {
    'use strict';

    angular
      .module('holidayjs15')
      .factory('back', back);

    /** @ngInject */
    function back($http, Backand) {

      var service = {
        getList: getList,
        createUser: createUser,
        createGift: createGift
      };
      return service;

      ////////////

      // get the object name and optional parameters
      // var gifts = getList('gifts')
      function getList(name, sort, filter) {
        return $http({
          method: 'GET',
          url: Backand.getApiUrl() + '/1/objects/' + name,
          params: {
            pageSize: 20,
            pageNumber: 1,
            filter: filter || '',
            sort: sort || ''
          }
        });
      }


      function createUser(playerName) {
        return $http({
          method: 'POST',
          url: Backand.getApiUrl() + '/1/objects/players',
          data: {
            name: playerName
          },
          params: {
            returnObject: true
          }
        });
      }

      function createGift(playerID, giftName, giftURL, giftSize, giftStyle) {
        return $http({
          method: 'POST',
          url: Backand.getApiUrl() + '/1/objects/gifts',
          data: {
              name: giftName,
              url: giftURL,
              broughtBy: playerID,
              style: "giftStyle",
              size: 0
          }
        });
      }

    }

  })();