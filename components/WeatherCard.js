import React from "react";
import icon from "./Icon"


function WeatherCard({city}) {

  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src = {icon(city.forecast)} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">{city.city}</h3>
            <h5 className="card-text">{city.temperature}°C</h5>
            <h5 className="card-text">{city.forecast}</h5>
        </div>
    </div>
  );
};

// Export the WeatherCard
module.exports = WeatherCard;