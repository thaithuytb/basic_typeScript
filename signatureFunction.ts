/**
 * signature function
 */

 let greet: Function;

 greet = () => console.log('Say hello');
 greet();
 
 let sum: (a: number, b: number) => number;
 
 sum = (numberOne: number, numberTwo: number) => {
     return numberOne + numberTwo;
 }
 
 type Student = {
     name: string;
     age: 19 | 20;
 }
 let sayHello: (a: Student) => void;
 
 sayHello = ( { name, age }: Student) => {
     console.log(`${name} , ${age} age says hello`);
 }
 
 sayHello({
     name: 'Thai',
     age: 20
 })
 // sayHello({
 //     name: 'Truong',
 //     age: 22
 // })