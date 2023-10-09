const express = require('express');
const app = express();

const recipe_api = require('./Cocktail_recipe_API(Json).json');
  
const server = app.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;
  
  console.log('Server is working : PORT - ',port);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/get_cocktail_recipe', (req, res) => {
    res.json(recipe_api);
} );