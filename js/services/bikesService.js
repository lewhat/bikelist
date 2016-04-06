app.factory('bikes', ['$http', function($http) { 
  return $http.get('https://api.myjson.com/bins/2p8y2') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);
