class Animal {
  constructor(age) {
    this.age = age;
  }

  getWeightInKg() {
    return this.age * this.weightIndex;
  }

  getValueInEuros() {
    return this.getMaxWeight() * this.price;
  }
}

class Pig extends Animal {
  constructor(age, weightIndex, price) {
    super(age);
    this.weightIndex = 2.3;
    this.price = 4;
  }

  getMaxWeight() {
    return Math.min(700, this.getWeightInKg());
  }
}


class Cow extends Animal {
  constructor(age, weightIndex, price) {
    super(age);
    this.weightIndex = 1.5;
    this.price = 5;
  }

  getMaxWeight() {
    return Math.min(1000, this.getWeightInKg()); //check this Math.min
  }
}


class Horse extends Animal {
  constructor(age, weightIndex, price) {
    super(age);
    this.weightIndex = 1.7;
    this.price = 10;
  }

  getMaxWeight() {
    return Math.min(1200, this.getWeightInKg());
  }
}

// const blankyCow = new Cow(10);
// console.log(blankyCow.getMaxWeight());

module.exports = {Pig, Horse, Cow};
