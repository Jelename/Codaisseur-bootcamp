// #1

var favFood = ["Frites"];

for (var i = 0; i < 10; i++) {
  console.log(favFood.toString());
}


var i = 0;
while (i < 10) {
  console.log("Frites");
  i++;

}

// #2
// You can test your loop by logging the result to the console, and seeing if the loop terminates at the expected area!

// #3
// An array is a collection of variables, which can be any JavaScript type. Each Array has an index of each item starting at index(i) [0].

// #4
var team = ["Jose", "Addison", "Martijn"];

team.forEach(function(name) {
  console.log(name);
});

// #5
// An array is able to store data types and variables, while a loop is a "function" that will go through the array and perform the desired instruction

// #6
// The following code takes two arguments, and passes the respective value given in the declared function order, and returns a single value.
var multiply = function(a, b) {
  return a * b;
};

multiply(2, 3);

// #7
console.log(multiply(2,3));

// #8
// Scope refers to the variables declared in or outside of a function. Example below


var bIsInScope = function() {
  var b = 3;
  console.log(b);
};

var bIsOutOfScope = function() {
  console.log(b);
};

bIsInScope();
bIsOutOfScope();

// #9
// The first one you can use it in either place.
// The second function you cannont becuase the variable is declared after the function.

// #10
// You would want to use an object to make it easier to store multiple properties and values, "keys" and "values" of an object. Mostly used to manipulate the DOM

// #11
var teacher = {
  name: "Arjen",
  favLanguage: "JavaScript",
  teach: function(){
    alert("Addison is a great student!!!");
  }
};

// #12
// names: name, favLanguage, teach()
// properties: "Arjen", "Javascript", function() {alert("Addison is a great student!!!")}

// #13
// Git is useful to collaborate and track changes in code. Code is always changing and it is an amazing idea to keep track of everything youve done

// #14
// Git commit will initilize a repository called "Master"
// Git add will stage the change to the staging area
// Git push will push the changes to the repository from the staging area, completing the changes
