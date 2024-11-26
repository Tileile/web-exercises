const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const requireAuth = async (req, res, next) => {
  // verify user is authenticated
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

//   console.log(authorization);
//   console.log(authorization.split(" "));
//   console.log(authorization.split(" ")[0]);
   console.log(authorization.split(" ")[1]);

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);
// Searches User-collection for document that has an id which matches with 
// given argument _id, and if found returns only the id of that document 
// and saves it to req.user/request, so that other routes can access and use it accordingly. 
    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorized" });
  }
};

module.exports = requireAuth;
