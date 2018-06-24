// //destructuring
// const fruit = {
//   name: 'Passion Fruit',
//   flavor: 'Sweet',
// }
//
// const { name, flavor } = fruit
//
// console.log(name)
// //=> 'Passion Fruit'
//
// console.log(flavor)
// //=> 'Sweet'
//
// // The Object is still intact!
// console.log(fruit)
// //=> { name: 'Passion Fruit', flavor: 'Sweet' }


// let x = [1, 2, 3, 4, 5];
// let [a, b] = x
//
// console.log(a);
// console.log(b);


// let foo = ['one', 'two', 'three'];
// let [one, two, three] = foo;
//
// console.log(one);
// console.log(two);
// console.log(three);


// let a, b;
//
// [a, b] = [1, 2];
// console.log(a);
// console.log(b);

let object = {a: 2, b: 3};
let {a, b} = object;

console.log(a);
console.log(b);
