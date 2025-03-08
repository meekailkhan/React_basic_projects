import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './Wheather.css'

// import dotenv from 'dotenv'
// dotenv.config()

function Wheather() {
    const [city, setCity] = useState('Delhi');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('')
    const currentDate = new Date()
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
    const month = months[currentDate.getMonth()];
    const day = currentDate.getDay();
    const year = currentDate.getFullYear();
    const formatedDate = `${month} ${day + 2},${year}`


    // const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    const fetchWeather = async () => {
        if (!city) return
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=da57c93531e25544f44f6f6aced9cc85`)
            setWeather(response.data);
            setError('')
            console.log(response.data)
        } catch (err) {
            setWeather(null)
            setError('city not found')
        }
    }
    useEffect(() => {
        fetchWeather()
    }, [])

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            fetchWeather()
        }
    }
    function handleClick() {
        fetchWeather()
    }
    function handleCity(e) {
        setCity(e.target.value)
    }

    return (
        <div className='main-container'>
            <div className="weather-container">
                <p>{error && error}</p>
                {weather && (
                    <>
                        <h3 className='weather-date'>{formatedDate}</h3>
                        <h2 className='weather-city'>{weather.name}</h2>
                        <h2 className='weather-temp'>Temperature: {(weather.main.temp - 273.15).toFixed(2)} °C</h2>
                        <h3 className='weather-desc'>{weather.main.humidity}%</h3>
                        <p>Wind Speed: {weather.wind.speed} m/s</p>
                    </>
                )
                }
                <div className="input-container">
                    <input type="text" name="" id="" value={city} onChange={handleCity} onKeyPress={handleKeyPress} placeholder='Enter City Here' />
                    <button onClick={handleClick}>Get</button>
                </div>
            </div>
        </div>
    )
}

export default Wheather
