// 2. Implement a Generic Function
// Task: Write a generic function filterByProperty<T> that takes an 
// array of objects of type T, a property key of type keyof T, and a value. 
// The function should return all objects where the property matches the specified value.

type UserType = {
    id: number;
    name: string;
    age: number;
}
const users = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 30 },
];

interface Iitems{
    id: string;
    category: string;
    name: string;
}

const items = [
    {id: '1', category: 'fruit', name: 'apple'},
    {id: '2', category: 'vegetable', name: 'banaani'},
    {id: '3', category: 'vegetable', name: 'mango'},
    {id: '4', category: 'fruit', name: 'porkkana'},
    {id: '5', category: 'vegetable', name: 'vesimelooni'},
    {id: '6', category: 'fruit', name: 'kiivi'},
    {id: '7', category: 'vegetable', name: 'jotain'},
]

export const filteryPropertyToObj = <T extends Object, V>(objArray: T[], key: keyof T, value: V): T => {
    const filterObj = objArray.reduce((prev, current) => {
        if (current[key] === value) {
            return { ...current };
        }
        return prev;
    }, {} as T);
    return filterObj
}


export function JustReduce(arr: Iitems[]){
    const arrayReduce = arr.reduce((prev, current) => {
        return {...prev, [current.id]: {items: current}}
    }, {} as {[key: string]: {items: Iitems}})

    return arrayReduce
}

export function GroupItems<T extends Record<string, any>>(arr: T[], key: keyof T): Record<string, T[]>{
    return arr.reduce((prev, current) => {
        const categoryKey = current[key]

        prev[categoryKey] = prev[categoryKey] || [];
        prev[categoryKey].push(current)

        return prev;
    }, {} as Record<string, T[]>)
}

export function TransformArray(arr: Iitems[]): Map<string, Iitems>{
    const mapArrayItems: [string, Iitems][] = arr.map((item) => [item.id, item])
    const mapObj = new Map(mapArrayItems)
    return mapObj
}

export const jokufunctio = () => {
    console.log('jeejee')
}