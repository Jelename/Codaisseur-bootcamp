# Recap

1) Why would you use a loop? Write me a for & a while loop that prints your favorite food 10 times.
-> Loops allow you to run the same bits of code repeatedly.
```
for(var i = 0; i < 10; i++) {
  console.log("your favorite food");
}
let favFoodCount = 0;

while(favFoodCount < 10) {
  console.log("your favorite food");
  favFoodCount ++;
}
```

2) How do I try out whether my loop is working?
-> Depends on the loop. You either look at the results or run it with a console.log statement that prints something each iteration.

3) What are arrays? What is an ordered collection?
-> Essentially arrays are lists of things that somehow belong together. Although I believe that JS arrays are actually objects under the hood, with the key being the item's index.

-> Ordered collections are collections - such as arrays - where the items are saved in the same order.

4) Write me an array with the names of your team and iterate over them, so all names will be printed out (using for each).
```
const teamNames = ["Sophie", "Vacant spot", "Vacant spot 2"];
teamNames.forEach(name => console.log(name));
```

5) What is the difference between a loop and an array? Why would you use either of them?.
-> Loops run bits of code, arrays don't. You use loops to run code repeatedly and you use arrays to store bits of related information in a specific order.

6) What is happening here?

-> Multiply is declared. It's set to a function. multiply takes 2 arguments(2 and 3). The product of these numbers is returned.

```
 var multiply = function(a, b) {
   return a * b;
 };

 multiply(2, 3)
```

 7) How could we log the arguments of the code above?
-> put "multiply(2,3) in a console.log."

 8) What is ‘scope’?
-> A scope refers to the boundaries within variables exist.

 9) Can I use my vars at the following places?
 -> No, you'll get an error because you are declaring name and codaisseur in scopes where they already exist.
```
 var name = Rembert

 Place A

 var codaisseur = function() {
   Place B
 }


 var codaisseur = function() {
   var name = Rembert
   Place C
 }

Place D
```

10) Why would you use an object?
-> To store bits of related information in key-value pairs.

11) Create an object ‘teacher', that stores the name, favorite language and a teach-function of that teacher that will alert you with some useful knowledge.
```
const teacher = {
  name: "name",
  favoriteLanguage: "lang",
  teach: function() {
    return "some useful knowledge";
  }
}
window.alert(teacher.teach());
```
12) What are the property-names and values of the object you just created?
-> name = "name"
-> favoriteLanguage = "lang"
-> teach = function

13) Why would you use git?
-> For version control and collaboration

14) What is the difference between `git add`,`git commit` and `git push` ?
-> 'Git add' stages files for commit
-> 'Git commit' commits files to your local version of the repo.
-> 'Git push' pushes files to the remote repo.

### Clone this repository and add a file with the answers to these questions to the directory of your class. Name it 'AnswersFromYourName.md' Make sure to add a pull request and make some class mates review it!
