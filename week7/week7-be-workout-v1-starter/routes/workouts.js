const express = require('express');
const {
  getWorkouts, 
  getWorkout, 
  createWorkout, 
  deleteWorkout, 
  updateWorkout
} = require('../controllers/workoutController');

const router = express.Router();

/**
 * @swagger
 * /api/workouts:
 *   get:
 *     summary: Get all workouts
 *     description: Retrieve a list of all workouts
 *     responses:
 *       200:
 *         description: List of workouts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Workout'
 */
router.get('/', getWorkouts);

/**
 * @swagger
 * /api/workouts/{id}:
 *   get:
 *     summary: Get a single workout by ID
 *     description: Retrieve a workout by its unique ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the workout to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single workout
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Workout'
 *       404:
 *         description: Workout not found
 */
router.get('/:id', getWorkout);

/**
 * @swagger
 * /api/workouts:
 *   post:
 *     summary: Create a new workout
 *     description: Add a new workout to the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Workout'
 *     responses:
 *       201:
 *         description: The created workout
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Workout'
 *       400:
 *         description: Invalid input data
 */
router.post('/', createWorkout);

/**
 * @swagger
 * /api/workouts/{id}:
 *   delete:
 *     summary: Delete a workout by ID
 *     description: Remove a workout from the database using its unique ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the workout to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Workout deleted
 *       400:
 *         description: Invalid ID provided
 *       404:
 *         description: Workout not found
 */
router.delete('/:id', deleteWorkout);

/**
 * @swagger
 * /api/workouts/{id}:
 *   patch:
 *     summary: Update a workout by ID
 *     description: Modify an existing workout using its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the workout to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Workout'
 *     responses:
 *       200:
 *         description: The updated workout
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Workout'
 *       400:
 *         description: Invalid ID or input data
 *       404:
 *         description: Workout not found
 */
router.patch('/:id', updateWorkout);
/**
 * @swagger
 * components:
 *   schemas:
 *     Workout:
 *       type: object
 *       required:
 *         - title
 *         - reps
 *         - load
 *       properties:
 *         id:
 *           type: string
 *           description: The workout's unique ID
 *         title:
 *           type: string
 *           description: The title of the workout
 *         reps:
 *           type: integer
 *           description: The number of repetitions
 *         load:
 *           type: integer
 *           description: The weight used in the workout
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The creation date of the workout
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The last update date of the workout
 */

module.exports = router;
