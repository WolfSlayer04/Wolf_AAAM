const mongoose = require('mongoose');

/**
 * @swagger
 * components:
 *   schemas:
 *     Movie:
 *       type: object
 *       required:
 *         - titulo
 *         - director
 *         - genero
 *         - puntuacion
 *         - rating
 *         - anioPublicacion
 *       properties:
 *         titulo:
 *           type: string
 *           description: Título de la película
 *         director:
 *           type: string
 *           description: Director de la película
 *         genero:
 *           type: string
 *           description: Género de la película
 *         puntuacion:
 *           type: number
 *           description: Puntuación de la película (0-10)
 *         rating:
 *           type: string
 *           description: Clasificación de la película
 *         anioPublicacion:
 *           type: number
 *           description: Año de publicación de la película
 */

const movieSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: [true, 'El título es obligatorio']
    },
    director: {
        type: String,
        required: [true, 'El director es obligatorio']
    },
    genero: {
        type: String,
        required: [true, 'El género es obligatorio']
    },
    puntuacion: {
        type: Number,
        required: [true, 'La puntuación es obligatoria'],
        min: [0, 'La puntuación mínima es 0'],
        max: [10, 'La puntuación máxima es 10']
    },
    rating: {
        type: String,
        required: [true, 'El rating es obligatorio']
    },
    anioPublicacion: {
        type: Number,
        required: [true, 'El año de publicación es obligatorio']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Movie', movieSchema);