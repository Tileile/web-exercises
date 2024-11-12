const Tour = require("../models/tourLib.js");

const getAllTours = (req, res) => {
  res.json(Tour.getAll());
};
 
const createTour = (req, res) => {
  const { name, info, image, price } = req.body;
  const newTour = Tour.addOne(name, info, image, price);
  if (newTour) {
    res.status(201).json(newTour); // 201 Created
  } else {
    res.status(500).json({ message: "Fail to create tour" });
  }
};

const getTourById = (req, res) => {
  const tourId = req.params.tourId;
  const tour = Tour.findById(tourId);
  if (tour) {
    res.status(204).send(); // 204 No Content
  } else {
    res.status(404).json({ message: "Tour not found" });
  }
};

const updateTour = (req, res) => {
  const tourId = req.params.tourId;
  const updatedData = req.body;
  const updatedTour = Tour.updateOneById(tourId, updatedData);
  if (updateTour) {
    res.json(updatedTour);
  } else {
    res.status(404).json({ message: "Tour not found" });
  }
};

const deleteTour = (req, res) => {
  const tourId = req.params.tourId;
  const isDeleted = Tour.deleteOneById(tourId);
  if (isDeleted) {
    res.json({ message: "Deleted successfully" });
  } else {
    res.status(404).json({ message: "Tour not found" });
  }
};

module.exports = {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
};