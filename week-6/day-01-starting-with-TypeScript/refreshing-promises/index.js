// //sleeping promises

// Create a function that accepts one argument, a number of milliseconds,
// and returns a promise that will resolve in x milliseconds using setTimeout


function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms)
    }) 
  };


// //   function sleep(ms) {
// //     return new Promise(resolve => setTimeout(resolve, ms))
// //   }; //this is the same like the first one but shorter

// //   const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
//  //this pne is even shorter

  sleep(2000)
    .then(() => console.log('Done!'))



//sleeping promise 2

// Create another function that also accepts one argument (number of
// milliseconds to sleep) but that rejects half of the time, using Math.random

function sleep(ms) {
    return new Promise(function (resolve, reject) {
        if (Math.random()> 0.5) {
            //half of time this
            setTimeout(resolve, ms)
        }
        else {
            //half of time this:
            reject()
        }
    }) 
  };

  sleep(2000)
    .then(() => console.log('Done!'))
    .catch(() => console.log('Something went wrong'))