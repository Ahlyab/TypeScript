class Account {
    // readonly id : string;
    // private _balance : number;
    // private _name : string;

    // constructor(id: string, balance: number, name: string) {
    //     this.id = id;
    //     this._balance = balance;
    //     this._name = name;
    // }

    constructor(readonly id: string, private _balance: number, private _name: string) {}
    deposit(amount: number) : void {
        if(amount >= 0) {
            this._balance += amount;
        }
    }

    withdraw(amount: number) : void {
        if(amount >= 0 && amount <= this._balance) {
            this._balance -= amount;
        }
    }

    // getBalance() : number {
    //     return this._balance;
    // }

    get balance() : number {
        return this._balance;
    }

    // getName() : string {
    //     return this._name;
    // }

    get name() : string {
        return this._name;
    }
    
    
}


let account = new Account('123', 1000, 'John');
account.deposit(500);
console.log(account.balance);
account.withdraw(200);
console.log(account.balance);


// index signature

class SeatAssignment {
    [seat: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = 'John';
seats.A2 = 'Jane';
console.log(seats);


// static properties

class Ride {
    private static _rideCount = 0;

    start() {
        Ride._rideCount++;
    }

    stop() {
        Ride._rideCount--;
    }

    get rideCount() {
        return Ride._rideCount;
    }

    static getRideCount() {
        return Ride._rideCount;
    }
}

let ride = new Ride();
ride.start();
console.log(ride.rideCount);
ride.stop();
console.log(ride.rideCount);

