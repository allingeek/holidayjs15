
function dataService($http, Backand) {
  var vm = this;
  //get the object name and optional parameters
  // var gifts = getList('gifts')
  vm.getList = function(name, sort, filter) {
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
}

