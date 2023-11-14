import sunny from "../assets/Sunny.svg"
import cloudy from "../assets/Cloudy.svg"
import partlyCloudy from "../assets/PartlyCloudy.svg"
import rainy from "../assets/Rainy.svg"
import snowy from "../assets/Snowy.svg"

function icon(forecast) {
    const forecastImgs = {
        "Sunny": sunny,
        "Cloudy": cloudy,
        "Partly cloudy": partlyCloudy,
        "Rainy": rainy,
        "Snowy": snowy
      }
    return forecastImgs[forecast]
}

export default icon;