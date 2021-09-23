'use strict'
const path = require('path')
const chrono = require('chrono-node')

module.exports = app => {

    //rendering main
    app.get('/', (req, res) => {
        res.sendFile('index.html', {root: path.join(process.cwd() + '/views/')})
    })

    //user input route
    app.get("/api/*", function(request, response) {
        //response.writeHead(200, { "Content-Type": "application/json" });
        const input = request.url.slice(1)
        let date
        const obj = {
            natural: null,
            unix: null
        }

        if  (!isNaN(input)) {
            date = new Date(parseInt(input,10)*1000)
        }
        else{
            date = chrono.parseDate(input.replace(new RegExp("%20",'g'),' '));
        }
        
        if (date!= null) {
            obj.unix = date.getTime()/1000
            obj.natural = date.toDateString()
        }
        
        response.end(JSON.stringify(obj))
    }) 
    // app.get('/api/:dateString?' || '/:datestring?', (req, res) => {
    //     const { dateString } = req.params
    //     const timestamp = parseInt(dateString * 1, 10)
    //     const date = new Date(timestamp || dateString || Date.now())
    
    //     let result
    //     if (isNaN(+date)) {
    //         result = { error: 'Invalid Date' }
    //     } else {
    //         result = {
    //             unix: date.getTime(),
    //             utc: date.toUTCString(),
    //         }
    //     }
    //     res.json(result)
    // })

    // app.get('/api/:day/:month/:year?', (res, req) => {
        
    // })
}