class Person {
    constructor(public firstName: string, public lastName: string) {}

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    walk(): void {
        console.log(`${this.fullName} is walking.`);
    }

    talk(): void {
        console.log(`${this.fullName} is talking.`);
    }
}

class Student extends Person {
    constructor(firstName: string, lastName: string, public studentId: number) {
        super(firstName, lastName);
    }
}

class Teacher extends Person {
    constructor(firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    override get fullName(): string {
        return `Professor ${super.fullName}`;
    }
}


let student = new Student('Alice', 'Smith', 101);
student.walk();
console.log(student.fullName);

let teacher = new Teacher('John', 'Doe');
teacher.talk();
console.log(teacher.fullName);