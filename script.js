// Select the buttons and audio elements
const pluhButton = document.getElementById('pluhButton');
const puluButton = document.getElementById('puluButton');
const pluhhheButton = document.getElementById('pluhhhButton');

const pluhSound = document.getElementById('pluhSound');
const puluSound = document.getElementById('puluSound');
const pluhhhSound = document.getElementById('pluhhhSound');

// Add click event listeners for each button
pluhButton.addEventListener('click', () => {
    pluhSound.currentTime = 0; // Reset sound to the start
    pluhSound.play(); // Play the sound
});

puluButton.addEventListener('click', () => {
    puluSound.currentTime = 0; // Reset sound to the start
    puluSound.play(); // Play the sound
});

pluhhhButton.addEventListener('click', () => {
    pluhhhSound.currentTime = 0; // Reset sound to the start
    pluhhhSound.play(); // Play the sound
});
