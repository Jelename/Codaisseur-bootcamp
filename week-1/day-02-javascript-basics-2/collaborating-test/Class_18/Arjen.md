# Welcome
## Welcome to this repository where you can get a first glance of collaborating on GitHub! Please answer the following questions:

Recap
Why would you use a loop? Write me a for & a while loop that prints your favorite food 10 times.
So you don't have to write the same code multiple times.
for(i=0;i<=10;i++)
  {
    console.log(favoritefood[i]);
  }
let i = 0;
while (i<11){
  console.log(favoritefood[i]);
  i++;
}

How do I try out whether my loop is working?
console log in the code and show the helper variable.

What are arrays? What is an ordered collection?
An array is a set of values ordered in a certain way. Ordered collections are a set
of data that always stored the same way.
all arrays are ordered collection not all ordered collections are arrays

Write me an array with the names of your team and iterate over them, so all names will be printed out (using for each).
let teamnames["Arjen", "Christopher", "Almer", "Anton"]
teamnames.forEach(function(element) {  console.log(element);});

What is the difference between a loop and an array? Why would you use either of them?.
An array is a variable/thing it just stores a set of data. A loop is a method that can be used for multiple
things.

What is happening here?
A function is declared and then called upon.

var multiply = function(a, b) {
  return a * b;
};

multiply(2, 3)
How could we log the arguments of the code above?
console.log(multiply(2, 3) )

What is ‘scope’?
Scope is what part of the code a machine is on and what variables are accessible
at that time. (global scope, local scope)

Can I use my vars at the following places?
All yes. Since it's declared above the function it is scoped more globally.
Although place C might have some problems since you are redeclaring the same variable
Also if you take out the above var then you can only use it on place C
var name = Rembert

//Place A

var codaisseur = function() {
  //Place B
}
var codaisseur = function() {
  var name = Rembert
  //Place C
}

//Place D

Why would you use an object?
To store data as a group

Create an object ‘teacher', that stores the name, favorite language and a teach-function of that teacher that will alert you with some useful knowledge.
let teacher={
  name:"Arien",
  favoritelang:"HTML/CSS",
  let useful:function(x){return `The teacher is now able to teach you ${x}`}
}

What are the property-names and values of the object you just created?
property name and favoritelang
value Arien and HTML/CSS
method useful

Why would you use git?
If you screw up something later it's easier to go to an old version. That and it is
useful to create branches so you can experiment with different things.

What is the difference between git add,git commit and git push ?
git add add files
git commit commits file and leaves a message. In insert mode press i for insert. leave commit screen escape :wq
git push pushes (uploads to github to the branch)
