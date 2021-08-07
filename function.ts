/**
 * function
 */

 let great: Function;

 great = (a: number, b: number) :void => console.log(a,b);
 great(4,7);
 great(4,'8');
 
 const add = (a: number, b: number, c: number): number => a +b +c;
 
 console.log(add(4,5,6));
 // console.log(add(4,5,'add'));
 
 const addDefault = (a: number, b: number, c: number | string = 10): void => {
     console.log(a+b);
     console.log(c);
 }
 addDefault(4,5,6);
 addDefault(4,5,'Thai');