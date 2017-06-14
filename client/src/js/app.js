const angular = require('angular');
const angularRoute = require('angular-route');
const angularJwt = require('angular-jwt');
const angularSweetalert = require('angular-sweetalert');
const angularCss = require('angular-css');

const apiService = require('./services/apiService')
const authService = require('./services/authService')
const authInterceptor = require('./services/authInterceptor')
const storageService = require('./services/storageService')

const loginController = require('./controllers/loginController')
const logoutController = require('./controllers/logoutController')
const registerController = require('./controllers/registerController')
const squadController = require('./controllers/squadController')

angular
	.module('skymanagerApp', [ 'ngRoute', 'angularCSS', 'angular-jwt', 'oitozero.ngSweetAlert' ])

	.factory('authService', authService)
	.factory('storageService', storageService)
	.factory('authInterceptor', authInterceptor)
	.factory('apiService', apiService)

	.controller('loginController', loginController)
	.controller('logoutController', logoutController)
	.controller('registerController', registerController)
	.controller('squadController', squadController)

	.config( function( $routeProvider ) {
		$routeProvider
			.when('/', {
				templateUrl: '../templates/landing.html'
			})
			.when('/game', {
				templateUrl: '../templates/news.html',
				css: '../css/game.css',
				secure: true
			})
			.when('/game/table', {
				templateUrl: '../templates/table.html',
				css: '../css/game.css',
				secure: true
			})
			.when('/game/squad', {
				templateUrl: '../templates/squad.html',
				controller: 'squadController',
				css: '../css/game.css',
				secure: true
			})
			.when('/game/lineup', {
				templateUrl: '../templates/lineup.html',
				css: '../css/game.css',
				secure: true
			})
			.when('/game/market', {
				templateUrl: '../templates/market.html',
				css: '../css/game.css',
				secure: true
			})
			.when('/game/sales', {
				templateUrl: '../templates/sales.html',
				css: '../css/game.css',
				secure: true
			})
			.when('/game/logout', {
				template: '<h1>Cerrando sesión...</h1>',
				controller: 'logoutController'
			})
			.otherwise('/')
	})

	.config( function( $httpProvider ) {
		$httpProvider
			.interceptors.push('authInterceptor')
	})

	.run( function( $rootScope, $location, storageService, authService ){
			if ( authService.isLoggedIn() ) {
				const token = storageService.getToken()
				authService.setCredentials(token)
			}

			$rootScope.$on( "$routeChangeStart", function(event, next, current) {
				if (next && next.secure) {
					console.log("This route is secured!!")
					if ( !authService.isLoggedIn() ) {
						$location.path("/login");
						console.log("You can't access!!")
					}
				}
			})
	})
