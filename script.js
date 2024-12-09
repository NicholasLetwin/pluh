// Select the elements
const pluhButton = document.getElementById('pluhButton');
const puluButton = document.getElementById('puluButton');
const pluhhhButton = document.getElementById('pluhhhButton');

const pluhSound = new Audio('pluh.mp3');
const puluSound = new Audio('pulu.mp3');
const pluhhhSound = new Audio('pluhhh.mp3');
const pluhbeat = new Audio('pluhbeat.mp3');

const sounds = [pluhSound, puluSound, pluhhhSound];

// Add event listeners for buttons
randomButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * sounds.length);
    playSound(sounds[randomIndex]);
});


// Play sound function with debugging
function playSound(sound, label) {
    if (!sound) {
        console.error(`Sound ${label} not found!`);
        return;
    }
    sound.currentTime = 0; // Reset sound
    sound.play()
        .then(() => console.log(`${label} sound played!`))
        .catch((error) => console.error(`Error playing ${label}:`, error));
}

// Add event listeners for buttons
pluhButton.addEventListener('click', () => playSound(pluhSound, 'PLUH'));
puluButton.addEventListener('click', () => playSound(puluSound, 'PULU'));
pluhhhButton.addEventListener('click', () => playSound(pluhhhSound, 'PLUHHH'));


// Fireworks effect for "Go PLUH Mode"
const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function randomColor() {
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
}

function createFirework(x, y) {
    const particles = Array.from({ length: 50 }, () => ({
        x,
        y,
        angle: Math.random() * 2 * Math.PI,
        speed: Math.random() * 5 + 2,
        color: randomColor(),
    }));

    return particles;
}

// Draw fireworks
function drawFireworks(particles) {
    particles.forEach((particle) => {
        particle.x += Math.cos(particle.angle) * particle.speed;
        particle.y += Math.sin(particle.angle) * particle.speed;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
    });
}

// Start fireworks
function startFireworks() {
    const fireworks = [];
    let running = true;

    function animate() {
        if (!running) return; // Stop animation if no longer running

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (Math.random() < 0.1) {
            fireworks.push(createFirework(Math.random() * canvas.width, Math.random() * canvas.height));
        }

        fireworks.forEach((particles, i) => {
            drawFireworks(particles);
            if (particles.length === 0) fireworks.splice(i, 1);
        });

        requestAnimationFrame(animate);
    }

    animate();

    // Stop fireworks after 10 seconds
    setTimeout(() => {
        running = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    }, 10000); // 10 seconds
}

// Go PLUH Mode Button
goPluhModeButton.addEventListener('click', () => {
    pluhbeat.currentTime = 0; // Reset music
    pluhbeat.play(); // Start music
    startFireworks(); // Start fireworks

    // Stop music after 10 seconds
    setTimeout(() => {
        pluhbeat.pause();
        pluhbeat.currentTime = 0; // Reset music to start
    }, 8000); // 10 seconds
});