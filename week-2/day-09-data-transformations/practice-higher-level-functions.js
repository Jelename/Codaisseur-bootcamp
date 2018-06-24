let numbers = [0, 1, 2, 3];

let count = numbers.reduce((acc, curr) => acc + curr, 10);
//console.log(count);


let arrayOfNumbers = [{x: 1},
                      {x: 2},
                      {x: 3}];

let countOfarrayOfNumbers = arrayOfNumbers.reduce((acc, curr) => {
  return acc + curr.x;
}, 0);

//console.log(countOfarrayOfNumbers);



let flattened = [[0, 1], [2, 3], [4, 5]].reduce((acc, curr) => {
  return acc.concat(curr)}, []);

//console.log(flattened);

var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice', 'Bob'];
var countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++;
    //console.log(allNames);
  }
  else {
    allNames[name] = 1;
    //console.log(allNames);
  }
  return allNames;
}, {});

//console.log(countedNames);

var numberArray = [1, 3, 4, 8, 9, 4, 5, 9, 3, 3];

let repeatingNumbers = numberArray.reduce((acc, curr) => {
  if (curr in acc) {
    acc[curr]++;
  } else {
    acc[curr] = 1;
  }
  return acc}, {})

//console.log(repeatingNumbers);

var people = [
  { name: 'Alice', age: 21, level: 1 }, //oneObject
  { name: 'Max', age: 21, level: 3 },
  { name: 'Jane', age: 21, level: 12 },
  { name: 'Jelena', age: 21, level: 12 }
];


//group by level
function levelBy(people, level) {
  return people.reduce((acc, object) => {
    let levelValue = object.level;
    if(!acc[object.level]) {
      acc[object.level] = [];
    }
    acc[object.level].push(object);
    return acc;
  }, {});
}

let groupedPeopleLevel = levelBy(people, 'level');

//console.log(groupedPeopleLevel);




// function groupBy(people, level) {
//   return people.reduce(function (acc, oneObject) {
//     var key = oneObject.level;
//     //console.log(key);
//     if (!acc[oneObject.level]) {
//       acc[oneObject.level] = [];
//     }
//     //console.log(acc[oneObject.age]);
//     acc[oneObject.level].push(oneObject);
//     return acc;
//   }, {});
// }
//
// var groupedPeople = groupBy(people, 'level');
// groupedPeople is:
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }

//console.log(groupedPeople);



let peopless = [
  {name: 'Richard', age: 55, title: 'professor'},
  {name: 'Jelena', age: 31, title: 'designer'},
  {name: 'Milos', age: 55, title: 'it'},
  {name: 'Pablo', age: 55, title: 'it'}
]


let getPeopleByTitle = (acc, curr) => {
    if (!acc[curr.name]) {
      acc[curr.name] = [];
    }
    acc[curr.name].push(curr.title);
    return acc
  }


let peopleByTitle = peopless.reduce(getPeopleByTitle, {});

//console.log(peopleByTitle);


var friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}];

// allbooks - list which will contain all friends' books +
// additional list contained in initialValue
var allbooks = friends.reduce(function(accumulator, currentValue) {
  return [...accumulator, ...currentValue.books];
}, ['Alphabet']);

// allbooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]

//console.log(allbooks);


let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result = arr.sort().reduce((accumulator, current) => {
    const length = accumulator.length
    //console.log(length);
    if (accumulator[length - 1] !== current) {
        accumulator.push(current);
    }
    return accumulator;
}, []);
//console.log(result); //[1,2,3,4,5]




var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/*
 * Array filters items based on search criteria (query)
 */
function filterItems(word) {
  return fruits.filter(function(el) {
      return el.toLowerCase().indexOf(word.toLowerCase()) > -1;
  })
}

//console.log(filterItems('ra')); // ['apple', 'grapes']
//console.log(filterItems('an')); // ['banana', 'mango', 'orange']


//
// var names = ['Jelena', 'Marija', 'Danijela', 'Ivana', 'Natasa'];
//
// function filterOut(word) {
//   return names.filter(element => {
//     return element.indexOf(word.toLowerCase() > -1;
//   })
// }



//console.log(filterOut('je'));




let colors = ['blue', 'red', 'green' ];

function ifHasLetter(colors) {
  return colors.filter(element => {
    return element.indexOf(word) > -1;
  })
}
//console.log(ifHasLetter('l'));


var kvArray = [{key: 1, value: 10, name: 'Jelena'},
               {key: 2, value: 20, name: 'Jelena'},
               {key: 3, value: 30, name: 'Jelena'}];

var reformattedArray = kvArray.map(obj =>{
   var rObj = {};
   //console.log(rObj);
   rObj[obj.name] = obj.value;
   rObj[obj.key] = obj.name;
   return rObj;
});

//console.log(reformattedArray);
// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// kvArray is still:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]


const persons = [
    {name: 'Don', age: 23},
    {name: 'Don', age: 18},
    {name: 'Adam', age: 33},
    {name: 'Steve', age: 14},
    {name: 'Rachel', age: 56},
    {name: 'Maud', age: 46},
    {name: 'Hermien', age: 25}
]

let oldestSoFar = (acc, curr) => {
  //console.log(acc.age);
  //console.log(curr.age);
  return (acc.age > curr.age) ? acc : curr;
}

//console.log(persons.reduce(oldestSoFar));


// const numbers = [0, 1, 4, 5, 6, 9]
// Into this result:
//
// {
//     even: [0, 4, 6],
//     uneven: [1, 5, 9]
// }

const numberinos = [0, 1, 4, 5, 6, 9];


let evenOdd = (acc, number) => {
  if (number % 2 === 0) {
    acc.even.push(number);
  } else {
    acc.odd.push(number);
  }
  return acc
}



console.log(numberinos.reduce(evenOdd, {even: [], odd: []}));
