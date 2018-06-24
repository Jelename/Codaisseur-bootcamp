//STEP1
//function
const outOfTen = (score, totalScore) => {
  return score/totalScore * 10;
}

//testing logic
let itWorksForSixteenAndTwenty = () => {
  return outOfTen(16, 20) === 8;
};

let itWorksForFifteenAndTwentyfive = () => {
  return outOfTen(15, 25) === 6;
}

//expectation
console.log('It works for 16 and 20');
it itWorksForSixteenAndTwenty(); ==> true/false




//tdd = test driven development

//STEP2
//function
function outOfTen(quizScores){
  let result[];
  quizScores.forEach(function(score) {
    result.push(score.score/score.totalScore * 10);
  })
}

//testing logic
const itWorksForArray = (quizScore, output) => {

}


//expectation
const quizScores = [
  {score: 16, totalScore:20},
  {score: 15, totalScore:25},
  {score: 18, totalScore:24},
]

const output = [8, 6, 7.5];

//STEP3
//function
function outOfTen(quizScores) {
  let result = quizScores.map(function(score) {
    score.score/score.totalScore * 10;
  })
}

//testing logic



//expectation










//STEP4
//function
//testing logic
//expectation
