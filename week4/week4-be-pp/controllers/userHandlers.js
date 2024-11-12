const User = require("../models/userLib.js"); // Assuming you renamed the model to 'userLib.js'

// Get all users
const getAllUsers = (req, res) => {
  res.json(User.getAll());
};

// Create a new user
const createUser = (req, res) => {
  const { name, email, password, phone_number, gender, date_of_birth, membership_status } = req.body;
  const newUser = User.addOne(name, email, password, phone_number, gender, date_of_birth, membership_status);
  if (newUser) {
    res.status(201).json(newUser); // 201 Created
  } else {
    res.status(500).json({ message: "Failed to create user" });
  }
};

// Get a user by ID
const getUserById = (req, res) => {
  const userId = req.params.userId;
  const user = User.findById(userId);
  if (user) {
    res.json(user); // 200 OK
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

// Update a user's information by ID
const updateUser = (req, res) => {
  const userId = req.params.userId;
  const updatedData = req.body;
  const updatedUser = User.updateOneById(userId, updatedData);
  if (updatedUser) {
    res.json(updatedUser); // 200 OK
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

// Delete a user by ID
const deleteUser = (req, res) => {
  const userId = req.params.userId;
  const isDeleted = User.deleteOneById(userId);
  if (isDeleted) {
    res.json({ message: "User deleted successfully" }); // 200 OK
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
