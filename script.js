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

        const imageUrl = ""; // TODO: assign dog image link
        const dogName = ""; // TODO: ssign dog name
        const lifeExpectancy = ""; // TODO: assign life expectancy
        const energyLevel = ""; // TODO: assign energy level
        const trainability = ""; // TODO: assign trainability

        dogCard.innerHTML = `
            <img src="${imageUrl}" alt="${dogName}">
            <h3>${dogName}</h3>
            <p><strong>Life Expectancy:</strong> ${lifeExpectancy} years</p>
            <p><strong>Energy Level:</strong> ${energyLevel}/5</p>
            <p><strong>Trainability:</strong> ${trainability}/5</p>
        `;
    }

    // TODO: Write the fetch call to get data for each dog from the API
    // You should be making a call to the following URL https://api.api-ninjas.com/v1/dogs?name={DOG NAME} and return the data
    dogNames.forEach(function(name, index) {
        // Your fetch call goes here

    });
});
