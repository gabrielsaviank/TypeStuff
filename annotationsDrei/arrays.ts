// You can do this: 
const carMakers: string[] = ['Ford', 'Fiat', 'Volkswagen'];

// or: 
const carMade = ['Ford', 'Fiat', 'Volkswagen'];

// if we do the following declaration TS has no idea what goes inside and declares as any: 
const randomStuff = [];


// More Complicated examples... 
const dates = [new Date(), new Date()];


const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

// help with inferecne when extracting values 
const wagen = carMakers[0];
const myCar = carMakers.pop();


// Prevent for adding incompatible values. 
// carMakers.push(100);

// Help with map 
carMakers.map((car: string): string => {
  return car
});

//Flexible Types 
const importantDates: (Date | string)[] = [new Date()];


// ARRAYS WITH TYPES 
/*Where to use typed arrays? Any time we need to represent a collection of records with some arbitrary sot order*/