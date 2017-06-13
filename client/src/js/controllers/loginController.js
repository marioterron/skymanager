
function loginController($scope, $location, authService) {

	  $scope.login = function (event) {
	    event.preventDefault()
	    const { username, password } = $scope

	    authService.login(username, password)
					.then(msg => {
						console.log(msg)
						$location.path('/game')
						location.reload()
					})
					.catch(console.log)
	  }
}

module.exports = loginController
