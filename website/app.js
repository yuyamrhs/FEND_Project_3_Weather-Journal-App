/* Global Variables */

// Personal API Key for OpenWeatherMap API

let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
let apiKey = '&appid=20f97877f6c23a060b2bc99fbad88f6e'

// Event listener to add function to existing HTML DOM element

document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */

function performAction(e){
    // Select the actual value of an HTML input to include in POST
    const feelings = document.getElementById('feelings').value;

    // an API call
    const newZip = document.getElementById('zip').value;
    getZip(baseURL, newZip, apiKey)
    // New Syntax!
    .then(function(data){
        console.log(data)
      // Add data to POST request
      postData('/add', {temp:data.main.temp, date:newDate, input:feelings});
      // Update UI
      updateUI()
    })
}

/* Function to GET Web API Data*/

const getZip = async (baseURL, newZip, apiKey) => {
    const res = await fetch(baseURL + newZip + apiKey)
    try {
        const data = await res.json();
        console.log(data)
        return data;
    }   catch(error) {
        console.log("error", error);
        // appropriately handle the error
    }
}

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

/* Function to POST data */

const postData = async ( url = '', data = {})=>{
    console.log(data);
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        
        try {
            const newData = await response.json();
            console.log(newData);
            return newData;
        }catch(error) {
        console.log("error", error);
        }
}

// Update UI

const updateUI = async () => {
    const request = await fetch('/all');
    try{
      const allData = await request.json();
      console.log(allData);
      document.getElementById('date').innerHTML = allData[0].date;
      document.getElementById('temp').innerHTML = allData[0].temp;
      document.getElementById('content').innerHTML = allData[0].input;
  
    }catch(error){
      console.log("error", error);
    }
  }