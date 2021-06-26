const isOpen: boolean = false;

const myName: string = 'Scott';

const myAge: number = 41;

const list: number[] = [0,1,2];
// Tuple
const me: [string, number, boolean] = ['Brian', 41, false];

enum Job { WebDev, WebDesigner, PM }
const job: Job = Job.WebDev;

const phone: any = 'iPhone';
const tablet: any = 3;

// Other types: null, undefined, never, object

// Functions in TypeScript

// const sayWord = (word?: string): string => { // ? makes parameter optional
//   console.log(word || 'Hello');
//   return word || 'Hello' ;
// }

// Default Params
const sayWord = (word = 'Hello', ...otherStuff: string[]): string => { // ? makes parameter optional
  console.log(word, otherStuff);
  return word;
}

sayWord('Brian', 'Scott');
sayWord();

// Implicit Types
let newName = 'Brian';
newName = 'Scott';
// newName = 10; // will error because implicit type is a string.

let newNameTwo = newName;
newName = 'Gary';

// Union types with |
let newerName: string | number = 'Brian';
newerName = 'Scott';
newerName = 10;

let newerNameTwo = newerName;
newerName = 20;

const makeMargin = (x: string | number): string => {
  return `margin: ${x}px`;
}

makeMargin(10);
makeMargin('brian');
// makeMargin(false); // Will error

// Null Types - type checker assumes null and undefined are assignable to anything.
let dog: string;
dog = null;
// Could enable strict null checking if you don't want to allow null by default.

dog = 'ruger';
dog = null;

// Interfaces
interface Person {
  name: string,
  age?: number // ? optional param
}

const sayName = ({ name, age }: Person): string => {
  console.log(name);
  return name;
}

// This works too!
// const sayName = ({ name, age }: Person): Person => {
//   console.log(name);
//   return { name, age };
// }

sayName({ name: 'Brian'});
sayName({ age: 41, name: 'Brian' });