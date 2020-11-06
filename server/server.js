const express = require('express')
var cors = require('cors')
const app = express();
const port = process.env.PORT || 8000;
var fetch = require('node-fetch')
const mockdata = require("./mochdata.json")

app.use(cors())

global.fetch = fetch;

// API
require('dotenv').config();
const ID = process.env.API_ID;
const KEY = process.env.API_KEY;

const baseURL = `https://api.edamam.com/search?&app_id=${ID}&app_key=${KEY}&to=10&health=vegan`

// endpoints
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

app.get('/hello/:vegetable', (req, res) => {
  let searchQuery = req.params.vegetable;
  fetch(`${baseURL}&q=${searchQuery}`, { method: 'GET' })
  .then((res) =>  res.json())
  .then((json) => res.json(json.hits)
  )});

app.get('/api/courses/:id', (req, res) => {
  res.send({express: req.params.id});
});