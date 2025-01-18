const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Películas',
      version: '1.0.0',
      description: 'API REST para gestionar información de películas',
      contact: {
        name: 'Alejandro Wolf',
        url: 'https://github.com/WolfSlayer04'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor de desarrollo'
      }
    ]
  },
  apis: ['./src/routes/*.js', './src/models/*.js']
};

const specs = swaggerJsdoc(options);
module.exports = specs;