document.addEventListener('DOMContentLoaded', function () {
    const playerNameSpan = document.getElementById('playerName');
    const playerName = localStorage.getItem('playerName');
    const imageContainer = document.getElementById('imageContainer');
    const quizImage = document.getElementById('quizImage');
    const timerElement = document.getElementById('timer');
    const playQuizButton = document.getElementById('playQuiz');
    const exitGameButton = document.getElementById('exitGame');

    playerNameSpan.textContent = playerName;

    // Replace the following with actual image URLs
    const imageUrls = ['https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D',
     'https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D',
       'https://images.unsplash.com/photo-1501349800519-48093d60bde0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D'
       , 'https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D'];

    let currentImageIndex = 0;
    let timer = 20;

    function showNextImage() {
        if (currentImageIndex < imageUrls.length) {
            quizImage.src = imageUrls[currentImageIndex];
            timer = 20;
            updateTimer();
            setTimeout(showNextImage, 20000); // Show each image for 20 seconds
            currentImageIndex++;
        } else {
            // Show quiz button after the last image
            playQuizButton.style.display = 'block';
        }
    }

    function updateTimer() {
        timerElement.textContent = timer;
        if (timer > 0) {
            timer--;
            setTimeout(updateTimer, 1000);
        }
    }

    playQuizButton.addEventListener('click', function () {
        // Redirect to quiz.html
        window.location.href = 'Quiz.html';
    });

    exitGameButton.addEventListener('click', function () {
        // Redirect to index.html
        window.location.href = 'index.html';
    });

    // Start showing images
    showNextImage();
});
