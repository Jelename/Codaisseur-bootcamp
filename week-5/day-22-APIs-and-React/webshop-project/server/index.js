const express = require('express')
const app = express()
var body = require('body-parser')

var Sequelize = require('sequelize')
var sequelize = new Sequelize('postgres://postgres:secret@localhost:5431/postgres')//sequelize connection code with Postgres server

app.use(body())

app.listen(4001, () => console.log('Express API listening on port 4001')) //basic Express setup

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
    next()
  }) //addition to support CORS request (when server and frontend run on different locations)

  const Product = sequelize.define('product', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    image: Sequelize.STRING
  }, {
    tableName: 'products',
    timestamps: false
  }) //sequelize model - representation of the schema in database. They define in JS what is defined in database

  Product.findById(2).then(product => console.log(JSON.stringify(product)))

  app.get('/products', (request, response) => {
    sendResponse(Product.findAll({
      attributes: ['id', 'name', 'price']
    }), response)
  })
  
  app.get('/products/:id', (request, response) => {
    sendResponse(Product.findById(request.params.id), response)
  })
  
  
  const sendResponse = (promise, response) => {
    promise.then(result => {
      if(result) {
        response.send(result)
      } else {
        response.status(404).end()
      }
    })
    .catch(fail(response))
    }
  
  
  const fail = response => err => {
    console.log(err)
    response.status(500).send(JSON.stringify(err))
  }
  
  
  app.post("/products", (req, res) => {
   Product.create(req.body).then(
     result => res.send(result)
   )
   .catch(err => {
     res.status(500).send(JSON.stringify(err))
   })
  })