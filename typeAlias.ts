/**
 * TYPE ALIAS
 * interface can merge but type alias is no
 * Type can use with "Computed Properties" but interface is no ( line 35)
 * Type có Unions type còn interface thì không ( line 35 name | age | male)
 */

 type StringOrNumber = string | number;

 //note type Student not a object because dont use ',' let use ';'
 type Student = {
     name: string;
     id: StringOrNumber;
     speak: (a: string) => string
 }
 
 const studentDetails = (id: StringOrNumber, student: Student): void => {
     console.log(`Student ${student.name} have id ${id}`);
     console.log(student.speak(id as string));
 }
 
 studentDetails(12345, {
     name: 'Thai',
     id: 12345,
     speak: (a:string) => a
 })
 studentDetails('12345', {
     name: 'Thai',
     id: '12345',
     speak: (a:string) => a
 })
 
 const greet = (user: Student):void => console.log(user);

 type Infos = 'name' | 'age' | 'male';

 type InfomationPerson = {
    [Info in Infos]: string;
 }

 const thai: InfomationPerson = {
     name: 'Thai',
     age: '20',
     male: 'true',
 }
 console.log(thai)