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

