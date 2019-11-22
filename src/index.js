const express = require('express')

const bodyparser = require('body-parser')

const cors = require('cors')

const routes = require('./routes')

const app = express()

app.use(cors())
app.use(bodyparser.json())
app.use(express.json())
app.use(routes)

app.listen(8000)

console.log('Listening to port 8000')