/**
 * interface can merge but type alias is no
 * Type can use with "Computed Properties" but interface is no
 */
interface Person {
    name: string;
    spend: (amount:number) => number
}
interface Person {
    age: number;
    speak: (lang: string) => void;
}

const thai: Person = {
    name: 'Thai',
    age: 20,
    speak: (a: string):void => {
        console.log(a);
    },
    spend: (ant: number):number => ant,
}

console.log(thai);
