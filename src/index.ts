// let age = 20;
// if(age > 18) {
//     age += 10;
// }
// console.log(age);

// tuples

// let user: [number, string] = [1, 'test'];

// user.push(10);

// enum

// const enum Size {
//     Small = 1,
//     Medium = 2,
//     Large = 3
// };

// const mySize: Size = Size.Medium;

// console.log(mySize)

// functions

function calculateTax(income: number) : number {
    if(income > 50_000) {
    return income * 1.2;    
    }
    return income * 1.3;
}


let phone = <HTMLInputElement>document.getElementById('phone');
let phone2 = document.getElementById('phone') as HTMLInputElement;

function processEvents() : never {
    while(true) {}
}

processEvents();
console.log('Done');