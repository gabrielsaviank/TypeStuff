interface Vehicle {
  name: string,
  year: number, 
  broken: boolean
};

const oldCivic = {
  name: 'Civic',
  year: 2000,
  broken: true
};

const printVehicle = (vehicle: {name: string; year: number; broken: boolean}) => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Name: ${vehicle.year}`)
  console.log(`Name: ${vehicle.broken}`)
};

// This is long as fuck, following this we must create an interface. 


const printVehicleTwo = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Name: ${vehicle.year}`)
  console.log(`Name: ${vehicle.broken}`)
};
