const Tour = require("./tourLib");

const getAllTours = (req, res) => {
    const tours = Tour.getAll();
    res.json({ tours });
};

const createTour = (req, res) => {
    const { name, info, image, price } = req.body;
    const newTour = Tour.addOne(name, info, image, price);
    
    if (newTour) {
        res.status(201).json(newTour);
    } else { 
        res.status(400).json({ message: "Failed to create tour." });
    }
};

const getTourById = (req, res) => {
    const tourId = req.params.tourId;
    const tour = Tour.findById(tourId);

    if (tour) {
        res.json(tour);
    } else {
        res.status(404).json({ message: "Tour not found." });
    }
};

const updateTour = (req, res) => {
    const tourId = req.params.tourId;
    const { name, info, image, price } = req.body;
    
    const updatedTour = Tour.updateOneById(tourId, { name, info, image, price });
    const tour = Tour.findById(tourId);

    if (updatedTour) {
        res.json(updatedTour);
    } else if (tour) {
        res.status(400).json({ message: "Data invalid." });
    } else {
        res.status(404).json({ message: "Tour not found." });
    }
};

const deleteTour = (req, res) => {
    const tourId = req.params.tourId;
    const tourDeleted = Tour.deleteOneById(tourId);
    
    if (tourDeleted) {
        res.status(204).json( { message: "Tour deleted successfully" } );
    } else {
        res.status(404).json({ message: "Tour not found." });
    }
};

module.exports = {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
};
