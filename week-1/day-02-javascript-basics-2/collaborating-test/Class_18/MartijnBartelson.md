# Welcome

Welcome to this repository where you can get a first glance of collaborating on GitHub! Please answer the following questions:

# Recap

1) Why would you use a loop? Write me a for & a while loop that prints your favorite food 10 times.

You can use loops to iterate over things.

let counter = 0

for (; true ; ) {
  console.log('my favorite food is pizza')
  counter++
  if (counter > 10){
    break
  }
}

let counter2 = 0
while (true) {
  console.log('my favorite food is pizza')
  counter2++
  if (counter2 > 10){
    break
  }
}

2) How do I try out whether my loop is working?

Run the javascript code in the browser or terminal


3) What are arrays? What is an ordered collection?

Arrays are collections of data: let myArray = [ 'data1', 'data2', 'etc']
An ordered collection means that the order of the data in the collection is important, there cant be any gaps. So myArray[1] follows after myArray[0]


4) Write me an array with the names of your team and iterate over them, so all names will be printed out (using for each).

let team = ['name1', 'name2', 'name3', 'name4']

team.forEach((member)=> console.log(member))



5) What is the difference between a loop and an array? Why would you use either of them?.

An array is a type of data. With a loop you can change the data.




6) What is happening here?

```
var multiply = function(a, b) {
  return a * b;
};

multiply(2, 3)
```

2 is multiplied by 3. De multiply function is called with the arguments 2 and 3. in the multiply function the first argument * the second argument is returned


7) How could we log the arguments of the code above?

inside de function body : console.log(arguments)


8) What is ‘scope’?

Inside javascript code there are different scopes. There is a global scope. The body of a function has a different scope, called a local scope. Variables defined in a local scope are not accesible in the global scope etc..


9) Can I use my vars at the following places?

```
var name = Rembert

//Place A

var codaisseur = function() {
  //Place B
}
```
```
var codaisseur = function() {
  var name = Rembert
  //Place C
}

//Place D
```

Var name is defined globally so you can use it in all the places.




10) Why would you use an object?

to store data.


11) Create an object ‘teacher', that stores the name,
favorite language and a teach-function of that teacher that will alert you with some useful knowledge.

let teacher {
  name: 'rembert',
  favoriteLanguage: 'spanish',
  teach: function(){ alert('some useful knowledge')}
}


12) What are the property-names and values of the object you just created?

The first property has a name of 'name' and a value of 'rembert'


13) Why would you use git?

Version control and collaboration


14) What is the difference between `git add`,`git commit` and `git push` ?

With git add you can track a file. with git commit you add it to your local repository. With git push you add the changes to a remote repository


### Clone this repository and add a file with the answers to these questions to the directory of your class. Name it 'AnswersFromYourName.md' Make sure to add a pull request and make some class mates review it!
