const express = require("express");
const app = express();
const  tourRoutes =  require("./routes/tourRoutes");
const userRoutes = require('./routes/userRoutes')
const morgan = require('morgan');
const {
  loggingMiddleware,
  authorizeUsersAccess
} 
= require("./middleware/auth");

// Middleware logger
app.use(morgan('tiny'));

// Middleware to parse JSON
app.use(express.json());

app.use(loggingMiddleware)

// ROUTES
app.use('/api/tours', tourRoutes)

app.use('/api/users', authorizeUsersAccess ,userRoutes)

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});