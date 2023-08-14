// Write your JavaScript code here!

window.addEventListener("load", function () {


let listedPlanets;
        // Set listedPlanetsResponse equal to the value returned by calling myFetch()
let listedPlanetsResponse = myFetch();
        listedPlanetsResponse.then(function (result) {
            listedPlanets = result;
            console.log(listedPlanets);
        }).then(function () {
            console.log(listedPlanets);

listedPlanetsResponse.then(function(result) {
    listedPlanets = result;

let selectedPlanet = pickPlanet(listedPlanets);

addDestinationInfo(document, selectedPlanet);

});

})
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
        event.preventDefault();
});
});

