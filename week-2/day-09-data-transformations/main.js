//max so far exercise - data transformation chapter
const people = [
    {name: 'Don', age: 23},
    {name: 'Adam', age: 33},
    {name: 'Steve', age: 14},
    {name: 'Rachel', age: 56},
    {name: 'Maud', age: 46},
    {name: 'Hermien', age: 28}
]


// oldest so far function
function oldestSoFar(prev, curr) {
  return (prev.age > curr.age) ? prev : curr;
}

// example
// const max = data.reduce(function(prev, current) {
//     return (prev.y > current.y) ? prev : current
// }) //returns object

module.exports = oldestSoFar;
