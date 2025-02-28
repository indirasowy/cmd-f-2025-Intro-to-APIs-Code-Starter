document.addEventListener("DOMContentLoaded", function() {
    const myHeaders = new Headers();
    myHeaders.append("x-api-key", "YOUR-API-KEY"); // replace with your api key

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    const dogNames = [ "Golden Retriever", "Labrador Retriever", "German Shepherd", "Welsh Corgi", "Dachshund", "Shiba Inu", "French Bulldog", "Chihuahua"];

    function displayDogData(index, dogData) {
        const dogCard = document.getElementById("dogCard" + (index + 1));

        const imageUrl = dogData.image_link;
        const dogName = dogData.name;
        const lifeExpectancy = dogData.min_life_expectancy + " - " + dogData.max_life_expectancy;
        const energyLevel = dogData.energy;
        const trainability = dogData.trainability;

        dogCard.innerHTML = `
            <img src="${imageUrl}" alt="${dogName}">
            <h3>${dogName}</h3>
            <p><strong>Life Expectancy:</strong> ${lifeExpectancy} years</p>
            <p><strong>Energy Level:</strong> ${energyLevel}/5</p>
            <p><strong>Trainability:</strong> ${trainability}/5</p>
        `;
    }

    dogNames.forEach(function(name, index) {
        fetch("https://api.api-ninjas.com/v1/dogs?name=" + encodeURIComponent(name), requestOptions) // initiates an HTTP request to the API
            .then(function(response) { // used to handle the response when the API call is successful
                return response.json(); // converts the response from a raw HTTP response into a JavaScript object
            })
            .then(function(data) { // once the data is available from the previous promise, this function runs
                console.log('data', data);
                if (data.length > 0) {
                    displayDogData(index, data[0]); // data[0] is the first dog in the response
                }
            })
            .catch(function(error) {
                console.error("Error fetching data:", error);
            });
    });
});
