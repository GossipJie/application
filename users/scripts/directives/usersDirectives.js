var usersDirective = angular.module("users.directive",[]);
usersDirective.directive('zbsysUsersDirective', function() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '../users/views/d_password.html'
	};
});