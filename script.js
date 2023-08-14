// Write your JavaScript code here!

const { addDestinationInfo, pickPlanet, formSubmission } = require("./scriptHelper");


window.addEventListener("load", function () {


        let listedPlanets;
        // Set listedPlanetsResponse equal to the value returned by calling myFetch()
        let listedPlanetsResponse = myFetch();
        listedPlanetsResponse.then(function (result) {
            listedPlanets = result;
            console.log(listedPlanets);
        }).then(function () {
                console.log(listedPlanets);


                // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

                function planetPicker() {
                        let randomIndex = pickPlanet(listedPlanets);
                     randomIndex = Math.floor(Math.random() * results.length);
                    addDestinationInfo(randomIndex);
    })
    window.addEventListener("load", function () {
let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
        formSubmission(document, pilotName, copilotName, fuelLevel, cargoMass);
event.preventDefault();

    });
});
