const express = require('express')

require('dotenv').load()

const app = express()
const PORT = process.env.PORT

app.use(express.static('public'))

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`)