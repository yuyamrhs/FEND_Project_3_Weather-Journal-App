/* Global Variables */

// Personal API Key for OpenWeatherMap API

let baseURL = 'api.openweathermap.org/data/2.5/weather?zip='
let apiKey = '20f97877f6c23a060b2bc99fbad88f6'

/*
API call:
api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}
*/

// Event listener to add function to existing HTML DOM element

document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */

function performAction(e){
    const newZip = document.getElementById('zip').value;
    getZip(baseURL, newZip, apiKey)
}

/* Function to GET Web API Data*/

const getZip = async (baseURL, zip, key) => {
    const res = await fetch(baseURL + zip + key)
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

.then(function(data){
    console.log(data);
    postData('/add', {temp: data.temp, date: data.date, input: input})
}

)


