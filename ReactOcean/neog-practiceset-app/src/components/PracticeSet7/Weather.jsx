import React, { useEffect, useState } from 'react'
import {fakeWeatherFetch} from '../PracticeSet7/api/fakeWeatherFetch'
const Weather = () => {
    const [weatherData, setWeatherData] = useState({})
    const [isCelcius, setIsCelcius] = useState(true)
    useEffect(()=>{
        fakeWeatherFetch('https://example.com/api/weather')
        .then((res) =>(
            setWeatherData(res.data)
        ))
        .catch((err)=>{
            console.log(err.message)
        })
    },[])

    const toFahrenheit = (celcius) => (celcius * 9/5) + 32;
    const handleWeather = () =>{
        setIsCelcius((prev) => !prev)
    }
  return (
    <React.Fragment>
        <h2>Weather Converter</h2>
        <h5>Temperature : {isCelcius? `${weatherData.temperature}°C` : `${toFahrenheit(weatherData.temperature)}°F`}</h5>
        <h5>Humidity : {weatherData.humidity}</h5>
        <h5>Wind Speed : {weatherData.windSpeed}</h5>
        <button onClick={handleWeather}>Switch to {isCelcius ? 'Fahrenheit' : 'Celcius'}</button>
    </React.Fragment>
  )
}

export default Weather