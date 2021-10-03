const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const app = express();

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Library API',
      version: '1.0.0'
    }
  },
  apis: ['app.js'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
// console.log(swaggerDocs);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/**
 * @swagger
 * /drones:
 *   get:
 *      description: Get all Drones
 *      responses:
 *        200:
 *          description: Success
 *
  */

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
