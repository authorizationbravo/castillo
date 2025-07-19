document.addEventListener('DOMContentLoaded', () => {
    const celestialGrid = document.getElementById('anamnesis-grid');
    const whispers = [
        "He said I wasn't good enough",
        "It was just a joke...",
        "You're too sensitive"
    ];

    function revealWhisper() {
        const whisper = document.createElement('p');
        whisper.classList.add('whisper');

        // Select a random whisper
        whisper.textContent = whispers[Math.floor(Math.random() * whispers.length)];

        // Position it randomly in the celestial expanse
        whisper.style.top = `${Math.random() * 100}%`;
        whisper.style.left = `${Math.random() * 100}%`;
        whisper.style.transform = `translateZ(-600px) translate(-50%, -50%) scale(${Math.random() * 0.5 + 0.75})`;

        celestialGrid.appendChild(whisper);

        // Gently fade in
        setTimeout(() => whisper.classList.add('active'), 50);

        // Fade out and vanish after a fleeting moment
        setTimeout(() => {
            whisper.classList.add('inactive');
            whisper.addEventListener('transitionend', () => whisper.remove());
        }, 5000); // A brief existence of 5 seconds
    }

    // Begin the ethereal dance
    setInterval(revealWhisper, 2000); // A new whisper emerges every 2 seconds
});
