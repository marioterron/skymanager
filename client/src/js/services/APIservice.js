function dataService ($http) {

	function getPlayers() {
		return $http.get('/api/players')
			.then( response => response.data )
	}

	return { getPlayers }
}

module.exports = dataService
