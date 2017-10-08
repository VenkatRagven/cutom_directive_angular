// create the controller and inject Angular's $scope
	
	
	scotchApp.controller('homeController', function($scope,$http) {
		
		$http.get("/resources/matches.json").then(function (response) {
		$scope.myData = response.data.records;
  		$scope.message = 'This is coming from home controller!';
		
		// $scope.startsWith = function (actual, expected) {
		// var lowerStr = (actual + "").toLowerCase();
		// return lowerStr.indexOf(expected.toLowerCase()) === 0;
		// }
		
		});
		
		
			
	});

	scotchApp.controller('aboutController', function($scope) {
		
		$scope.message = 'This is coming from about controller';
		
	});

	scotchApp.controller('contactController', function($scope) {
		$scope.message = 'This is coming from contact controller.';
	});