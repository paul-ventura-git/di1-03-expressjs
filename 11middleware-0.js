// Middleware functions are functions that have access to:
//  the request object (req), 
//  the response object (res), 
//  and the next function 
// in the application’s request-response cycle. 
// The next function is a function in the Express router which, when invoked, 
// executes the middleware succeeding the current middleware.

// If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. 
// Otherwise, the request will be left hanging.

const express = require('express')
const app = express()

app.get('/', function(req, res, next) {
  next();
})

app.listen(3000)

//////////////////////////////////////////

// Configurable middleware can be used as shown below.

const mw = require('./my-middleware.js')

app.use(mw({ option1: '1', option2: '2' }))