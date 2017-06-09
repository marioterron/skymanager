const rp = require('request-promise')
const cheerio = require('cheerio')
const _ = require('lodash')
const fs = require('fs')

const URL = 'http://www.laligafantasymarca.com/equipos/sevilla'
const BASE_IMAGE = 'http://www.laligafantasymarca.com'

const DEFAULT_IMG = 'http://statics.laliga.es/apps/fantasy/fantasy_sin_imagen_320.png'

rp(URL)
	.then(body => {
		const $ = cheerio.load(body);

		let teamName = $('#club-logo h1').text()
		let teamLogo = BASE_IMAGE + $('#club-logo img').attr('src')
		let players = []

		const $players = $('#players-list table tbody tr')
		$players.each((index, player) => {

			let photo
			let fitness = []

			// Name & Position
			const $playerInfoBlock = $(player).find('td[data-title="Jugadores"]')

			let position = $playerInfoBlock.find('.position').text()
			let name = $playerInfoBlock.find('.info h3.name').text()

			position = position.replace('\n', '').trim()

			/* Points  */
			let totalPoints = $(player).find('td[data-title="Puntos"]').text()
			let avgPoints = $(player).find('td:nth-child(3)').text()
			let pointsAsLocal = $(player).find('td:nth-child(4)').text()
			let pointsAsVisitor = $(player).find('td[data-title="Visitante"]').text()

			avgPoints = avgPoints.replace(',', '.')

			// Market value
			let marketValue = $(player).find('td[data-title="Valor de mercado"]').text()
			marketValue = marketValue.replace(/\./g, '').replace(' € ', '')


			// Photo & fitness
			$('#players-top-streak .item').each((index, playerBox) => {
				if ($(playerBox).find('h3.name').text() === name) {
					photo = $(playerBox).find('.ico img').attr('src')

					const $fitness = $(playerBox).find(".graphic.streak-bar ul li")
					$fitness.each((index, item) => {
						fitness.push($(item).text().trim())
					})

					fitness = fitness.splice(0, 5)
					fitness = fitness.map(value => +value)
				}
			})

			players.push({
				player: {
					name,
					photo
				},
				position,
				totalPoints,
				avgPoints,
				pointsAsLocal,
				pointsAsVisitor,
				marketValue,
				fitness,
				team: {
					name: teamName,
					logo: teamLogo
				}
			});
		})

		players = _.uniqBy(players, 'player.name');
		const jsonPlayers = JSON.stringify(players, null, 2)
		fs.writeFile('sevilla.json', jsonPlayers, () =>
			console.log('file written properly..')
		)
	})
