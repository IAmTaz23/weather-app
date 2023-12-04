const express = require('express')
const path = require('path')
const app  = express()

app.use(express.static(path.join(__dirname, "/public")))

const weather = [
    {
    city: "Louisville",
    temp: "63",
    condition: "Sunny",
    precipitation: "0%"
    },
    {
    city: "Chicago",
    temp: "43",
    condition: "Cloudy",
    precipitation: "20%"
    },
    {
    city: "New York",
    temp: "32",
    condition: "Snowy",
    precipitation: "100%"
    },
    {
    city: "Miami",
    temp: "79",
    condition: "Sunny",
    precipitation: "0%"
    }
 ]
 app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,'/public/weatherapp.html'))
 })

   app.get("/weather", (req,res) => {
      res.send(weather)
   })

 app.get("/weather/:city", (req, res) => {
    console.log(req.params.city)
    const cityName = req.params.city
    
    for(let i = 0; i < weather.length; i++) {
              if(weather[i].city === cityName) {
                  res.send(weather[i])
      }
   }
})


app.listen(9033)
console.log("Express is running on localhost:9033")