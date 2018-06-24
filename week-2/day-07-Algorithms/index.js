const quizScores = 
  {score: 16, totalScore:20},
  {score: 15, totalScore:25},
  {score: 18, totalScore:24},
]

function outOfTen(quizScores) {
  let result = quizScores.map(function(scoreItem) {
    return scoreItem.score/scoreItem.totalScore * 10;
  });
  console.log(result);
}

outOfTen(quizScores);
