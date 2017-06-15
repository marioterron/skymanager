// Controller
function lineupController($scope, $rootScope, apiService) {
	const id = $rootScope.loggedId;
	const currentSchema = $rootScope.loggedId;
	apiService.getUserData(id)
		.then(response => response.lineUp[0].tactic)
		.then(tactic => $scope.tactic = tactic)
}

module.exports = lineupController
