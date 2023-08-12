// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    window.addEventListener("load", function () {
console.log("destination loaded");
let missionDest = document.querySelectorAll("#mainTarget");
for (let i=0; i<missionDest.length; i++){
    missionDest[i].load += "Test Destination Info!"
}
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    
}










function validateInput(testInput) {

    // let validNumber = true;
    // if (numQuestions.isNan(value)) {
    //     alert("Please enter a number");
    //     event.preventDefault();
    // }

    // let validLetter = true;
    // if (isNaN(pilotName.value) || isNaN(copilotName.value)) {
    //     alert("Please use letters");
    //     event.preventDefault();
    // }
    // }
    // let completeFields = true;
    // for (let i in allFields)
    //     if (allFields[i].value || !validLetter && !validNumber) {
    //         alert("Please complete all fields");
    //         event.preventDefault();
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    window.addEventListener("load", function () {
        let form = document.querySelector("form");
        form.addEventListener("submit", function (event) {
            // let usernameInput = document.querySelector("input[name=username]");
            // let teamName = document.querySelector("input[name=team]");





        }

async function myFetch() {
                let planetsReturned;

                planetsReturned = await fetch().then(function (response) {
                });

                return planetsReturned;
            }

function pickPlanet(planets) {
            }

module.exports.addDestinationInfo = addDestinationInfo;
        module.exports.validateInput = validateInput;
        module.exports.formSubmission = formSubmission;
        module.exports.pickPlanet = pickPlanet;
        module.exports.myFetch = myFetch;
