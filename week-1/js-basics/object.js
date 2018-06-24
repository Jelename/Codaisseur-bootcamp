let person = {
  firstName: 'Rembert',
  lastName: 'Boom'
};

console.log(`My name is ${person.firstName} ${person.lastName}`);


let student = {
  firstName: 'Jelena',
  age: 31,
  printAgeInMonths () {
    return this.age * 12;
  },
  printAgeInDays () {
    return this.printAgeInMonths() * 30;
  }




}



student.printAgeInDays();
//console.log(student.printAgeInDays());
//console.log(`I am ${student.firstName} and I am ${student.age} years or ${ageInMonths} old!`);
