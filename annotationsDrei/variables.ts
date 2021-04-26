// Type annotations 
// This is an annotation and how we declare consts, variables etc...
const apples: number = 5; 

// If I change Const to let I can reassign the value but not the type of the value. 
let persons: number = 2;

// Type Annotations example: 
let speed: string = 'fast';

let hasName: boolean = true; 

// Built in objects
let now: Date = new Date();


// Array 
let colours: string[] = ['red', 'green', 'blue'];

let myNumbers: number[] = [1, 3, 5];

let truths: boolean[] = [true, true, false];

//Classes 
class Car {
  type: ['Hatch', 'Sedan', 'SUV']
  brand: ['Honda', 'Fiat', 'Renault']
}

let car: Car = new Car();

//Object Literal 
let point: { x: number; y: number} = {
  x: 10,
  y: 20
};

// Functions 
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
};

// At the end of the day we can delete all of the annotations. Yes fuck off. 
// This is inference
let some = 10; 



// MIND THE GAP 
// If we do everything in one line it'll work just fine.


// WHEN TO USE TYPE ANNOTATIONS OR INFERENCE? 

// Case 1 => When we have a function that returns the 'any' type

const json = '{"x": 10, "y": 20}';

const coordinates: {x: number, y: number} = JSON.parse(json);
console.log(coordinates);
// coordinates.blsdsd


//case 2 => When we declare a variable on one line and initialise it later 

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true
  }
};


//When inference doesn't work 
// Case 3 => Variable whose type canno be inferred correctly 
let numbers = [-10, -1, 12];

let numberAboveZero: boolean | number = false;

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] > 0) {
    numberAboveZero = numbers[index]
  }
};




