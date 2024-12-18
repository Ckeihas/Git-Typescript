import React, { useEffect, useState } from 'react'

type flagType = {
    png: string,
    svg: string,
    alt: string
}
type nameType = {
    common: string
}
interface ICountryData {
    name: nameType,
    capital: string,
    flags: flagType
}

interface ICountryState {
    name: string,
    capital: string,
    flags: string
}
const FetcingCountries = () => {

    const [countryData, setCountryData] = useState<ICountryState[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<ICountryState>()

    //console.log(countryData)
    const fetchCountries = async () => {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags')
        const countriesData = await response.json();

        const mapCountries = countriesData.slice(0, 10).map((country: ICountryData) => {
            return{
                name: country.name.common,
                capital: country.capital,
                flags: country.flags.png
            }
        })

        setCountryData((prev) => [...prev, ...mapCountries])
    }

    useEffect(() => {
        fetchCountries()
    }, [])

    const handleSelectorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const findSelectedCountry = countryData.filter(country => country.name === e.target.value).slice(0, 1)
        console.log(findSelectedCountry)
        setSelectedCountry(findSelectedCountry[0])
    }

    if(!countryData) return <div></div>
  return (
    <div>
        <select 
        name='countrySelector'
        onChange={handleSelectorChange}
        >
            {
                countryData.map((country, index) => (
                    <option value={country.name} key={`${country.capital}-${index}`}>
                        {country.name}
                    </option>
                ))
            }
        </select>
        <div style={{marginTop: 100}}>
            <img src={selectedCountry?.flags}/>
            <h1>{selectedCountry?.name}</h1>
        </div>
    </div>
  )
}

export default FetcingCountries