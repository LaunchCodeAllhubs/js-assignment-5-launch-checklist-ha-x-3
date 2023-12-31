// Write your JavaScript code here!
window.addEventListener("load", function() {
    
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
    }).then(function () {
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    let chosenPlanet = pickPlanet(listedPlanets);

    addDestinationInfo(window.document, chosenPlanet.name, chosenPlanet.diameter, chosenPlanet.star, chosenPlanet.distance, chosenPlanet.moons, chosenPlanet.image);
    
    });

    let form = document.querySelector("form");
    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
    let list = document.querySelector("#faultyItems");    
   
    
    form.addEventListener("submit", function(event) {;
        formSubmission(window.document, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);
        event.preventDefault();
    });
});