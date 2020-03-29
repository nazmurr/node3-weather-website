const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/8ec0f02fd12fd411f5fa8d58d845d0f3/' + latitude + ',' + longitude + '?units=si'
    
    request({ url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        }
        else if(body.error){
            callback('Unable to find location', undefined)
        }
        else{
            callback(undefined, body.daily.data[0].summary + " It is currently " + body.currently.temperature + " degrees out. There is a " + body.currently.precipProbability + "% chance of rain.")
        }
    })

}

module.exports = forecast