function loginController($scope, $location, authService, apiService) {

	  $scope.login = function (event) {
	    event.preventDefault()
	    const { username, password } = $scope

	    authService.login(username, password)
					.then(msg => {
						console.log(msg)
						$location.path('/game')
						location.reload();
					})
					.catch(console.log)
	  }

	  $scope.getData = function () {
	    DataService.getSecretData()
					.then(data => $scope.message = data.msg)
		 }
}

module.exports = loginController
