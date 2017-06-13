const angular = require('angular')
const angularRoute = require('angular-route');
const angularCss = require('angular-css');

const APIservice = require('./services/APIservice')
const mainController = require('./controllers/mainController')

angular.module('skymanagerApp', [ 'ngRoute', 'angularCSS' ])
	.factory('APIservice', APIservice)
	.controller('mainController', mainController)
	.config( function( $routeProvider ) {
		$routeProvider
			.when('/', {
				templateUrl: '../templates/landing.html',
			})
			.when('/game', {
				templateUrl: '../templates/news.html',
				css: '../css/game.css'
			})
			.when('/game/table', {
				templateUrl: '../templates/table.html',
				css: '../css/game.css'
			})
			.when('/game/squad', {
				templateUrl: '../templates/squad.html',
				controller: 'mainController',
				css: '../css/game.css'
			})
			.when('/game/lineup', {
				templateUrl: '../templates/lineup.html',
				css: '../css/game.css'
			})
			.when('/game/market', {
				templateUrl: '../templates/market.html',
				css: '../css/game.css'
			})
			.when('/game/sales', {
				templateUrl: '../templates/sales.html',
				css: '../css/game.css'
			})
	})
