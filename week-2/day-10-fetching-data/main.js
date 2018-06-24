// Exercise: Copy the above snippet into a new JavaScript file on your computer.
// Now write some code that calls getDocument and then (using the callback) loads
// the related author using getAuthor. Print the name of the author to the screen using console.log.
//
// const documents = {
//     1: {content: "I am a document", authorId: 1},
//     2: {content: "I am also a document", authorId: 2},
//     3: {content: "You guessed it!", authorId: 2}
// }
// const authors = {
//     1: {name: "Adam"},
//     2: {name: "Dave"}
// }
//
// function getDocument(documentId, callback) {
//     function loadComplete() {
//       console.log('We got the document, now we get the author');
//       callback(documents[documentId]);
//     }
//     setTimeout(loadComplete, 1000)
// }
//
// function getAuthor(authorId, callback) {
//     function loadComplete() {
//       // callback becomes console.log
//       // console.log(authors[authorId])
//         callback(authors[authorId]);
//     }
//     setTimeout(loadComplete, 1000)
// }
//
//
// const myExampleCallback = (document) => {
//   getAuthor(document.authorId, console.log)
// };
// // Now write some code that calls getDocument X
// getDocument(2, myExampleCallback)
//
//


// //###################
// Writing the same example using promises


// Your solution to the previous exercise might have looked
// something like this...

// getDocument(1, document => {
//     getAuthor(document.authorId, author => {
//         //console.log(author.name)
//     })
// })

// This is what using the re-written Promise-enabled functions
// would look like...

//getDocument(1)
  //.then(document => getAuthor(document.authorId)) //these callback functions return promises
  //.then(author => console.log(author.name)) //then == is a method which takes callback as a parameter



  //####################
  //Chain some callback


// const randomNumberInAPromise = Promise.resolve(Math.random())
// randomNumberInAPromise
//   .then(number => {
//     //console.log(number);
//     return number;
//   })
//   .then(number => {
//     let newNumber = number + 10;
//     //console.log(newNumber);
//   })



//####################
//Making promises

const documents = {
    1: {content: "I am a document", authorId: 1},
    2: {content: "I am also a document", authorId: 2},
    3: {content: "You guessed it!", authorId: 2}
}
const authors = {
    1: {name: "Adam"},
    2: {name: "Dave"}
}


const getDocument = (documentId) => {
  return new Promise((resolve, reject) => {
    function loadComplete(document) {
      if (documents[documentId] === undefined) {
        reject('Document not found')
      }
      resolve(documents[documentId])
    }
    setTimeout(loadComplete, 1000)
  })
}

const getAuthor = (authorId) => {
  //console.log(authorId);
  return new Promise((resolve, reject) => {
    function loadComplete(author) {
      if (authors[authorId] === undefined) {
        reject('Author not found')
      }
      resolve(authors[authorId])
    }
    setTimeout(loadComplete, 1000)
  })
}

getDocument(2)
  .then(document => getAuthor(document.authorId))
  .then(author => console.log(author))
  .catch(error => console.log(error))
