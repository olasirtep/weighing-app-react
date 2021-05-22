'use strict';

const path = require('path'); // For resolving file paths to client directories
const express = require('express'); // Web server
const fs = require('fs'); // Access to filesystem

// Set server to port 3000
const PORT = process.env.PORT || 3001;

// Initialize server
const app = express();

// Create empty list for weighing data
var weighData = [];

var currentWeight = 0;
var currentTotal = 0;

const dataPath = 'server/data.json';

// Try to read previous weighings from JSON file
fs.readFile(dataPath, (err, data) => {
    if (err) throw err;
    weighData = JSON.parse(data);
    console.log(weighData);
});

// Serve frontend files from React build folder
app.use(express.static(path.resolve(__dirname, '../client/build')));

/*
*   DIFFERENT API ENDPOINTS
*/

// Get current weight and total
app.get('/current', (req, res) => {
    res.json({'currentWeight': currentWeight, 'currentTotal': currentTotal});
});

// Get history of weights
app.get('/history', (req, res) => {
    res.json(weighData);
});

// Save weight
app.get('/weigh', (req, res) => {
    console.log("Weigh initiated!");
    // Generate random weight in range of 10kg -> 2000kg
    currentWeight = Math.floor((Math.random()*1991)+10);
    // Add to list and save
    addWeightToList(currentWeight);
    // Add to total
    currentTotal += currentWeight;

    console.log("currentWeight : "+currentWeight);

    // Generate object and serialize to JSON
    let data = {'currentWeight' : currentWeight, 'currentTotal' : currentTotal};
    res.json(data);
});

// Reset weight
app.get('/reset', (req, res) => {
    console.log("Reset initiated!");
    // Reset variables
    currentWeight = 0;
    currentTotal = 0;

    // Generate object and serialize to JSON
    let data = {'currentWeight' : currentWeight, 'currentTotal' : currentTotal};
    res.json(data);
});

// Other endpoints serve React frontend
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

// Open server
app.listen(PORT, () => {
  console.log(`HTTP server listening on ${PORT}`);
});

/*
*   HELPER FUNCTIONS
*/

// Add new weight to list and save list to file
function addWeightToList(weight) {
    let weightObject = {'weight' : weight, 'datetime' : getDateString()};
    weighData.push(weightObject);
    saveWeightList();
}
  
// Saves JSON serialized version of list
function saveWeightList() {
    let json = JSON.stringify(weighData);

    fs.writeFile(dataPath, json, (err) => {
        if (err) throw err;
        console.log('Weight data written to file');
    });
}

// Constructs datetime string in format DD.MM.YYYY HH:mm
function getDateString() {
    var d = new Date();

    var dd = String(d.getDate()).padStart(2, '0');
    var mm = String(d.getMonth() + 1).padStart(2, '0');
    var yyyy = d.getFullYear();

    var hours = String(d.getHours()).padStart(2, '0');
    var minutes = String(d.getMinutes()).padStart(2, '0');

    return dd+"."+mm+"."+yyyy+" "+hours+":"+minutes;
}
