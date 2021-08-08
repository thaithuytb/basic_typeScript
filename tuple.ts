/**
 * Tuple
 */
 let arrTuple: [number, string][] = [];

 arrTuple.push([18,'Thai']);
 arrTuple.push([19,'Truong']);
 console.log(arrTuple);
 
 let listUsers: [number, string] = [20, 'Thai'];
 
 listUsers.push(19, 'Truong');
 listUsers.push('Duy', 20);
 listUsers.push('Quyen');
 console.log(listUsers);
 
 let listUsers_2: ( number | string)[] = [];
 listUsers_2.push(20);
 listUsers_2.push('Truong');
 listUsers_2.push('Thai', 19);
 console.log(listUsers_2);
 