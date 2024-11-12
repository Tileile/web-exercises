const express = require('express')
const {
    getAllTours,
    getTourById,
    createTour,
    updateTour,
    deleteTour,
  } = require("../controllers/tourHandlers.js"); 
  

const route = express.Router()

// GET /tours
route.get("/", getAllTours);

// POST /tours
route.post("/", createTour)

// GET /tours/:tourId
route.get("/:tourId", getTourById);

// PUT /tours/:tourId
route.put("/:tourId", updateTour);

// DELETE /tours/:tourId
route.delete("/:tourId", deleteTour);

module.exports = route;