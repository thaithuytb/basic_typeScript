import { student } from "./inferfaceForClass";

export class Student_10A2 implements student {
    constructor(
        public name: string,
        readonly age: number
    ) {}
    
    print = () => `${this.name} is a student, he/she is ${this.age}`;
}

const thai: student = new Student_10A2('Thai', 19);
const quyen: student = new Student_10A2('Quyen', 19);

let listStudentsFor10A_2 : student[] = [];

listStudentsFor10A_2.push(thai);
listStudentsFor10A_2.push(quyen);

const x = listStudentsFor10A_2[0].print();
// const y = listStudentsFor10A_2[0].name;
// const z = listStudentsFor10A_2[0].age;
console.log(x)