//##################
//fetching the other pages
// const request = new XMLHttpRequest()
// request.addEventListener("load", function() {
//   document.body.innerHTML =
//     "<pre>" +
//     JSON.stringify(JSON.parse(this.responseText), null, " ") +
//     "</pre>"
// })
// request.open("GET", "https://swapi.co/api/people/1/")
// request.send()




// fetch("https://swapi.co/api/people/2/")
//   .then(response => response.json())
//   .then(myJson => {
//     document.body.innerHTML =
//       "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"
//   })


  // Exercise: Use the Fetch API to call https://swapi.co/api/people/3/.
  //Then from the response object, get the URL in the property homeworld
  //and fetch that URL as well. Finally, console.log the name of the planet.
  //Do all of this in a single chain of promises.

  fetch("https://swapi.co/api/people/3//")
    .then(response => response.json())
    .then(myJson => {
      document.body.innerHTML =
        "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"
    })


//
// fetch("https://swapi.co/api/people/3/")
//   .then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error('Request failed!');
//   }, networkError => console.log('Failed request!'))
//   .then(myJson => {
//     document.body.innerHTML =
//       "<pre>" + JSON.stringify(myJson, null, "") + "</pre>"
//   })



  // fetch('https://api-to-call.com/endpoint')
  // .then(response => {
  // if (response.ok) {
  //   return response.json();
  // }
  // throw new Error('Request failed!');
  // }, networkError => console.log(networkError.message))
  // .then(jsonResponse => {
  // //code to execute with jsonResponse;
  // });
