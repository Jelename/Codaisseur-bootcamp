// Recap

// 1) Why would you use a loop? Write me a for & a while loop that prints your favorite food 10 times.

let myFavFood = "mango";

for (let i = 0; i < 10; i++) {
  console.log(myFavFood);
};

let i = 0;

while (i < 10) {
  console.log(myFavFood);
  i += 1;
};

// 2) How do I try out whether my loop is working?

// You open the atom-console-js package in Atom and paste your loop code. If you Atom's CPU usage is not 140% and the result is what it should be, then your loop works.

// 3) What are arrays? What is an ordered collection?

// An array is a storage for various items. These items can be everything - integers, strings, objects, other arrays.

// 4) Write me an array with the names of your team and iterate over them, so all names will be printed out (using for each).

let teamMates = ["Stefania", "Rik", "Christophe", "Arjan", "Fabian"];

let i = 0;

while (i < teamMates.length) {
  console.log(teamMates[i]);
  i += 1;
};
// 5) What is the difference between a loop and an array? Why would you use either of them?.

// An array is a collection of items, while a loop is a method (a function??) that allows for iterating over a number of items, stored in either array or an object. In short, a loop allows you to iterate and apply certain functionality to a number of items. (that wasn't so short...)

// 6) What is happening here?

/* var multiply = function(a, b) {
  return a * b;
};

multiply(2, 3) */

// a variable "multiply" is declared. it stores a function. That function requires two arguments.
// Then, the function multiplies the two arguments - a & b - and returns their result.

// 7) How could we log the arguments of the code above?

// console.log(multiply(2, 3));
// or just
// multiply(2, 3);

// 8) What is ‘scope’?

// The scope of a function defines the "range/s" in which this function can be used.
// There are "global" and "local" types of scope. Globally scoped functions can be used (almost?) everywhere in code body,
// while the locally scoped functions can't be used throughout your code and instead only within the area/scace where they were defined.

// 9) Can I use my vars at the following places?

var name = "Rembert";

//Place A - the globally scoped "name" - yes; the locally scoped "name" - no;

var codaisseur = function() {
  //Place B - the globally scoped "name" - yes; the locally scoped "name" - no;
};

var codaisseur = function() {
  var name = Rembert;
  //Place C - the globally scoped "name" - yes; the locally scoped "name" - yes;
};

//Place D - the globally scoped "name" - yes; the locally scoped "name" - no;

//

// 10) Why would you use an object?

// You use an object so you can "model the world around you" in a pice of code.
// You can store various types of information and functionality inside an object.

// 11) Create an object ‘teacher', that stores the name, favorite language and a teach-function of that teacher that will alert you with some useful knowledge.

let teacher = {
  name: "Mimi",
  favLang: "Assembly",
  speak: function() {
    console.log("Let's build websites on Assembly. :D");
  }
};

teacher.speak();

// 12) What are the property-names and values of the object you just created?

// Properties - name, favLang, speak;
// values - "Mimi", "Assembly", a speak function.

// 13) Why would you use git?

// We use git to collaborate, share and build code together with our team members.

// 14) What is the difference between git add,git commit and git push

// git add - to prepare the file for commit
// git commit - to prepare the file for push
// git push - to push
// Honestly, have an idea what it's happening but can't quite define/explain it precisely
