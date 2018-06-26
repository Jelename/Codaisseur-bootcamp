const express = require('express')

const app = express()

// app.get('/do-something', (request, response) => {
//     console.log(`I'll do something, I promise!`)
//     response.send(`I'll do something, I promise!`)
//   })

const usersById = {
    42: {
      id: 42,
      firstName: 'Alice',
      lastName: 'Carroll',
      birthDate: '1865-11-26'
    },
    43: {
      id: 43,
      firstName: 'Canon',
      lastName: 'Duckworth',
      birthDate: '1834-12-4'
    },
    1: {
      id: 1,
      firstName: 'Codaisseur',
      lastName: 'Student',
      birthDate: '2015-05-22'
    }
  }

  app.listen(4001, () => console.log('Express API listening on port 4001')) //YOU ALWAYS HAVE TO LISTEN FIRST, AND THEN GET THE RESPONSE

//   app.get('/users/:id', (request, response) => {
//     const userId = request.params.id
//     response.send(usersById[userId])
//     console.log(userId)
//   }) //getting various users from our 'database'

app.get('/users/:id', (request, response) => {
    const userId = request.params.id
    const user = usersById[userId]
  
    if (user) {
      response.send(user)
    } else {
      response.status(404).send({
        message: 'User not found'
      })
    }
  }) //sending a 404 message that user is not found

 


