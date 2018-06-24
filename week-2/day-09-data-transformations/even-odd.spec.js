const even = require('./even-odd.js');

//rein test for even-odd task


// AAA
// Arrange
// Act
// Assert

test('get even and odd numbers', () => {
  // Arrange
  const numbers = [0, 1, 4, 5, 6, 9]

  const expectedOutcome = {
    even: [ 0, 4, 6, ],
    uneven: [ 1, 5, 9 ]
  }
  // Act!
  const actualOutcome = numbers.reduce(evenUneven, {
    even: [],
    uneven: []
  })

  // Assert!
  expect(actualOutcome).toEqual(expectedOutcome);
});
