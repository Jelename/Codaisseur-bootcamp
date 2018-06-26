const express = require('express')
const app = express()

app.listen(4001, () => console.log('Express API listening on port 4001'))

const { Client } = require('pg')

const connectionString = 'postgresql://postgres:secret@localhost:5432/postgres'
const client = new Client({ connectionString })

client.connect()

// app.get('/houses/:id', (request, response) => {
//     const houseId = request.params.id
  
//     client.query('SELECT * FROM houses WHERE id = $1', [houseId], (error, result) => {
//       if (error) {
//         response.status(500).send({
//           message: 'Something went wrong with Postgres!',
//           details: error.message
//         })
//       } else if (result.rows[0]) {
//         response.send(result.rows[0])
//       } else {
//         response.status(404).send({
//           message: 'House not found!'
//         })
//       }
//     })
//   })//getting one house with ID

app.get('/houses', (request, response) => {
    client.query('select * from houses', (error, result) => {
      if (error) {
        response.status(500).send({
          message: 'Something went wrong with Postgres!',
          details: error.message
        })
      } else {
        response.send({
          houses: result.rows
        })
      }
    })
  }) //getting all the houses, the list of houses