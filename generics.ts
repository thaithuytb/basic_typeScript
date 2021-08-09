/**
 * Generics
 * Generics extends
 * Generics in interface
 */
//generics
const speak = <T,C>(a:T, b: C) => [a,b];

const v1 = speak<string,number>('Thai', 23);
const v2 = speak('Thai', 23);

const speak2 = <X,Y = number>(a: Array<X>, b: Y[]):[X, Y] => [a[a.length -1], b[0]];

const v3 = speak2<string | number, number>(['a','b'], [1,2,3]);
const v4 = speak2<string | number>(['a','b','c', 4], [1,2,3]);
// console.log(v4)
//generics extends

const inFoName = (a: object) => ({...a, fullName: 'Ngo Quang Thai'});

const v5 = inFoName({firstName: 'Ngo Quang', lastName: 'Thai'});
// console.log(v5.firstName)  ? why false ? 

//solution
const InfoNameGenerics = <T>(a: T) => ({...a, fullName: 'Ngo Quang Thai'});
const v6 = InfoNameGenerics({firstName: 'Ngo Quang', lastName: 'Thai'});
// console.log(v6.firstName)

const InfoGenericsExtends = <T extends { firstName: string; lastName: string}>(a: T) => ({...a, fullName: `ho va ten: ${a.firstName} ${a.lastName}`});
const v7 = InfoGenericsExtends({firstName: 'Ngo Quang', lastName: 'Thai', age: 20});
// console.log(v7)

// generic in interface 
interface PersonGenerics<T> {
    name: string;
    age?: number;
    info: T
}

const thaiInterface: PersonGenerics<string> = {
    name: 'Thai',
    info: '16, 72, Ton That Tung'
}
const thaiInterface_2: PersonGenerics<object> = {
    name: 'Thai',
    age: 19,
    info: {
        street: 'Ton That Tung',
        numberHouse: 16,
        detail: 'ngo 72'
    }
}

type TypeInInterface = PersonGenerics<number>;

const thaiInterface_3: TypeInInterface = {
    name: 'Thai',
    age: 20,
    info: 72
}


