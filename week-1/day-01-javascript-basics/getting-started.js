/*
let userInput = prompt('What is the current temperature?');

if (userInput < 5) {
  console.log('Parka weather');
} else if ( userInput > 4) {
  console.log('Jacket weather');
} else {
  console.log('T-shirt weather');
};
*/

/*
let userInput = prompt('Enter a number');

function even () {
  if (userInput % 2 === 0) {
    console.log('You have even number');
  } else {
    console.log('You entered odd number');
  }
}

even();
*/


/*
let userInput = prompt('What is your favorite programming language?');

if (userInput === 'JavaScript'.toLowerCase()) {
  console.log('I love JS');
} else if (userInput === "PHP".toLowerCase()) {
  console.log('I don\'t like PHP');
} else {
  console.log('Sorry, I mostly like JavaScript!');
}
*/

// var age = 31;
// var gender = "f";
// var height = 170;
// var weight = 55;
// var exerciseLevel = 2;
//
// var heightInCm = height / 100;
// var bodyWeightSquared = Math.pow(heightInCm, 2);
// var bmi = weight / Math.pow(height / 100, 2);
// console.log(bmi);
//
// var idealBMI = 22.5;
// var idealWeight = idealBMI * weight * 2;
// console.log(idealWeight);

// let count = 5;
//
// while (count <= 50) {
//   if (count % 5 === 0) {
//     console.log(count);
//   }
//   count++;
// };

// for(let count = 5; count <= 50; count ++) {
//   if (count % 5 === 0) {
//     console.log(count);
//   }
// };

// let fruits = ['apples', 'oranges', 'pears', 'apricots'];
// for(let i = 0; i < fruits.length; i++) {
//   console.log(`I love: ${fruits[i]}`);
// }


let fritata = ['cut and bake vegetables in a frying pan', 'stir 6 eggs and 100 gram of ricotta', 'add ricotta to the baked vegetables', 'after 5 minutes, turn frittata, sprinkle parmaggiano over it', 'bake frittata, under a cover, and in the oven for 8 minutes'];
let steps = 0;

fritata.forEach(function(i) {
  console.log(`${steps}: ${i}`);
  steps++;
});
