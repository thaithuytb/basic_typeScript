/**
 * array and object
 */
 let names = ['Thai', 'Truong', 'Duy'];
 names.push('Quyen');
 // names.push(17);
 
 let mixed = ['Thai', 19, false];
 //  <=> let mixed: (string | number | boolean)[]= ['Thai', 19, false];
 mixed.push('Truong');
 // mixed.push({
 //     a: 18,
 //     b: 'Thai'
 // })
 
 let person = {
     name: "Thai",
     age: 20,
     isStudent: false
 }
 person.name = 'Truong';
 // person.name = 20;
 // person.hobbies = 'book';
 
 person = {
     name: 'Dung',
     age: 40,
     isStudent: false,
     // hobbies: ['books']
 }