//http request
const request = require("request")
const geocode = (address, callback) => {
   const json=true
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + (address) + ".json?access_token=pk.eyJ1Ijoic2hhcmFmYWJhY2VyeSIsImEiOiJjazh0NzcxeTIwNXp3M25uZG9hZW9sMGxsIn0.Pba1wM4Z4c38Hgx5qtbpqg&limit=1" //?
    request({
        url,
        json
    }, (error, {body}) => {
        if (error) {
            callback("Unable to connect to location ", undefined)

        } else if (body.features.length === 0) {
            callback("Unable to connect to location ", undefined)
        } else {

        const    latitude= body.features[0].center[1]
         const   longitude= body.features[0].center[0]
          const  location=body.features[0].place_name

            callback(undefined, {
              latitude,
              longitude,
              location

            })


        }
    })

}


module.exports = geocode