document.addEventListener('DOMContentLoaded', function () {
    const startGameButton = document.getElementById('startGame');
    const exitInstructionsButton = document.getElementById('exitInstructions');
    const gamePageURL = 'game.html';

    startGameButton.addEventListener('click', function () {
        const playerName = prompt('Enter your name:');
        if (playerName !== null && playerName.trim() !== '') {
            localStorage.setItem('playerName', playerName);
            window.location.href = gamePageURL;
        }
    });

    exitInstructionsButton.addEventListener('click', function () {
        window.location.href = 'index.html';
    });
});
