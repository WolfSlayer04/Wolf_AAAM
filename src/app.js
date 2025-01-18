const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Configuración Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Importar rutas
const movieRoutes = require('./routes/movieRoutes');

// Montar rutas
app.use('/api/films', movieRoutes);

// Ruta principal
app.get('/', (req, res) => {
    res.json({
        message: 'Bienvenido a la API de Películas',
        documentation: '/api-docs',
        endpoints: {
            peliculas: '/api/films'
        }
    });
});

// Verificar conexión MongoDB
mongoose.connection.on('connected', async () => {
    console.log('Conexión a MongoDB establecida');
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('Colecciones en la base de datos:');
    collections.forEach(collection => {
        console.log(collection.name);
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
    console.log(`Documentación disponible en http://localhost:${PORT}/api-docs`);
});

process.on('unhandledRejection', (err) => {
    console.log('Error no manejado:', err.message);
    process.exit(1);
});