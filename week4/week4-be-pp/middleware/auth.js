const express = require('express')

const router = express.Router()


function loggingMiddleware(req, res, next) {
    console.log("Inside Middleware")
    console.log(`${new Date().toISOString()}: ${req.originalUrl}`)
    next();
  }

  function authorizeUsersAccess(req, res, next){
    const admin = req.query.admin;
    if(admin==='true'){
        req.admin = 'true'
        next()
    }
    else{
        res.status(403).json('Unauthorized access.')
    }
  }

  module.exports = {
    loggingMiddleware,
    authorizeUsersAccess
};
