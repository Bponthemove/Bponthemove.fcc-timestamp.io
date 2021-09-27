'use strict'
const path = require('path')

module.exports = app => {

    app.get("/api/", function(req, res) {
        const resDate = new Date();
        res.json({ unix: resDate.valueOf(), utc: resDate.toUTCString() });
    });
      
    app.get("/api/:date_string", (req, res) => {
        let dateString = req.params.date_string
      
        if (/\d{5,}/.test(dateString)) {
            let dateInt = parseInt(dateString)
            res.json({ unix: dateInt, utc: new Date(dateInt).toUTCString() })
        } else {
            let dateObject = new Date(dateString)
      
            if (dateObject.toString() === "Invalid Date") {
                res.json({ error: "Invalid Date" })
            } else {
                res.json({ unix: dateObject.valueOf(), utc: dateObject.toUTCString() })
            }
        }
    })
}
