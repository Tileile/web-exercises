const express = require('express')
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  } = require("../controllers/userHandlers.js"); 
  

const route = express.Router()

// GET /Users
route.get("/", getAllUsers);

// POST /Users
route.post("/", createUser)

// GET /Users/:UserId
route.get("/:UserId", getUserById);

// PUT /Users/:UserId
route.put("/:UserId", updateUser);

// DELETE /Users/:UserId
route.delete("/:UserId", deleteUser);

module.exports = route;