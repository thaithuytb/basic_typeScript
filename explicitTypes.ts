/**
 * explicit types
 */
 let myName: string;
 let age: number;
 let isAuthenticated: boolean;
 
 // myName = 18;
 myName = 'Thai';
 
 //array
 let students: string[] = [];
 //array might have a initial value
 
 students.push('Thai');
 students[1] = 'Truong';
 
 console.log(students);
 
 
 let mixed: (string | number)[];
 mixed = ["Thai", 19];
 // mixed.push(false);
 
 let id: string | number;
 
 id = 123;
 id = '123';
 
 let hobby: 'book' | 'code';
 hobby = 'book';
 // hobby = 'cooke';
 
 //object
 let person: object;
 person = {
     name: "Thai",
     age: 20
 }
 person = [];
 
 let student: {
     name: string,
     age: number,
     isGood: boolean
 };
 // student = {
 //     name: 'Thai',
 //     age: 20,
 // }
 
 student = {
     name: 'Thai',
     age: 20,
     isGood: true
 }