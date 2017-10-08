	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);
	
	scotchApp.directive("w3TestDirective", function() {
    return {
        restrict : "E",
        replace : true,
		templateUrl: 'socialShare.html'
    };
});