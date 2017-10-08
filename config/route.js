

	// configure our routes
	scotchApp.config(function($routeProvider) {
		
		$routeProvider

			// route for the home page
			.when('/', {
				
				controller  : 'homeController',
				templateUrl : 'pages/home.html'
			})
			.when('/home', {
				
				controller  : 'homeController',
				templateUrl : 'pages/home.html'
			})

			// route for the about page
			.when('/about', {
				
				controller  : 'aboutController',
				templateUrl : 'pages/about.html'
			})

			// route for the contact page
			.when('/contact', {
				
				controller  : 'contactController',
				templateUrl : 'pages/contact.html'
			});
	});