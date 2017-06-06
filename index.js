require('dotenv').load()

global.__base = __dirname + '/server/'

const app = require('./server/app')

const PORT = process.env.PORT || 3000

app.listen(PORT)

console.log(`Listening on port ${PORT}...`)
