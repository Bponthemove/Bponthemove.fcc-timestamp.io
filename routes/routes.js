'use strict'
const path = require('path')
const output = require(path.join(process.cwd() + '/scripts/script.js'))

module.exports = app => {

    //rendering main
    app.get('/', (req, res) => {
        res.render('main.ejs')
    })

    //user input route for single string
    app.get('/:query', (req, res) => {
        res.send(output(req.params.query))
    })

    //user input route for date string
    app.get('/:q1/:q2/:q3', (req, res) => {
        res.send(output(`${req.params.q1} ${req.params.q2} ${req.params.q3}`))
    })
    
}