import React, { useEffect } from 'react'
import './Weather.css'

//2abd98368be34487a94135006242912

interface Testi<T> {
    concat(...items: Array<T[] | []>): T[];
    reduce<U>(
        callback: (state: U, element: T, index:number, array: T[]) => U,
        firstState?: U
    ): U;
}

const WeatherPage = () => {

    const today = new Date();
    const year = today.getFullYear();
    const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(today); // Months are 0-based
    const day = String(today.getDate()).padStart(2, '0');

    const fetchWeatherApi = async () => {
        await fetch('http://localhost:3000/weather').then((response) => {
            console.log(response)
        }).catch((err) => {
            console.log('Error: ', err)
        })
    }

    useEffect(() => {
        fetchWeatherApi();
    }, [])
  return (
    <div className='container'>
        <div className='dates'>
            <h1>{day}</h1>
            <h1>{month}</h1>
            <h1>{year}</h1>
        </div>
        <div className='degree'>
            +5
        </div>
    </div>
  )
}

export default WeatherPage