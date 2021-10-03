const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const app = express();

app.get('/drones', (req, res) => {
  res.send([
    {
      id: 1,
      model: 'Holystone HS240'
    },

    {
      id: 2,
      model: 'Holystone HS160'
    }
  ])
});


app.listen(5000, () => console.log("listening on 5000"));
