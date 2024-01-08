


window.addEventListener("load", function () {



        // Set listedPlanetsResponse equal to the value returned by calling myFetch()

planetsReturned();

let listedPlanetsResponse = 
console.log(listedPlanetsResponse);
let listedPlanets = listedPlanetsResponse;
            console.log(listedPlanets);
        
        
let finalPlanet = pickPlanet(listedPlanets);
// let document;

addDestinationInfo(document, finalPlanet);

});

                // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination

    //form and formsub

// window.addEventListener("load", function () {
const form = document.querySelector("form");

// form.addEventListener("submit", function(event)

document.addEventListener("click", function (event){

    // if (event.target.id === ""
        let pilotName = document.querySelector("input[name=pilotName]").value;
        let copilotName = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;


    formSubmission(document, pilotName, copilotName, fuelLevel, cargoMass);
        // event(preventDefault)();
});
;

