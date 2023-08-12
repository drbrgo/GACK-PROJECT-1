// Write your JavaScript code here!

const { addDestinationInfo, pickPlanet, formSubmission } = require("./scriptHelper");


window.addEventListener("load", function () {



    let listedPlanets = fetch("https://handlers.education.launchcode.org/static/planets.json").then(function () {
        return Response.json();
    });
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = fetch("https://handlers.education.launchcode.org/static/planets.json").then(function () {
        return Response.json();
        listedPlanetsResponse.then(function (result) {
            listedPlanets = result;
            console.log(listedPlanets);
        }).then(function () {
            console.log(listedPlanets);
            // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        })

    });

    formSubmission(){
        console.log();
    }


//  function init() {
//         let numQuestions = document.getElementsByName("fuelLevel" + "cargoMass");
//     }
//     let form = document.querySelector("form");
//     form.addEventListener("submit", function (event) {
//         let pilotName = document.querySelector("input[name=pilotName]");
//         let copilotName = document.querySelector("input[name=copilotName]");
//         let fuelLevel = document.querySelector("input[name=fuelLevel]");
//         let cargoMass = document.querySelector("input[name=cargoMass]");
//         if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass === "") {
//             alert("All fields are required!");
//             event.preventDefault();
//         }




//     });

//     Window.addEventListener("load", function () {
//     const takeOffButton = document.getElementById('takeoff')
//     takeOffButton.addEventListener("click", function () {
//         let takeOff = window.confirm("Confirm Take Off?")
