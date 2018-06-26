const express = require('express')

const app = express()

// const usersById = {
//     42: {
//       id: 42,
//       firstName: 'Alice',
//       lastName: 'Carroll',
//       birthDate: '1865-11-26'
//     },
//     43: {
//       id: 43,
//       firstName: 'Canon',
//       lastName: 'Duckworth',
//       birthDate: '1834-12-4'
//     },
//     1: {
//       id: 1,
//       firstName: 'Codaisseur',
//       lastName: 'Student',
//       birthDate: '2015-05-22'
//     }
//   }

const usersById = 
    {
        "users": [
        {
            "id": 1,
            "firstName": "Codaisseur'",
            "lastName": "Student",
            "birthDate": "2000-01-01"
        }
        ]
    }//this way we are using 'envelope', returned is an JSON object that contains an array

  app.listen(4001, () => console.log('Express API listening on port 4001'))

//   app.get('/users', (request, response) => {
//     response.send(usersById)
//   })//this ways we are returning the userId object, with property names (the whole object)

// app.get('/users', (request, response) => {
//     const users = Object.values(usersById)
//     response.send(users)
//   })//this way we are returning just values, in an array

app.get('/users', (request, response) => {
    const users = Object.values(usersById)
    response.send({ users: users }) //object literal property value ({users}), shorthand for ({ users: users })
  })    