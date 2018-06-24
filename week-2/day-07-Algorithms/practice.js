// const route1 = [2.1, 3.5, 0.3, 5.2]
//
//
// function kilometerToMile(km) {
//   return km / 1.6
// }
// //
// //
// function routeInMiles(route1) {
//   // rewrite ...
//   let res = route1.map(function(mile) {
//     return kilometerToMile(mile);
//   })
//   return res;
// };
// //test
// console.log(JSON.stringify(routeInMiles(route1)))
//////////////////
//
// function longStretches(route1) {
//   let res = route1.filter(item => {
//     return item > 2;
//   })
//   return res;
//   }
//
// console.log(JSON.stringify(longStretches(route1)))


/////////////



// function total(route1) {
//   let res = route1.reduce((total, mile) => {
//     return total + mile;
//   })
//   return res;
// }
//
// console.log(total(route1) === 11.1)


////////////////
// function total(route) {
//   // rewrite ...
//   let res = 0
//   for (let i = 0; i < route.length; i++) { // iterate
//     res += route[i]                      // ? ..., ? ...
//   }
//   return res
// }

// test
/////////////
// function toAmericanGrade(grade) {
//  switch(grade) {
//      case grade >= 9 && grade <= 10:
//         return 'A';
//         break;
//      case grade >= 8 && grade <= 8.9:
//         return 'B';
//         break;
//     case grade >= 7 && grade <= 7.9:
//         return 'C';
//         break;
//     case grade >= 6 && grade <= 6.9:
//         return 'D';
//         break;
//     case grade >= 1 && grade <= 5.9:
//         return 'F';
//         break;
//     default:
//         return 'Enter a grade please';
//         break;
//       }
// }
//
//
// //tests
// console.log(`9 = A -> ${'A' == toAmericanGrade(9)}`)
// console.log(`10 = A -> ${'A' == toAmericanGrade(10)}`)
// console.log(`1 = F -> ${'F' == toAmericanGrade(1)}`)
// console.log(`5.9 = F -> ${'F' == toAmericanGrade(5.9)}`)
// console.log(`6 = D -> ${'D' == toAmericanGrade(6)}`)
// console.log(`6.9 = D -> ${'D' == toAmericanGrade(6.9)}`)

////////// Fractal ruler
// function ruler(n) {
//     if (n === 1) return '-';
//     return `${ruler(n-1)}\n${'-'.repeat(n)}\n${ruler(n-1)}`;
// }
//
// // test
// console.log(`test 1: -> ${ruler(1) === '-'}`)
// console.log(`test 2: -> ${ruler(2) === '-\n--\n-'}`)
// console.log(`test 3: -> ${ruler(3) === '-\n--\n-\n---\n-\n--\n-'}`)
// console.log(ruler(5))



function palindrome(word) {
    let newWord = [];
    newWord.split('');
    console.log(newWord);


    //return word.slice(1, -1);
}
palindrome('eye');
