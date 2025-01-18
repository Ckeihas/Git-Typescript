import React, { useEffect } from 'react'
import { 
    sortNumbers, 
    swapTuple, 
    mixedTypes, 
    destructProducts, 
    sumRows,
    validRange,
    flattenArray,
    filterTuples,
    returnTuples,
    groupTuples
} from './Training'
import { 
    calculateFinalPrice,
    filterByProperty,
    reverseArray,
    getKeys,
    wrapAValue,
    findMax,
    firstOfAnyArray,
    
} from './Training2'

import { 
    filteryPropertyToObj,
    JustReduce,
    TransformArray,
    GroupItems
} from './Training3';

import FormValidation from '../FormValidation';
import FixBugs from '../react/FixBugs';
import FetchTheCountries from '../react/FetchTheCountries';
import WeatherPage from '../react/WeatherPage';
import FetchingCountries from '../react/FetchingCountries';


const users = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 30 },
];

const product = {
    id: 1,
    name: 'pyörä',
    price: 1879.99,
    discount: {
        type: 'discount',
        amount: 50
    }
}

const obj = {id: 1, username: 'kekkuli', email: 'klkasjl@jsdk.com', password: 'sdljdk'}

const array1 = ["moi", 'ljkkds', 'djlsdkj', 'dkjsdljk']
const array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8]

const items = [
    {id: '134', category: 'fruit', name: 'apple'},
    {id: '293489', category: 'vegetable', name: 'banaani'},
    {id: '31278', category: 'vegetable', name: 'mango'},
    {id: '4178', category: 'fruit', name: 'porkkana'},
    {id: '512', category: 'vegetable', name: 'vesimelooni'},
    {id: '62378', category: 'fruit', name: 'kiivi'},
    {id: '71', category: 'vegetable', name: 'jotain'},
]
const RunTasks = () => {

    useEffect(() => {
        // console.log(sumRows([[324, 232], [221, 2050], [9.8, 180], [12.7, 3.5], [33.88, 1.99],]))
        // console.log(validRange([[324, 232], [221, 2050], [9.8, 180], [12.7, 3.5], [33.88, 1.99],]))
        // console.log(flattenArray([[324, 232], [221, 2050], [9.8, 180], [12.7, 3.5], [33.88, 1.99],]))
        // console.log(filterTuples([['jashk', 232], ['221', 2050], ['kljljad', 180], ['askld', 3.5], ['llll', 1.99]], 20))
        // console.log(destructProducts([['Omena', 232], ['päärynä', 2050], ['jotain', 180], ['TV', 3.5], ['Pleikka', 1.99]]))
        // console.log(calculateFinalPrice(product, 24))
        // console.log(filteryPropertyToObj(users, 'age', 30));
        // console.log(reverseArray(array2))
        // console.log(getKeys(obj))
        // console.log(wrapAValue(283923))
        // console.log(findMax(array1, (a, b) => a.length - b.length))
        // console.log(firstOfAnyArray(array2))
        // console.log(returnTuples(array2))
        // console.log(groupTuples(array1))
        console.log("Just reduce: ", JustReduce(items))
        console.log("Group items with reduce and record: ", GroupItems(items, 'category'))
        console.log("Using Map: ", TransformArray(items))
    }, [])
  return (
    <div>
        <FixBugs />
    </div>
  )
}

export default RunTasks