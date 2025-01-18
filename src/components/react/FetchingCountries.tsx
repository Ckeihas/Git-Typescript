import React, { useEffect, useState } from 'react'


interface ICountries {
    name: {
        common: string
    },
    capital: string,
    flags: {
        png: string;
        svg: string;
        alt: string;
    }
}
const FetchingCountries = () => {

    const [ countries, setCountries ] = useState<ICountries[]>();
    const [selectedCountry, setSelectedCountry] = useState<ICountries>();

    const fetchCountries = async () => {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags');
            const responseJson = await response.json();

            const slicedResponse = responseJson.slice(0, 10)
            setCountries(slicedResponse)
            
        } catch (error) {
            
        }
    }

    useEffect(() => {
        fetchCountries();
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value
        const filterCountry = countries?.find((capital) => selectedValue === capital.capital[0])
       
        if(filterCountry){
            console.log(filterCountry)
            setSelectedCountry(filterCountry)
        }
    }
    if(!countries) return <div></div>

  return (
    <div style={{marginTop: 100}}>
        <select 
        onChange={handleChange}
        >
            {
                countries.map((country, index) => (
                    <option 
                    key={country.capital[0]}
                    value={country.capital[0]}
                    >
                        {country.name.common}
                    </option>
                ))
            }
        </select>
        <div>
            <img src={selectedCountry?.flags.png}/>
            <h1>{selectedCountry?.capital[0]}</h1>
        </div>
    </div>
  )
}

export default FetchingCountries