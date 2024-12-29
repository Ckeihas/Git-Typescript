import React, { useEffect, useState } from 'react'


interface ICountries {
    name: {
        common: string
    },
    capital: string[],
    flags: {
        png: string,
        svg: string,
    }
}
const FetchTheCountries = () => {

    const [countries, setCountries] = useState<ICountries[]>();
    const [selectedCountry, setSelectedCountry] = useState<ICountries>()

    const handleFetch = async () => {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags');
            const responseJson = await response.json();

            const getFirstTwenty = responseJson.slice(0, 20)
            setCountries(getFirstTwenty)

        } catch (error) {
            
        }
    }

    useEffect(() => {
        handleFetch();
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if(!countries) return
        const findSelectedCountry = countries.find(country => country.name.common === e.target.value)
        console.log(findSelectedCountry)
        setSelectedCountry(findSelectedCountry)
    }

    if(!countries) return <div></div>
  return (
    <div style={{marginTop: 100}}>
        <select 
        value="countries" 
        onChange={handleChange}
        >
            {
                countries.map((country, index) => (
                    <option
                    key={`${country.name.common}-${index}`}
                    value={country.name.common}
                    >
                        {country.name.common}
                    </option>
                ))
            }
        </select>

        <div style={{marginTop: 100}}>
            <img src={selectedCountry?.flags.png}/>
            <h1>{selectedCountry?.capital[0]}</h1>
        </div>
    </div>
  )
}

export default FetchTheCountries