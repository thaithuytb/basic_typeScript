/**
 * optional and non null
 */
 const addNumber = ( a: number, b?: number ): number => b ? a+b : a;

 console.log(addNumber(1,2));
 
 const addNonNull = ( a: number, b?:number) => a+b!;
 
 console.log(addNonNull(1));
 // ! bao voi nhat dinh se truyen
 console.log(addNonNull(4,6));