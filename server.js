'use strict'

const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000
const routes = require(path.join(process.cwd() + '/routes/routes.js'))

app.use(cors())

app.use(express.static(path.join(process.cwd() + '/views')))

routes(app)

app.listen(port, () => console.log('yep!!!'))