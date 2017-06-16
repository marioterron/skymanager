
function loginController($scope, $location, authService, SweetAlert) {

	  $scope.login = function (event) {
	    event.preventDefault()
	    const { username, password } = $scope

	    authService.login(username, password)
					.then(msg => {
						console.log(msg)
						$location.path('/game')
						location.reload()
					})
					.catch(msg => {
						console.log(msg)
						$('#login-modal').modal('hide');
						return SweetAlert.swal("Error!", "El usuario o contraseña es incorrecto", "error")
					})
	  }
}

module.exports = loginController
