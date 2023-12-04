const weatherContainer = document.getElementById("weather-container")
const city = document.getElementById("city").value

fetch(`/weather/${city}`).then((response) => {
    return response.json()
}).then((city) => {

   
        let card = document.createElement("div")

        let currentCity = document.createElement("h1")
        let tempTag = document.createElement("p")
        let conditionTag = document.createElement("p")
        let precipitationTag = document.createElement("p")

        currentCity.innerText = city.city
        tempTag.innerText = city.temp
        conditionTag.innerText = city.condition
        precipitationTag.innerText = city.precipitation

        // card.appendChild(currentCity)
        // card.appendChild(tempTag)
        // card.appendChild(conditionTag)
        // card.appendChild(precipitationTag)

        card.classList.add("card")

        weatherContainer.appendChild(card)
    })
