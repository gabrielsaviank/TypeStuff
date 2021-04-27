// CLASSES 
/*They are blueprints to create an object with some fields (values) and methods to represent a thing*/
// Classes are always capitalised

class Vehicle {
  public drive(): void {
    console.log('vrum vrum')
  }
};

const vehicle = new Vehicle();
vehicle.drive();


//Fields in classes 
class Person {
  name: string;

  constructor(name: string){
    this.name = name
  }

  protected discover (): void {
    console.log("my name is")
  }
};

const person = new Person('edward');

/*When we define a constructor, it'll runa new instance of the class as soon as we called a the class  */