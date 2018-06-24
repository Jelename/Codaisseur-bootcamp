// 1) Why would you use a loop? Write me a for & a while loop that prints your favorite food 10 times.

for (let i=1; i<11; i++) {
  console.log(i, ' Chicken Noodles');

};

let i = 1;

while ( i < 11 ) {
  console.log(i, ' Chicken Noodles');
  i++;
};


// 2) How do I try out whether my loop is working?
Open Node in the Terminal or paste the code into the (browser)console
Or load the JS file into an HTML doc (index) and open the index file in the browser.

// 3) What are arrays? What is an ordered collection?
Arrays are a JS way to store different types of values
the types ranging from objects/strings/number
arrays are a set of values ordered by index number.

// 4) Write me an array with the names of your team and iterate over them, so all names will be printed out (using for each).

 let names = ["Juno", "Tasos"]

 names.forEach(function(name){
   console.log(name);
 });

// 5) What is the difference between a loop and an array? Why would you use either of them?.

 and array holds information of different types of values
 a loop iterates over certain given values untill a certain condition is met ( true/false etc..)

 // 6) What is happening here?
 //
 // ```
 // var multiply = function(a, b) {
 //   return a * b;
 // };
 //
 // multiply(2, 3)

 Youre creating a virable function named multiply that takes in 2 argument a and b
 inside the function it returns the arguments while multiplying them
 and then you call the function.

 // 7) How could we log the arguments of the code above?
 let multiply = function(a, b){
return a * b
}
console.log(multiply(2, 5))

// 8) What is ‘scope’?
scope determines accessibility
variables inside a function are local
variables outside a function are global
//
// 9) Can I use my vars at the following places?
//
// ```
// var name = Rembert
//
// //Place A
//
// var codaisseur = function() {
//   //Place B
// }
// ```
// ```
// var codaisseur = function() {
//   var name = Rembert
//   //Place C
// }
//
// //Place D
// ```
Yes

// 10) Why would you use an object?
to store data with properties with possible changing values
or functions that can be called when the object is initialized.


// 11) Create an object ‘teacher', that stores the name,
// favorite language and a teach-function of that teacher that will alert you with some useful knowledge.
var teacher = {
  name: 'Rein',
  favLang: 'JS',
  teach: function(){
    alert('Functional to become a strong independent dev ')
  }
};

// 12) What are the property-names and values of the object you just created?
name
favLang
teach

// 13) Why would you use git?
to keep track of changes you are making to your files
and to collaborate with other devs

// 14) What is the difference between `git add`,`git commit` and `git push` ?
git add tells the local branch what files you want to commit
git commit commits the modified files to the staging area (i.e local machine)
git push adds them to the remote branch on a the github server
