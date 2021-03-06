const express = require('express')
var cors = require('cors')
const app = express();
const port = process.env.PORT || 8000;
var fetch = require('node-fetch')
const mockdata = require("./mochdata.json")

app.use(cors())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

global.fetch = fetch;

// Api .env
const API_ID="11317cec"
const API_KEY="a1ac6aa08be8a2bb67321a3b474f6f97"

// API
require('dotenv').config();
const ID = process.env.API_ID;
const KEY = process.env.API_KEY;

// const baseURL = `https://api.edamam.com/search?&app_id=${ID}&app_key=${KEY}&to=10&health=vegan`
const baseURL = `https://api.edamam.com/search?&app_id=${API_ID}&app_key=${API_KEY}&to=10&health=vegan`

// endpoints
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

app.get('/food/:vegetable', async (req, res) => {
  try {
  res.header('Access-Control-Allow-Origin', '*');
  let searchQuery = req.params.vegetable;
  const responsData = await fetch(`${baseURL}&q=${searchQuery}`, { method: 'GET' })
  const data = await responsData.json()
  res.json(data.hits);
} catch(err) {
  alert(err); // TypeError: failed to fetch
}
  // const data = mockdata;
  // res.json(data.hits)
});
