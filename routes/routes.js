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
            res.send({ error: "Invalid Date" })
          } else {
            res.send({ unix: dateObject.valueOf(), utc: dateObject.toUTCString() })
          }
        }
    })

    
    //rendering main
    // app.get("/api/:date?", (req, res) => {
    //     const givenDate = req.params.date
    //     let date
      
    //     // check if no date provided
    //     if (!givenDate) {
    //       date = new Date()
    //     } else {
    //       // check if unix time:
    //       //    number string multiplied by 1 gives this number, data string gives NaN
    //       const checkUnix = givenDate * 1
    //       date = isNaN(checkUnix) ? new Date(givenDate) : new Date(checkUnix)
    //     }
      
    //     //check if valid format
    //     if (date == "Invalid Date") {
    //       res.json({ error: "Invalid Date" })
    //     } else {
    //       const unix = date.getTime()
    //       console.log(unix);
    //       const utc = date.toUTCString()
    //       console.log(utc);
    //       res.json({ unix, utc })
    //     }
    // })
}
