const request = require('superagent')

request.get('https://dog.ceo/api/breeds/list/all')
    .then(response => {
        const breedsObject = response.body.message
        const arrayOfBreeds = Object.keys(breedsObject)

        const threeBreeds = arrayOfBreeds.slice(0,3)
        console.log(threeBreeds)

        const threePromises = threeBreeds
            .map(breed => request.get(`https://dog.ceo/api/${breed}/image/random`))
        
        console.log(threePromises)

        const singlePromise = Promise.all(threePromises)

        return singlePromise
    })
    .then(threeResponses => {
        return threeResponses.map(response => {
          console.log(response.body.message)
          const randomImage = response.body.message
          return randomImage
        })
      })
    .then(arrayOfRandomImages => console.log(arrayOfRandomImages))




    //this is the similar example for getting one user 
//     requestApi('/users')
//   .then(list => {
//     const userId = list[0].id
//     return requestApi(`/users/${userId}`)
//   })
//   .then(detailedUser => {
//     res.send(`Hello, your age is ${detailedUser.age}`)
//   })
//   .catch(err => res.status(500).send(`Something wrong!`))