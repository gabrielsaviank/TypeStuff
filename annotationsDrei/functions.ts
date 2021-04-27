
const add = (a: number, b: number): number => {
  return a + b;
};
// (a: number, b: number) this is what goes. 
// (): number this is what returns


// Inference around functions (Beware TS doesn't check your logic)
// we don't need to add the returning result, because TS checks 
const sub = (a: number, b: number) => {
  return a - b;
};

// We are not going to use the inferece!

function divide(a: number, b: number): number {
  return a / b;
};

//Annonymous functions 
const multiply = function (a: number, b: number) {
  return a* b;
};

//Void and never (we can return null or undef, but you can't return somethig)
const logger = (message: string): void => {
  console.log(message);
  return null 
};

const throwErr = (message: string): string => {

  if (!message) {
    throw new Error(message);
  }

  return message
};



//Structuring Annotations 

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};


const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
  console.log(date);
  console.log(weather);
};
logWeather(todaysWeather);







