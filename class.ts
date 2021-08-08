/**
 * class
 */

export class Employee {
    public name: string;
    private age: number;
    readonly male: boolean;

    constructor(a: string, b: number, c: boolean){
        this.name = a;
        this.age = b;
        this.male = c;
    }
    print() {
        return `name: ${this.name}, age: ${this.age}`;
    }
}

const thai = new Employee('Thai', 30, true);
console.log(thai.name);
// console.log(thai.age);
console.log(thai.male);

thai.name = 'Thai';
// thai.male = false;
console.log(thai);
console.log(thai.print());

// c2 
class Employee2 {
    constructor(
        public name: string,
        private age: number,
        readonly male: boolean
    ) {}
}

let bob: Employee2[] = [];

const truong = new Employee2('Truong', 20, true);
bob.push(truong);