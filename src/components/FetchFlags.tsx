import React, { useEffect, useState } from 'react'


interface ICatFact{
    fact: string,
    length: number
}

const FetchFlags = () => {

    const [catFact, setCatFact] = useState<ICatFact[]>([]);
    const fetchFlagsApi = async () => {
        const url = '/api/activity'

        try {
            const response = await fetch('https://catfact.ninja/fact')
            if(!response.ok){
                throw new Error(`Response error: ${response.status}`)
            }

            const data = await response.json()
            setCatFact((prev) => [...prev, data])
        } catch (error) {
            console.log("error: ", error)
        }
    }

    useEffect(() => {
        fetchFlagsApi()
    }, [])

    if(!catFact) return <div></div>
  return (
    <div>
        {
            catFact.map((fact, index) => (
                <h2 key={index}>{fact.fact}</h2>
            ))
        }
    </div>
  )
}

export default FetchFlags