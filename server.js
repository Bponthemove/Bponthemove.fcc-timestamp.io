'use strict'

const express = require('express')
const app = express()
const path = require('path')
const routes = require(path.join(process.cwd() + '/routes/routes.js'))
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', path.join(process.cwd() + '/views'))

routes(app)

app.use(express.static(path.join(process.cwd() + '/public')))

app.use((req, res) => {
    res.status(404).send('Not Found, please try again')
    console.log(res.status)
})

app.listen(port, () => {
    console.log('yep!!!')
})