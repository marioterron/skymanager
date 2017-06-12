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
				css: '../css/style.css',
			})
			.when('/news', {
				templateUrl: '../templates/news.html',
				css: ['../css/style.css', '../css/game.css']
			})
			.when('/table', {
				templateUrl: '../templates/table.html',
				css: ['../css/style.css', '../css/game.css']
			})
			.when('/squad', {
				templateUrl: '../templates/squad.html',
				controller: 'mainController',
				css: ['../css/style.css', '../css/game.css']
			})
			.when('/lineup', {
				templateUrl: '../templates/lineup.html',
				css: ['../css/style.css', '../css/game.css']
			})
			.when('/market', {
				templateUrl: '../templates/market.html',
				css: ['../css/style.css', '../css/game.css']
			})
			.when('/sales', {
				templateUrl: '../templates/sales.html',
				css: ['../css/style.css', '../css/game.css']
			})
	})
