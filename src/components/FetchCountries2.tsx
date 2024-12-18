import React, { useEffect, useState } from 'react'


interface ICountryState{
    name: string,
    capital: string,
    flag: string
}


interface ICountries {
    name: {
        common: string
    },
    capital: string,
    flags: {
        png: string,
        svg: string,
        alt: string
    }
}
const FetchCountries2 = () => {

    const [countries, setCountries] = useState<ICountries[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<ICountries>()

    console.log(countries)
    const fetchCountries = async () => {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags')
            const countriesJson = await response.json()

            const takeFirstTen = countriesJson.slice(0, 10)
            setCountries(takeFirstTen)
        } catch (error) {
            console.log("Error: ", error)
        }
    }

    useEffect(() => {
        fetchCountries()
    }, [])

    const handleSelectCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const filterCountry = countries.filter((name) => e.target.value === name.name.common)
        console.log(filterCountry)
        setSelectedCountry(filterCountry[0])
    }
  return (
    <div style={{marginTop: 100}}>
        <select 
        name='countrySelector'
        onChange={handleSelectCountry}
        >
            {countries.map((data, index) => (
                <option 
                key={`${data.name}-${index}`} 
                value={data.name.common} 
                // onClick={() => handleSelectCountry(data.name.common)}
                >
                    {data.name.common}
                </option>
            ))}
        </select>

        <div style={{marginTop: 100}}>
            <img src={selectedCountry?.flags.png} alt='flag'/>
            <h1>{selectedCountry?.capital}</h1>
        </div>
    </div>
  )
}

export default FetchCountries2