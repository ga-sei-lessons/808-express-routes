// import the required packages
const express = require('express')

// create an instance of an express app (web server)
const app = express()
const PORT = 8000
// www.ammon.com/

// define express routes ???
app.get('/', (req, res) => {
    // req = an object with info about the incoming request
    // res = an object with info and methods to work with the outgoing response
    console.log('looks like we have a visitor on the / route!')
    res.send('<h1>Hello, World Wide Web! 🌍 </h1>')
})

app.get('/about', (req, res) => {
    // send back our developer bio
    res.send('Hey, I am a software engineer, and I am learning all about web servers!')
})

// three (most important) parts of data that can be sent on the incoming request
// 1. Query Parameters -- www.base_url.com?key=value&fruit=banana
    // console.log(req.query.key) // value
    // console.log(req.query.fruit) // banana
// 2. Url route parameters -- variables in the routes's path
    // express definition /:varaible/:anotherVariable
    // www.base_url.com/taco/banana
    // console.log(req.params.variable) // taco
    // console.log(req.params.anotherVariable) // banana
// 3. request body -- payload of data when there is a POST/PUT/PATCH
    // form data that is on req.body (all form inputs wil show up here)

// query params example (often used for GET request, READ cruds and searching)
// http://localhost:8000/search?fruit=banana&food=taco
app.get('/search', (req, res) => {
    console.log('req.query', req.query)
    res.send(`the fruit is: ${req.query.fruit}`)
})

// GET -- read something 
// /user -- table we a reading From
// /:userName -- who we are reading


// route parameters (variables/wildcards in a url)
// /:varaibleName defines a route parameter
// express exposes these on req.params object
app.get('/greet/:firstName/:lastName', (req, res) => {
    console.log('req.params', req.params)
    res.send(`Hello! ${req.params.firstName} ${req.params.lastName}`)
})

// little route addition calculator
app.get('/add/:numOne/:numTwo', (req, res) => {
    console.log('numOne:', req.params.numOne, 'numTwo:', req.params.numTwo)
    res.send(`${req.params.numOne} + ${req.params.numTwo} = ${Number(req.params.numOne) + Number(req.params.numTwo)}`)
})

// tell express to listen on a port for incoming http requests
app.listen(PORT, () => {
    // this cb is invoked when the server gets up and running
    console.log(`express app is up and running on port ${PORT}`)
})