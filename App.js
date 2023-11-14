import React, {useState} from 'react';
// Import data and WeatherCard here
import WeatherCard from './components/WeatherCard';
import Location from "./components/Location"
import cities from "./data.js"


function App() {
    const [location, setLocation] = useState("London");



    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <div className = "app">
                {/* Render components here */}
                <div><Location data={cities} location={location} setLocation= {setLocation}/></div>
                
                {cities.map(city => <WeatherCard city={city} />)}


            </div>
            
        </>
    )
}

export default App;