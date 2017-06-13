function logoutController($scope, $location, authService) {

		authService.logout()
		console.log("logouting....");
		$location.path('/')
}
module.exports = logoutController
