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

const data =[];

app.post('/add', addData);

function addData (res, req) {
    let newData = req.body;
    let newEntry = {
        temp: newData.temp,
        date: newData.date,
        input: newData.input,
        zip: newData.zip
    }
    console.log('Posted data = ' + newEntry[0]);

    projectData.push(newEntry)
    res.send(projectData);
    console.log(projectData)
}

/*
function addData (req, res) {
    data.push(req.body);
    console.log(data);
}
*/

/*
function addData (req, res) {
    let data = req.body;
    projectData["temperature"] = data.temperature;
    projectData["date"] = data.date;
    projectData["user response"] = data.userResponse;
    data.push(req.body);
    console.log(data);
};
*/
