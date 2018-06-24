//test 1 - wheat class
const { Wheat } = require('./crops')
const { Sugarcane } = require('./crops')
const { Crop } = require('./crops');

// test('The Wheat class can calulate a yield', () => {
//   const wheat = new Wheat(100)
//   expect(wheat.getYieldInKg()).toBeDefined()
// })
//
// test('The Wheat class calulates the proper yield', () => {
//   const wheat = new Wheat(100)
//   expect(wheat.getYieldInKg()).toBeCloseTo(674.4, 2)
// })

//test2 - sugarcane class
// test('The Sugarcane class can calulate a yield', () => {
//   const sugarcane = new Sugarcane(100)
//   expect(sugarcane.getSugarcaneYieldInKg()).toBeDefined()
// })
//
// test('The Sugarcane class calulates the proper yield', () => {
//   const sugarcane = new Sugarcane(100)
//   expect(sugarcane.getSugarcaneYieldInKg()).toBeCloseTo(67.6, 2)
// })


// test('The Sugarcane class calulates the proper yield', () => {
//   expect(0.2 + 0.1).toBeCloseTo(0.3, 5);
// });


//test 3 - crop class
// test('A crop can store it\'s area size', () => {
//   const crop = new Crop(12345)
//   expect(crop.acres).toBe(12345)
// })



//test 4 - calculating price in kilograms
// test('Wheat class calculates the proper yield value', () => {
//   const wheat = new Wheat(100)
//   expect(wheat.getYieldInEuros()).toBeCloseTo(1011.6, 1)
// })
//
// test('Sugarcane class calculates the proper yield value', () => {
//   const sugarcane = new Sugarcane(200)
//   expect(sugarcane.getYieldInEuros()).toBeCloseTo(1943.7, 1)
// })
//
// test('Sugarcane class calculates the proper yield value', () => {
//   const sugarcane = new Sugarcane(0)
//   expect(sugarcane.getYieldInEuros()).toBe(0)
// })

//test 5
test('Sugarcane class calculates the proper costs value', () => {
  const sugarcane = new Sugarcane(0)
  expect(sugarcane.getCosts()).toBe(0)
})

test('Sugarcane class calculates the proper costs value', () => {
  const sugarcane = new Sugarcane(456)
  expect(sugarcane.getCosts()).toBe(75696)
})

test('Wheat class calculates the proper costs value', () => {
  const wheat = new Wheat(123)
  expect(wheat.getCosts()).toBe(41820)
})
