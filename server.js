// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes

const express = require('express');

// Start up an instance of app

const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;

// Callback to debug

// Initialize all route with a callback function

const server = app.listen(port, listening);

function listening() {
    console.log("server running");
    console.log(`running on localhost: ${port}`);
};

// Callback function to complete GET '/all'

app.get('/all', function (req, res) {
    res.send(projectData);
})

// Post Route

const weatherData =[];

app.post('/add', addData);

function addData (res, req) {
    console.log(req.body)
    let newEntry = {
        temp: req.body.main.temp,
        date: req.body.date,
        input: req.body.input,
        zip: req.body.zip
    }
    console.log('Posted data = ' + newEntry[0]);

    projectData.push(newEntry)
    res.send(weatherData);
    console.log(weatherData)
}

