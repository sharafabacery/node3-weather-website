const request = require("request")

const forecast = (x, y, callback) => {
   const json=true
   /**,
         */
        //https://api.darksky.net/forecast/87b6dcab224b1419369560c2b522d143/31.23944,30.05611
    const url = "https://api.darksky.net/forecast/87b6dcab224b1419369560c2b522d143/" + (x) + ',' + (y)+"?units=si"
    request({
        url,
        json
    }, (error, {body}) => {
        if (error) {
            callback("Unable to connect to location ", undefined)

        } else if (body.error) {
            callback("Unable to connect to location ", undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out.'+'temperatureHigh : '+body.daily.data[0].temperatureHigh+' ,And temperatureLow : '+body.daily.data[0].temperatureLow+ ' There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })

}


module.exports = forecast