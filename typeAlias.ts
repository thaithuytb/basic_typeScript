/**
 * type alias 
 */

 type StringOrNumber = string | number;

 //note type Student not a object because dont use ',' let use ';'
 type Student = {
     name: string;
     id: StringOrNumber
 }
 
 const studentDetails = (id: StringOrNumber, student: Student): void => {
     console.log(`Student ${student.name} have id ${id}`);
 }
 
 studentDetails(12345, {
     name: 'Thai',
     id: 12345
 })
 studentDetails('12345', {
     name: 'Thai',
     id: '12345'
 })
 
 const greet = (user: Student):void => console.log(user);