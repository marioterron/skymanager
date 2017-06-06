const angular = require('angular')
const angularRoute = require('angular-route');

angular.module('skymanagerApp', [ 'ngRoute' ])
	.config( function( $routeProvider ) {
		$routeProvider
			.when('/', {
				templateUrl: '../assets/templates/news.html'
			})
			.when('/table', {
				templateUrl: '../assets/templates/table.html'
			})
			.when('/squad', {
				templateUrl: '../assets/templates/squad.html'
			})
			.when('/lineup', {
				templateUrl: '../assets/templates/lineup.html'
			})
			.when('/market', {
				templateUrl: '../assets/templates/market.html'
			})
			.when('/sales', {
				templateUrl: '../assets/templates/sales.html'
			})
	})
