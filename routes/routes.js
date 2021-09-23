'use strict'
const path = require('path')

module.exports = app => {

    //rendering main
    app.get('/', (req, res) => {
        res.sendFile('index.html', {root: path.join(process.cwd() + '/views/')})
    })

    //user input route 
    app.get('/api/:dateString?', (req, res) => {
        const { dateString } = req.params
        const timestamp = parseInt(dateString * 1, 10)
        const date = new Date(timestamp || dateString || Date.now())
    
        let result
        if (isNaN(+date)) {
            result = { error: 'Invalid Date' }
        } else {
            result = {
                unix: date.getTime(),
                utc: date.toUTCString(),
            }
        }
        res.json(result)
    })
}