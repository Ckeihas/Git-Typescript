// type name = {name: string}
// type age = {age: number}

// type UnionTest = name | age | (name & age)

// let union: UnionTest;

// union = {name: 'Christian'}
// union = {age: 27}
// union = {name: 'Christian', age: 27}

// if('age' in union){
//     union.age
// }

//literals
let direction: 'south' | 'west' | 'east' | 'north';
direction = 'east' //Correct
//direction = 'hello' wrong

//Syötä array numeroita ja järjestä ne isoimmasta pienimpään tai toisin päin
export function sortNumbers(arr: number[], order: 'asc' | 'desc'): number[] {
    //if(order !== 'asc' || 'desc') return []

    if(order === 'asc'){
        return arr.sort((a, b) => a - b)
    } else {
        return arr.sort((a, b) => b - a)
    }
}

export function swapTuple(number: [number, number]): [number, number]{
    return [number[1], number[0]]
}

export function mixedTypes(arr: (number | string)[]): (number | string)[]{
    return arr.filter((item): item is string => typeof item === 'string' )
}

export function destructProducts(arr: [string, number][]): string[] | number[]{
    return arr.map(([pName, pPrice]) => pName)
}

export function sumRows(matrix: number[][]): number[] {
    return matrix.map(([num1, num2]) => num1 + num2)
}

export function validRange(arr: [number, number][]): boolean[]{
    return arr.map(([num1, num2]) => num1 < num2)
}

export function flattenArray(numArray: number[][]): number[]{
    return numArray.flat()
}

export function filterTuples(arr: [string, number][], treshold: number): [string, number][]{
    return arr.filter(([_, value]) => value < treshold)
}



function mul(x:number, y:number): number{
    return x * y
}

function div(x:number, y:number): number{
    return x / y
}

// export function applyFuncs(funcs: ((x:number, y:number) => number)[], values: [number, number][]): number[]{
//     const result = [] as number[];

//     for (let index = 0; index < funcs.length; index++) {
//         let args = values[index]
//         const results = funcs[index](args[0], args[1])

//         result.push(results)
//     }

//     return result
// }

// applyFuncs([mul, div], [[2, 9], [17, 5]])

// mixedTypes([1, 'moi', 2, 4, 5, 'tere'])


export function validRange2(tupleValue: [number, number]): boolean{
    return tupleValue[0] > tupleValue[1]
}

export function flatValues(value: number[][]): number[]{
    return value.flat()
}

export function filterTuples2(arr: [string, number][], treshold: number): [string, number][]{
    return arr.filter(([_, value]) => value < treshold)
}

export function returnTuples(arr: number[], ): [number, number]{
    let max = arr[0];
    
    let index = 0;
    arr.forEach((num, i) => {
        console.log("Max: ", max)
        if(num > max){
            max = num
            index = i;
        }
    })

    return [max, index]
}


export function returnTuples2(arr: number[], ): [number, number]{
    let maxValue = arr[0];
    let index = 0;
    arr.forEach((numero, i) => {

        if(numero > maxValue){
            maxValue = numero;
            index = i;
        }
    })

    return [maxValue, index]
}

export function findMax3(arr: number[]): [number, number]{
    
    let max = arr[0];
    let index = 0;
    arr.forEach((item, i) => {
        if(item > max){
            max = item
        }
        index = i
    });

    return [max, index]
}

export function groupTuples(arr: string[]): [string[], string[]]{
    let arrayStrings: [higher: string[], lower: string[]] = [[],[]]
    arr.forEach((item, index) => {
        if(item.length > 5){
            arrayStrings[0].push(item)
        } else{
            arrayStrings[1].push(item)
        }
    })

    return arrayStrings
}

// Task: Write a generic function filterByProperty<T> 
// that takes an array of objects of type T, a property key of type keyof T, and a value. 
// The function should return all objects where the property matches the specified value.

export function filterByProperty<T, V>(obj: T[], key: keyof T, value: V): T[]{
    return obj.filter((item) => item[key] === value)
}


  