//const { Crop } = require('./crops.js');

class Farm {
  constructor(name) {
    this.name = name;
    this.crops = []; //wheat, sugarcane
    this.animals = [];
  } // arter calculateIncome..[11222, 34555]

  addCrop(crop) {
    this.crops.push(crop); //?why we have to add crop as parameter
                          //probably because we have an ampty array so we first have to add it
  }

  addAnimal(animal) {
    this.animals.push(animal);
  }

  calculateIncome() {
  return this.crops
    .map(crop => crop.getYieldInEuros())
    .reduce((a,b) => a + b, 0)
  }

  calculateIncomeAnimals() {
  return this.animals
    .map(animal => animal.getValueInEuros())
    .reduce((a,b) => a + b, 0)
  }


}

//check this part if it is right
module.exports.Farm = Farm;
