// Controller
function tableController($scope, apiService) {

	$scope.sortType = 'totalPoints'
	$scope.sortReverse = true

	apiService.getUsersData()
		.then(users => {
			return users.map(user => {
				const totalSquadValue = user.squad.players.reduce((acc, player) => {
					acc += player.marketValue
					return acc
				}, 0)
				user.squadValue = totalSquadValue
				return user
			})
		})
		.then(users => {
			return users.map(user => {
				const totalSquadPoints = user.squad.players.reduce((acc, player) => {
					acc += player.totalPoints
					return acc
				}, 0)
				user.totalPoints = totalSquadPoints
				return user
			})
		})
		.then(users => $scope.users = users)
}

module.exports = tableController
