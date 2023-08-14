
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {



      // Here is the HTML formatting for our mission target div.

    //needs const that includes json data
    //const planetsReturned?? document.getElementbyId("missionTarget");
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: `${json.name}`` </li>
                     <li>Diameter: `${json.diameter}`</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: `${distance}` </li>
                     <li>Number of Moons: `${moons}`</li>
                 </ol>
                 <img src="">
    
}
   


function validateInput(testInput) {

    if (testInput === ""){
        return "Empty";
    } else if (isNan(Number(testInput))){
        return "Not a Number";
    } else{
        return "Is a Number";
    }
}
;

function formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass) {
   if (validateInput(pilotName) === "Empty" || validateInput(copilotName) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
        alert("All fields are required!");
    }
        if (validateInput(pilotName) !=="Not a Number"|| validateInput(copilotName) !== "Not a Number") {
        alert("Letters only");
       
            }
            if (validateInput(fuelLevel)!== "Is a Number") || (validateInput(cargoMass)!== "Is a Number")
            {
      alert("Numbers only");
            }
        }   
    
document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;

if (fuelLevel < 10000){
    {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey";
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        event.preventDefault();
    }
}

if (cargoMass > 10000){
{
    document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("cargoStatus").innerHTML = "Dat mass doe";
        document.getElementById("launchStatus").style.color = "#C7254E";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        event.preventDefault();
}
}

if (fuel >= 10000 && cargo <= 10000){
    {
    document.getElementById("launchStatus").style.color ="#4196A";
    document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
    document.getElementById("faultyItems").style.visibility = "hidden";
}
}

async function myFetch() {
                let planetsReturned;

                planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let nameOfPlanet = {
        planetName: [],
    }
     


module.exports.addDestinationInfo = addDestinationInfo;
        module.exports.validateInput = validateInput;
        module.exports.formSubmission = formSubmission;
        module.exports.pickPlanet = pickPlanet;
        module.exports.myFetch = myFetch;
