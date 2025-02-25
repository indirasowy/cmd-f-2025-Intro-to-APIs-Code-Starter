document.addEventListener("DOMContentLoaded", async () => {
    const apiKey = "YOUR-API-KEY"; // replace with your api key
    const dogNames = [ "Golden Retriever", "Labrador Retriever", "German Shepherd", "Welsh Corgi", "Dachshund", "Shiba Inu", "French Bulldog", "Chihuahua"];
    
    // TODO: make a call to the following URL https://api.api-ninjas.com/v1/dogs?name={DOG NAME} and return data
    // HINT: use dogNames.map() function to fetch data for each of the given dogs
    
});

function populateDogCards(dogs) {
    dogs.forEach((dog, index) => {
        if (document.getElementById(`dogImage${index + 1}`)) {
            document.getElementById(`dogImage${index + 1}`).src = dog.image_link;
            document.getElementById(`dogImage${index + 1}`).alt = dog.name;
            document.getElementById(`dogName${index + 1}`).textContent = dog.name;
            document.getElementById(`dogLife${index + 1}`).textContent = `${dog.min_life_expectancy} - ${dog.max_life_expectancy} years`;
            document.getElementById(`dogEnergy${index + 1}`).textContent = dog.energy;
            document.getElementById(`dogTrain${index + 1}`).textContent = dog.trainability;
        }
    });
}