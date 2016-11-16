 app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/apply', {
		templateUrl: 'views/apply.html',
		controller: 'applyCtrl'
	})
	.when('/pay', {
		templateUrl: 'views/pay.html',
		controller: 'payCtrl'
	}) 
	.when('/card', {
		templateUrl: 'views/card.html',
		controller: 'cardCtrl'
	}) 
	.when('/scores', {
		templateUrl: 'views/scores.html',
		controller: 'scoresCtrl'
	}) 
	.when('/status', {
		templateUrl: 'views/status.html',
		controller: 'statusCtrl'
	}) 
	.when('/details', {
		templateUrl: 'views/details.html',
	}) 
	
	.otherwise({
		redirectTo: '/status'
	});
}]);