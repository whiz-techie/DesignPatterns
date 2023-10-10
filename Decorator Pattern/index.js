class Pet {
    constructor(name) {
      this.name = name;
    }
  
    getDescription() {
      return `This is ${this.name}.`;
    }
  }
  
  class GroomingDecorator {
    constructor(pet) {
      this.pet = pet;
    }
  
    getDescription() {
      return `${this.pet.getDescription()} ${this.pet.name} has been groomed.`;
    }
  }
  
  class VaccinationDecorator {
    constructor(pet) {
      this.pet = pet;
    }
  
    getDescription() {
      return `${this.pet.getDescription()} ${this.pet.name} has been vaccinated.`;
    }
  }
  
  // Create a pet and decorate it with grooming and vaccination
  const myPet = new Pet("Fluffy");
  const groomedPet = new GroomingDecorator(myPet);
  const vaccinatedPet = new VaccinationDecorator(groomedPet);
  
  console.log(myPet.getDescription()); // This is Fluffy.
  console.log(groomedPet.getDescription()); // This is Fluffy. Fluffy has been groomed.
  console.log(vaccinatedPet.getDescription()); // This is Fluffy. Fluffy has been groomed. Fluffy has been vaccinated.
  