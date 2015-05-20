(function () {
	var myApp = angular.module('myApp',[]);

	var GreetingController = function ($scope, $http) {
		var onUserComplete = function  (response) {
			$scope.user = response.data;
		};

		var onNotFound = function (reason) {
			// alert(reason.message);
			$scope.error = "Error Unable to Fetch Data";
		};

		$http.get("https://api.github.com/users/deepakrohan1").then(onUserComplete,onNotFound);
		//then is a function which is followed by success , failure functions
		// $scope.greeting = 'Hi angular';
	};

	myApp.controller('GreetingController',["$scope", "$http", GreetingController]);
}());