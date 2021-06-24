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