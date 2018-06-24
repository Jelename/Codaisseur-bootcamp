//testing if our function is returning oldest person from the object
const oldestSoFar = require('./main');

//testing functions take => 1. description,
                          //2. function that is testing your code


const people = [
    {name: 'Don', age: 23},
    {name: 'Adam', age: 33},
    {name: 'Steve', age: 14},
    {name: 'Rachel', age: 56},
    {name: 'Maud', age: 46},
    {name: 'Hermien', age: 28}
]

//expect
const expectedOutcome = {name: 'Rachel', age: 56}

//act
const actualOutcome = people.reduce(oldestSoFar);


//assert
test('Person with highest age', () => {
  expect(actualOutcome).toEqual(expectedOutcome);
})
