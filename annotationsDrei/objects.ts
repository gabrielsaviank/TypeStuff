// DESTRUCTURING
const profile = {
  name: 'Alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

// This is the structure
const {age}: {age: number} = profile;

// Destrucutring more complicated stuff 
const {coords: {lat, lng}}: {coords: {lat: number, lng: number}} = profile;


//Destructuring multiple properties (the error is because age is being redeclared)
const {age, name}: {age: number; name: string} = profile;
