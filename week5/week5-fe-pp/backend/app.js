require('dotenv').config()
const express = require("express");
const app = express();
const jobRouter = require("./routes/jobRouter");
const { unknownEndpoint,errorHandler } = require("./middleware/customMiddleware");
const connectDB = require("./config/db");
const cors = require("cors");

// Middlewares

// Cors enables communication between frontend and backend,
// by allowing or restricting requests from web pages hosted 
// on one domain to access resources hosted on another domain.
app.use(cors())
app.use(express.json());

connectDB();

// Use the jobRouter for all "/jobs" routes
app.use("/api/jobs", jobRouter);

app.use(unknownEndpoint);
app.use(errorHandler);


app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})  
