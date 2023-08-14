// Write your JavaScript code here!

const { addDestinationInfo, pickPlanet, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function () {


let listedPlanets = myFetch();
        // Set listedPlanetsResponse equal to the value returned by calling myFetch()
let listedPlanetsResponse = fetch("https://handlers.education.launchcode.org/static/planets.json").then(function () {
        return Response.json();
});
        listedPlanetsResponse.then(function (result) {
            listedPlanets = result;
            console.log(listedPlanets);
        }).then(function () {
            console.log(listedPlanets);

let selectedPlanet = pickPlanet(listedPlanets);

addDestinationInfo(document, selectedPlanet);

});

});
                // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination

    //form and formsub

window.addEventListener("load", function () {

let form = document.querySelector("form");
form.addEventListener("submit", function(event){

        let pilotName = document.querySelector("input[name=pilotName]").value;
        let copilotName = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;


    formSubmission(document, pilotName, copilotName, fuelLevel, cargoMass);
        
});
});

