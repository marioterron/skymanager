function apiService ($http) {

	function getUsersData() {
		return $http.get(`/api/users`)
			.then( response => response.data )
	}

	function getUserSquad(id) {
		return $http.get(`/api/user/${id}`)
			.then( response => response.data )
	}

	return { getUsersData, getUserSquad }
}

module.exports = apiService
