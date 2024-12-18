import React, { useEffect, useState } from 'react'

type NameType = {
    common: string
}

type FlagType = {
    png: string,
    svg: string,
    alt: string
}

interface ICountryData {
    name: NameType,
    capital: string,
    flags: FlagType
}

interface ICountryState {
    name: string,
    capital: string,
    flags: string
}

const FilterCountries = () => {

    const [countries, setCountries] = useState<ICountryState[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<ICountryState>()

    const fetchAllCountries = async () => {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags');
        const countriesJson = await response.json();

        const countriesArray = countriesJson.slice(0, 10).map((country: ICountryData) => {
            return{
                name: country.name.common,
                capital: country.capital,
                flags: country.flags.png
            }
        })

        setCountries((prev) => [...prev, ...countriesArray])
    }

    useEffect(() => {
        fetchAllCountries()
    }, [])

    const handleSelectorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const filterCountries = countries.filter(name => e.target.value === name.name).slice(0, 1)
        setSelectedCountry(filterCountries[0])
    }
    return(
        <div>
            <select 
            name='countrySelector'
            onChange={handleSelectorChange}
            >
                {
                    countries.map((country, index) => (
                        <option value={country.name} key={`${country.name}-${index}`}>
                            {country.name}
                        </option>
                    ))
                }
            </select>

            <div style={{marginTop: 100}}>
                <img src={selectedCountry?.flags} alt="flag" />
                <h1>{selectedCountry?.capital}</h1>
            </div>
        </div>
    )
}

export default FilterCountries