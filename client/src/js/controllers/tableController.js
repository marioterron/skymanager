// const positionClasses = (position) => {
// 	position = {
// 		value: position
// 	}
// 	if (position.value === 'PT') {
// 		position.class = "pos pos-goalkeeper"
// 		position.title = "Portero"
// 	} else if (position.value === 'DF') {
// 		position.class = "pos pos-defender"
// 		position.title = "Defensa"
// 	} else if (position.value === 'MC') {
// 		position.class = "pos pos-midfielder"
// 		position.title = "Mediocentro"
// 	} else if (position.value === 'DL') {
// 		position.class = "pos pos-forward"
// 		position.title = "Delantero"
// 	}
// 	return position
// }

// Controller
function tableController($scope, apiService) {

	$scope.sortType     = ''
	$scope.sortReverse  = false
	$scope.searchPlayer   = ''

	apiService.getUsersData()
		.then(users => $scope.users = users)
}

module.exports = tableController
