function apiService ($http) {
	function getUserSquad(id) {
		return $http.get(`/api/user/${id}`)
			.then( response => response.data )
	}
	return { getUserSquad }
}

module.exports = apiService
