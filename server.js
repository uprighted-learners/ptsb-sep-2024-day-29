// import express to make a server
const express = require('express')

// create an instance of express
const app = express()

// create a port to listen to
const PORT = 5500;

// serve the static files
app.use(express.static("public"))

// create a route
app.get("/hi-mom", (request, response) => {
    response.send("hey mom!")
})

// listen on the port
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})