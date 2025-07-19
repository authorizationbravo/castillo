/*
 * Project Proscenium: app.js
 * Corrected & Stabilized Anamnesis Engine
 */
document.addEventListener('DOMContentLoaded', () => {

    const grid = document.getElementById('anamnesis-grid');
    const phrases = [ "He said I wasn't good enough", "It was just a joke...", "You're too sensitive" ];

    function showPhrase() {
        const phrase = document.createElement('p');
        phrase.classList.add('phrase');
        phrase.textContent = phrases[Math.floor(Math.random() * phrases.length)];

        // Give it a random position in the distant scene
        phrase.style.top = `${Math.random() * 100}%`;
        phrase.style.left = `${Math.random() * 100}%`;
        phrase.style.transform = `translateZ(-600px) translate(-50%, -50%) scale(${Math.random() * 0.5 + 0.75})`;
        
        grid.appendChild(phrase);
        
        // Use a short timeout to trigger the CSS transition for fade-in
        setTimeout(() => phrase.classList.add('active'), 50);

        // Fade out and remove from DOM after a lifetime
        setTimeout(() => {
            phrase.classList.add('inactive');
            phrase.addEventListener('transitionend', () => phrase.remove());
        }, 5000); // Live for 5 seconds
    }

    // Start the process
    setInterval(showPhrase, 2000); // A new phrase appears every 2 seconds
});
