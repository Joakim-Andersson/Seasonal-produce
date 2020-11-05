const express = require('express')
const app = express();
const port = process.env.PORT || 8000;


require('dotenv').config();

const ID = process.env.API_ID;
const KEY = process.env.API_KEY;

app.get('/hello', (req, res) => {
  res.send({express: KEY})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
