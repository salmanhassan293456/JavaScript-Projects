// Select the button and result container
const button = document.getElementById('generate-btn');
const result = document.getElementById('result');

// Add an event listener to the button
button.addEventListener('click', () => {
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    // Display the random number in the result container
    result.textContent = `Random Number: ${randomNumber}`;
});
