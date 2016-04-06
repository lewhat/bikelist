app.controller('mainController', ['$scope','bikes', function($scope, bikes) { 


    bikes.success(function(data) {
          $scope.bikes = data;

    });

    $scope.plusOne = function(index) {
    $scope.bikes[index].likes +=1;
  };
  $scope.minusOne = function(index) {
    $scope.bikes[index].dislikes +=1;
  };
}]);


























































  // $scope.title = 'motorcycles'; 
  // $scope.promo = 'sport bikes';
  // $scope.bikes = [ 
  //   {
  //      make: ' 2014 Ducati Panigale 899', 
  //  		price: 15000, 
  //   	unvaileddate: new Date('2014', '03', '08'), 
  //   	cover: 'img/899.jpg',
      
  //   },
  //   {
  //      make: '2014 Triumph Daytona 675', 
  //   	price: 11000, 
  //   	unvaileddate: new Date('2014', '08', '01'), 
  //   	cover: 'img/675.jpg',
     
  //   },
  //   {
  //     make: '2015 Yamaha R6',
  //     price: 10500,
  //     unvaileddate: new Date('2015', '08', '01'),
  //     cover:'img/r6.jpg',
      
  //   },
  //   {
  //     make:'2013 Ducati 848',
  //     price:11000,
  //     unvaileddate:new Date('2013', '05', '15'),
  //     cover:'img/848.jpg',
     
  //   }
  //  ]
//   // $scope.plusOne = function(index) {
//   //   $scope.products[index].likes +=1;
//   // };
//   // $scope.minusOne = function(index) {
//   //   $scope.products[index].dislikes +=1;
//   // };
