class keyValuePair<K, V>{
    constructor(public key: K, public value: V) {}
}

let pair1 = new keyValuePair<number, string>(1, "One");
let pair2 = new keyValuePair<string, string>("Two", "Second");


class ArrayUtils {
    static wrapInArray<T>(value: T): T[] {
        return [value];
    }
}

let wrappedNumber = ArrayUtils.wrapInArray<number>(5);
let wrappedString = ArrayUtils.wrapInArray<string>("Hello");


interface Result<T> {
    data: T | null;
    error: string | null;
}

function fetch<T>(url:string): Result<T> {
    return { data: null, error: "Not implemented" };
}

interface User {
    id: number;
    name: string;
}

let userResult = fetch<User>("users/1");
userResult.data?.name;


class Person {
    constructor(public name: string) {}
}

class Customer extends Person {
    
}
function echo<T extends Person>(obj: T): T {
    return obj;
}

echo(new Customer("Alice"));
echo(new Person("Bob"));

// type mapping

interface Product {
    name: string;
    price: number;
}

type Readonly<T> = {
    readonly [K in keyof T]: T[K];
};

const product: Readonly<Product> = {
    name: "Laptop",
    price: 1200
};

// product.name = "Tablet"; // Error: Cannot assign to 'name' because it is a read-only property.