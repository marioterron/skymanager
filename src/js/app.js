const angular = require('angular')
const angularRoute = require('angular-route');

const APIservice = require('./services/APIservice')
const mainController = require('./controllers/mainController')


angular.module('skymanagerApp', [ 'ngRoute' ])
	.factory('APIservice', APIservice)
	.controller('mainController', mainController)
	.config( function( $routeProvider ) {
		$routeProvider
			.when('/', {
				templateUrl: '../assets/templates/news.html'
			})
			.when('/table', {
				templateUrl: '../assets/templates/table.html'
			})
			.when('/squad', {
				templateUrl: '../assets/templates/squad.html',
				controller: 'mainController'
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
