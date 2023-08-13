
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {



      // Here is the HTML formatting for our mission target div.

    //needs const that includes json data
    //const planetsReturned?? document.getElementbyId("missionTarget");
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${json.name} </li>
                     <li>Diameter: ${json.diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="">
    
}
   


function validateInput(testInput) {

    if(testInput === ""){
        return "Empty";
    } else if (isNan(testInput)){
        return "Not a Number";
    } else{
        return "Is a Number";
    }


function formSubmission(document, list, pilot, copilot, fuel, cargo) {
    if validateInput == true;
    alert("Ya dun goofed");
event.preventDefault();
}

if ((validateInput(pilotName) === "Empty" || validateInput(copilotName)=== "Empty"" || validateInput(fuelLevel) === "Empty"" || validateInput(cargoMass) === "Empty"")) {
    {
        alert("Please complete all fields");
            event.preventDefault();
}
}
        if ((validateInput(pilotName)!=="Not a Number"|| validateInput(copilotName)!=="Not a Number")){

            {
        alert("Letters only");
        event.preventDefault();
            }}
            if ((validateInput(fuelAmount)!== "Is a Number") && (validateInput(cargoWeight)!== "Is a Number"))
            {
      alert("Letters only");
        event.preventDefault();}}
       

{/* shuttle requirements here */}


async function myFetch() {
                let planetsReturned;

                planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json");
                    let data = await response.json();
                    //access json in response
                   
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
