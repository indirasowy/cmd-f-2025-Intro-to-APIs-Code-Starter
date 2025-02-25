document.addEventListener("DOMContentLoaded", async () => {
    const apiKey = "YOUR-API-KEY"; // replace with your api key
    const dogNames = [ "Golden Retriever", "Labrador Retriever", "German Shepherd", "Welsh Corgi", "Dachshund", "Shiba Inu", "French Bulldog", "Chihuahua"];
    
    try {
        const dogData = await Promise.all(dogNames.map(async (name) => {
            const response = await fetch(`https://api.api-ninjas.com/v1/dogs?name=${encodeURIComponent(name)}`, {
                headers: { 'X-Api-Key': apiKey }
            });
            if (!response.ok) {
                throw new Error(`Failed to fetch data for ${name}`);
            }
            const data = await response.json();
            return data.length ? data[0] : null;
        }));
        
        populateDogCards(dogData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
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