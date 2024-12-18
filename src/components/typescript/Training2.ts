interface Product {
    id: number,
    name: string,
    price: number,
    tags?: string[],
    discount?: {
        type: string,
        amount: number
    },
    variants?: [{
        variantId: number,
        color: string
    }]
}

export function calculateFinalPrice(product: Product, tax: number): number {
    const calculateTax = (tax / 100) * product.price
    const priceWithTax = calculateTax + product.price

    if(product.discount){
        const theDiscount = (product.discount.amount / 100) * priceWithTax
        const pricewithDiscount = priceWithTax - theDiscount

        return pricewithDiscount
    }

    return priceWithTax
}


interface IUsers {
    id: number;
    name: string;
    age: number;
}

export function filterByProperty<T, V>(users: T[], key: keyof T, value: V): T[]{
    return users.filter(item => item[key] === value);
}

//Generics

export function reverseArray<T>(array: T[]): T[]{
    return array.reverse()
}

//'T extends object' ensures that the prop HAS to be an object otherwise typescript throws compile error
// The keyof operator extracts the keys of a type as a union of string literals.
// For example, if T is { id: number; name: string }, then keyof T is "id" | "name".
// Thus, (keyof T)[] is an array of the specific keys from T.

export function getKeys<T extends object>(obj: T): (keyof T)[] {
    return Object.keys(obj) as (keyof T)[];
}

export function wrapAValue<Value>(data: Value): Value[]{
    return [data]
}

export function findMax<T>(items: T[], compare: (a: T, b: T) => number): T | undefined{
    return items.reduce((max, min) => compare(max, min) > 0 ? max : min)
}

interface Box<T>{
    value: T
}

export function getBoxValue<T>(box: Box<T>): T{
    return box.value
}

const numberBox: Box<number> = {value: 42}
const stringBox: Box<string> = {value: 'kdkkd'}


export function getKeys2<T extends object>(obj: T): (keyof T)[]{
    return Object.keys(obj) as (keyof T)[]
}

export function getKeys3<T extends object>(obj: T): (keyof T)[]{
    return Object.keys(obj) as (keyof T)[]
}

export function getKeys4<T extends object>(obj: T): (keyof T)[]{
    return Object.keys(obj) as (keyof T)[]
}