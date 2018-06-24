//1) We are using loops to do a specific task multiple times
  for(let i = 1; i <= 10; i++) {
    console.log(`My favorite food is nachos`);
  }


  let food = 0;
  while(food < 10) {
    console.log('my favorite food');
    food++;
  }

  //2) Console logging the result

  //3)Arrays are JS way of making a list. Ordered collection is collection of elements that have specified position number, index.

  //4)
    let team = ['Jelena', 'team1', 'team2'];

    team.forEach(function(teamMate) {
      console.log(`${teamMate}`);
    });
    //forEach is easier then foor loop because you don't have to think about logic

//5) Loop is the block of code designed to perform specific task multiple times. And it is usually best to be used on arrays. Where is going to preform that task on every element of an array

  //6) We are calling the function multiply and providing it with two arguments 2,3.
      //then, these arguments are accepted by parameters a,b of multiple function, and used inside of it.
      // inside a function's block of code, we are multiplying a * b elements
      // the result of the function is being returned

    //7) using console.log()
    console.log(multiply(2,3));

    //8) Scope refers to from where can variable be accessed. Scope can be global and local
    // variables that are defined outside of the block of code (curly braces) are defined globally
    // variables that are defined inside block of code - inside curly braces, loops and if statements, are defined locally

    //9)

    //10) To make a collection of properties, key-value pairs. These objects can store any data type: strings, numbers, booleans, arrays, functions (called methods), and other objects

    //11)
      let teacher = {
        name = "Jelena",
        favLanguage = "JavaScript",
        teachFunction = "professor"
      }

    //12) Property names are: name, favLanguage, teachFunction
        //property values are: "Jelena", "JavaScript", "professor"

    //13) we are using git to save all the files we are working on and to share them with other people

    //14) git add - git add is adding files on are local Git
        //git commit - is creating changes that are done
        //git push - is pushing those changes to gitHub
