// Write a reducing function that, when applied to our numbers array,
// results in the expected output. You can come up with your own test-cases,
// if you want. Note that our output is an object.

const numbers = [0, 1, 4, 5, 6, 9]


//my solution
// function gettingTheRightArray(numbers) {
//   const even = [];
//   const odd = [];
//   numbers.reduce((total,number) => {
//     (number % 2 === 0) ? even.push(number) : odd.push(number);
//     return total;
//   }, return odd, return even)}
//
// //my solution
// const evenOdd = (even, odd, number) => {
//   if (number % 2 === 0) {
//     return number.even
//   }
// }

//his solution


// accumulator has to be RETURNED every time
const evenUneven = (accumulator, numbers) => {
  return (number % 2 === 0) ? accumulator.even.push(number) : accumulator.odd.push(number);
}
return evenUneven;

module.exports = evenUneven;


console.log(count);
