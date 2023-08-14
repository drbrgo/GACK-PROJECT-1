
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

      // Here is the HTML formatting for our mission target div.
let missionTarget = document.getElementbyId("missionTarget");
    missionTarget.innerHTML =
`<h2>Mission Destination</h2>
<ol>
<li>Name: ${json.name}</li>
<li>Diameter: ${json.diameter}</li>
<li>Star: ${json.star}</li>
<li>Distance from Earth: ${json.distance}</li>
<li>Number of Moons: ${json.moons}</li>
</ol>
<img src="${json.imageUrl}">`;
}

function validateInput(testInput) {

    if (testInput === ""){
        return "Empty";
    } else if (isNan(Number(testInput))){
        return "Not a Number";
    } else{
        return "Is a Number";
    }
};

function formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass) {

    if (validateInput(pilotName) === "Empty" || validateInput(copilotName) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
        alert("All fields are required!");
        event.preventDefault();
    }   
    if (validateInput(pilotName) !=="Not a Number"|| validateInput(copilotName) !== "Not a Number"){
        alert("Letters only");
        event.preventDefault();
    }
    if (validateInput(fuelLevel) !== "Is a Number" || validateInput(cargoMass)!== "Is a Number"){
        alert("Numbers only");
        event.preventDefault();
    }
}   
    
 document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName} is ready for launch`;
 document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotName} is ready for launch`;

if (fuelLevel < 10000){
    
    document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey";
    document.getElementById("launchStatus").style.color = "red";
    document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        event.preventDefault();
    
}

if (cargoMass > 10000){

    document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById("cargoStatus").innerHTML = "Dat mass doe";
    document.getElementById("launchStatus").style.color = "#C7254E";
    document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        event.preventDefault();

}

if (fuel >= 10000 && cargo <= 10000){
    
    document.getElementById("launchStatus").style.color ="#4196A";
    document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
    document.getElementById("faultyItems").style.visibility = "hidden";
    

}

async function myFetch() {

    let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    let data = await planetsReturned.json();
        return data;
}

function pickPlanet(planets) {
    let randPlan = Math.floor(Math.random() * results.length);  
        return planets[randPlan];
}


module.exports.addDestinationInfo = addDestinationInfo;
        module.exports.validateInput = validateInput;
        module.exports.formSubmission = formSubmission;
        module.exports.pickPlanet = pickPlanet;
        module.exports.myFetch = myFetch;
