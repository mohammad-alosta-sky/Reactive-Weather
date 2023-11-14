import React from "react";
import icon from "./Icon";



function Location({data, location, setLocation}) {
    const cityData = data.find(({city}) => city === location);

    return (
        <div className = "card">
                <h3 className="subtitle">Your location's Weather</h3>
            <div className = "img-container">
                <img className="card-img-top" src = {icon(cityData.forecast)} alt="Card image cap" id = "icon"/>
            </div>
            <div class="card-body">
                <h3 className="card-title">The weather in {cityData.city} is</h3>
                <h5 className="card-text">{cityData.temperature}°C</h5>
                <h5 className="card-text">It is {cityData.forecast} out today</h5>
            </div>
        </div>
      );
}

export default Location;