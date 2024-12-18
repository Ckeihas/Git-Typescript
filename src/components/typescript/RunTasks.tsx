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
    
} from './Training'
import { 
    calculateFinalPrice,
    filterByProperty,
    reverseArray,
    getKeys,
    wrapAValue,
    findMax
} from './Training2'


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
const array2 = [1, 2, 3, 4, 5, 6, 7, 8]
const RunTasks = () => {

    useEffect(() => {
        // console.log(sumRows([[324, 232], [221, 2050], [9.8, 180], [12.7, 3.5], [33.88, 1.99],]))
        // console.log(validRange([[324, 232], [221, 2050], [9.8, 180], [12.7, 3.5], [33.88, 1.99],]))
        // console.log(flattenArray([[324, 232], [221, 2050], [9.8, 180], [12.7, 3.5], [33.88, 1.99],]))
        // console.log(filterTuples([['jashk', 232], ['221', 2050], ['kljljad', 180], ['askld', 3.5], ['llll', 1.99]], 20))
        // console.log(destructProducts([['Omena', 232], ['päärynä', 2050], ['jotain', 180], ['TV', 3.5], ['Pleikka', 1.99]]))
        // console.log(calculateFinalPrice(product, 24))
        // console.log(filterByProperty(users, "age", 30));
        // console.log(reverseArray(array2))
        // console.log(getKeys(obj))
        // console.log(wrapAValue(283923))
        console.log(findMax(array1, (a, b) => a.length - b.length))
    }, [])
  return (
    <div>RunTasks</div>
  )
}

export default RunTasks