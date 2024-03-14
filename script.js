document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('readInstructions');
    const instructionsPageURL = 'instructions.html'; // Update with your actual instructions page URL

    button.addEventListener('click', function () {
        // Redirect to the instructions page
        window.location.href = instructionsPageURL;
    });
});
// Get the audio element
// Get the audio element
const backgroundMusic = document.getElementById('backgroundMusic');

// Function to change volume
function changeVolume(direction) {
    // Ensure the audio element is ready
    if (!backgroundMusic.paused) {
        // Get the current volume
        let currentVolume = backgroundMusic.volume;

        // Adjust the volume based on the direction
        if (direction === 'up') {
            currentVolume += 0.1; // Increase volume by 10%
        } else if (direction === 'down') {
            currentVolume -= 0.1; // Decrease volume by 10%
        }

        // Ensure the volume is within the valid range (0 to 1)
        currentVolume = Math.max(0, Math.min(1, currentVolume));

        // Set the new volume
        backgroundMusic.volume = currentVolume;
    }
}


