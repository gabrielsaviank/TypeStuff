// TUPLES
/* 
=> Array like structure where each element represents some property of a record
=> Usually inside of a Tuple we'll mix and match many different types of data inside there.

=> A tuple looks like and array specifying what is each elements of the array.
*/


// Drink object
const drink = {
  colour: 'brown',
  carbonated: 'true',
  sugar: 40
};

// This is what makes opposed to arrays, following this we can't mess with the order. 
const toupleDrink: [string, boolean, number] = [
  'brown', true, 40
];

// We can create an alias instead of repeting the structure: 
type getrank = [string, boolean, number];

// Now we can change to 
const pepsi: getrank = ['brown', true, 40];


