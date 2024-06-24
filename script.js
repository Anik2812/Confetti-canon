// script.js

document.getElementById('cannonButton').addEventListener('click', fireCannon);

function fireCannon() {
    const confettiContainer = document.getElementById('confettiContainer');
    confettiContainer.innerHTML = ''; // Clear previous confetti
    const confettiColors = ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7', '#ffdfd9', '#fffbfa'];
    const confettiShapes = ['circle', 'rectangle'];

    for (let i = 0; i < 200; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.classList.add(confettiShapes[Math.floor(Math.random() * confettiShapes.length)]);
        confetti.style.setProperty('--color', confettiColors[Math.floor(Math.random() * confettiColors.length)]);
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = Math.random() * 100 + 'vh';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 20 + 10 + 'px';
        confetti.style.animationDelay = Math.random() * 5 + 's';
        confettiContainer.appendChild(confetti);
    }
}
