// //STEP 1
// Write a function that takes a word, and an array of guessed letters, and returns count of failed guesses.
//
// Hint: String.indexOf(letter) will return -1 if letter is not in the string
// function wrongGuessCount(word, guesses) {
//   // ...
// }
//
// console.log('test wrong guesses: ', wrongGuessCount('hello', ['e', 'd', 'x', 'o']) === 2)

function wrongGuessCount(word, guesses) {
  let wrongGuess = guesses.map(guess => {
    return word.indexOf(guess);
  });
  //console.log(wrongGuess); //[ 1, -1, -1, 4 ]
  let countOfWrongGuesses = wrongGuess.filter(item => {
    return item < 0;
  })
  //console.log(countOfWrongGuesses);
  //console.log(countOfWrongGuesses.length);
  return countOfWrongGuesses.length;
};


//wrongGuessCount('hello', ['e', 'd', 'x', 'o']);

//console.log('test wrong guesses: ', wrongGuessCount('hello', ['e', 'd', 'x', 'o']) === 2)


//STEP 2
// Write a function that takes a word, and a array of guesses, and returns a string with dashes or letters with spaces in between.
//
// Hint: String.split('') will turn word into an array of letters.
// Hint: String.join(separator) will glue an array into a single string.

function showGuess(word, guesses) {
  let newWord = word.split(''); //[ 'h', 'e', 'l', 'l', 'o' ]
  let indexRightGuesses = guesses.map(guess => {
    return word.indexOf(guess);
  }); //[ 2, -1 ]
  let rightGuesses = indexRightGuesses.filter(item => {
      return item > -1;
    }); // [2]
  let dashArray = newWord.map(guess => {
    return '_'
  });//['_','_','_','_','_']
  rightGuesses.map(element => dashArray[element] = newWord[element]);
  let joined = dashArray.join('');
  //console.log(joined);
}

showGuess('hello', ['l', 'b', 'e', 'h']);




function rightGuessCount(word, guesses) {
  let rightGuesses = guesses.map(guess => word.indexOf(guess));
  let countOfRightGuesses = rightGuesses.filter(guess => guess > -1);
  return countOfRightGuesses.length;
}

//STEP 3
// Write a function that takes a word, and an array of guesses, and returns if the player has won or not.
//
 function isWinner(word, guesses) {
   let newWord = word.split(''); // [ 'h', 'e', 'l', 'l', 'o' ]
   let numberOfWrongGuesses = wrongGuessCount(word, guesses); //returns the number of letters that are not correct ==> this case: 2
   let numberOfRightGuesses = rightGuessCount(word, guesses); // right guesses - 5
   //console.log(numberOfRightGuesses);
   if (numberOfWrongGuesses >= 6) {
     console.log(`You lost!`);
   }

   if (numberOfWrongGuesses < 6 && numberOfRightGuesses === newWord.length) {
     console.log(`You won!`);
   }



}
 //console.log(rightGuesses);

//isWinner('hello', ['e', 'x', 'o', 'y', 'c', 'z', 'f', 'l', 'l', 'h']);







console.log('test winner 1:', !isWinner('hello', ['o', 'l', 'e', 'h', 'x', 'r', 'g', 'w', 'q', 'p', 'b']))
console.log('test winner 2:', isWinner('hello', ['o', 'l', 'l', 'e', 'h']))
