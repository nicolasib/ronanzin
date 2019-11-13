const express = require('express')

const routes = express.Router()

const timeController = require('./Controllers/TimeController')

routes.post('/register', timeController.store)
routes.post('/times', timeController.index)

module.exports = routes

