function registerController($scope, authService, SweetAlert ) {

		$scope.register = function(event) {
			event.preventDefault()
			const { username, password } = $scope

			authService.register(username, password)
				.then( response => {
					console.log(response);
					$('#register-modal').modal('hide');
					return SweetAlert.swal("Success!", response.msg, "success");
				})
				.catch(response => {
					$('#register-modal').modal('hide');
					return SweetAlert.swal("Error!", response.data.msg, "error");
				})
		}
	}

module.exports = registerController
