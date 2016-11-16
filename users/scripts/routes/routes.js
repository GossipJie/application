 app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/login', {
		templateUrl: 'views/login.html',
		controller: 'loginCtrl'
	})
	.when('/forgot', {
		templateUrl: 'views/forgot.html',
		controller: 'forgotCtrl'
	})
	.when('/sign', {
		templateUrl: 'views/signup.html',
		controller: 'signCtrl'
	})
	.otherwise({
		redirectTo: '/login'
	});
}]);