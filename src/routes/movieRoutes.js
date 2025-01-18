const express = require('express');
const router = express.Router();
const {
    createMovie,
    getAllMovies,
    getMovieById,
    updateMovie,
    deleteMovie
} = require('../controllers/movieController');

/**
 * @swagger
 * /api/films:
 *   get:
 *     summary: Obtiene todas las películas
 *     tags: [Películas]
 *     responses:
 *       200:
 *         description: Lista de películas
 *   post:
 *     summary: Crea una nueva película
 *     tags: [Películas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 */
router.route('/')
    .get(getAllMovies)
    .post(createMovie);

/**
 * @swagger
 * /api/films/{id}:
 *   get:
 *     summary: Obtiene una película por ID
 *     tags: [Películas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la película
 */
router.route('/:id')
    .get(getMovieById)
    .put(updateMovie)
    .delete(deleteMovie);

module.exports = router;