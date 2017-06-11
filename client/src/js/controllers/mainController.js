function positionClasses(position) {
	position = {
		value: position
	}
	if (position.value === 'PT') {
		position.class = "pos pos-goalkeeper"
		position.title = "Portero"
	} else if (position.value === 'DF') {
		position.class = "pos pos-defender"
		position.title = "Defensa"
	} else if (position.value === 'MC') {
		position.class = "pos pos-midfielder"
		position.title = "Mediocentro"
	} else if (position.value === 'DL') {
		position.class = "pos pos-forward"
		position.title = "Delantero"
	}
	return position
}

function statusClasses(status) {
	status = {
		title: status
	}
	if (status.title === "Alineable") {
		status.bgClass = "player-status"
		status.contentClass = "icon icon-check"
	} else if (status.title === "Sancionado") {
		status.bgClass = "player-status sanctioned"
		status.contentClass = "icon icon-close"
	} else if (status.title === "Lesionado") {
		status.bgClass = "player-status injured"
		status.contentClass = "icon icon-plus"
	}
	return status
}

function fitnessClasses(aFitness) {
	return aFitness.map(singleFitness => {
		singleFitness = {
			value: singleFitness
		}
		if (singleFitness.value === " ") {
			singleFitness.class = "points sanctioned"
		} else if (/^[+]/.test(singleFitness.value)) {
			singleFitness.class = "points injured"
		} else if (/^[1-5]$/.test(singleFitness.value)) {
			singleFitness.class = "points low-points"
		} else if (/^[6-9]$/.test(singleFitness.value)) {
			singleFitness.class = "points high-points"
		} else if (/^1[0-9]|2[0]$/.test(singleFitness.value)) {
			singleFitness.class = "points so-high-points"
		} else if (/^\-?[1-9]/.test(singleFitness.value)) {
			singleFitness.class = "points negative-points"
		} else {
			singleFitness.class = "points not-played"
		}
		return singleFitness
	})
}

// Controller
function mainController($scope, APIservice) {
	$scope.sortType     = 'player.name'; 		// set the default sort type
	$scope.sortReverse  = false;  // set the default sort order
	$scope.searchPlayer   = '';   // set the default search/filter
	APIservice.getPlayers()
		.then(players => players.map(player => {
			player.position = positionClasses(player.position)
			return player
		}))
		.then(players => players.map(player => {
			player.status = statusClasses(player.status)
			return player
		}))
		.then(players => players.map(player => {
			player.fitness = fitnessClasses(player.fitness)
			return player
		}))
		.then(players => $scope.players = players)
}

module.exports = mainController
