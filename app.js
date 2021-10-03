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

// Drones Get route

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

// Route to create new drone

/**
 * @swagger
 * /drones:
 *   post:
 *      description: Create a new drone
 *      parameters:
 *      - name: model
 *        description: model of the drone
 *        in: formData
 *        required: true
 *        type: string
 *      responses:
 *        201:
 *          description: Created
 *
  */


app.post('/drones', (req, res) => {
  res.status(201).send();
});

app.listen(5000, () => console.log("listening on 5000"));
