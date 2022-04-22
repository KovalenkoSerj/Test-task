const express = require('express');
const dataRoute = require('./routes/data')
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(express.json()) // app/json


app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})
app.use(express.static(path.join(__dirname, 'data')))


app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use('/', dataRoute);


const PORT = 8080;
const start = async () =>  {
    try {
      app.listen(PORT);
      console.log(`Server started on ${PORT}`)

    } catch (error) {
      console.log('Server error', error.message)
      process.exit(1)
    }
  }
  
  start()