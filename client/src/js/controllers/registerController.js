function registerController($scope, authService) {

		$scope.register = function(event) {
			event.preventDefault()
			const { username, password } = $scope

			authService.register(username, password)
				.then(console.log)
				.catch(console.log)
		}
	}

module.exports = registerController
