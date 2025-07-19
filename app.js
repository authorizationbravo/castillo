document.addEventListener('DOMContentLoaded', () => {
    // Navigation functionality
    const navItems = document.querySelectorAll('.nav-item');
    const contentItems = document.querySelectorAll('.content-view');

    navItems.forEach(navItem => {
        navItem.addEventListener('click', (event) => {
            event.preventDefault();
            if (navItem.classList.contains('active')) return;
            
            navItems.forEach(item => item.classList.remove('active'));
            contentItems.forEach(content => content.classList.remove('active'));
            
            navItem.classList.add('active');
            document.querySelector(`#${navItem.dataset.view}`).classList.add('active');
        });
    });

    // Enhanced background typing effect
    const typingBackground = document.getElementById('typingBackground');
    const pauseBtn = document.getElementById('pauseBtn');
    const intensityBtn = document.getElementById('intensityBtn');
    
    const phrases = [
        "He said I wasn't good enough",
        "It was just a joke",
        "You're just being too sensitive",
        "Made fun of me in front of everyone",
        "Why do you always make me so angry?",
        "No one else would ever put up with you",
        "This is for your own good",
        "If you really loved me, you would...",
        "You're overreacting as usual",
        "I wouldn't have to do this if you...",
        "You're too sensitive, that's your problem",
        "After all I've done for you...",
        "I was only kidding, why can't you take a joke?",
        "You're impossible to please"
    ];
    
    let animationEnabled = true;
    let currentIntensity = 1;
    const maxElements = 15;
    let activeElements = [];
    let elementCount = 0;
    
    function createTypingElement() {
        if (!animationEnabled || activeElements.length >= maxElements) return;
        
        const element = document.createElement('div');
        element.classList.add('typing-element');
        element.id = `typing-${elementCount++}`;
        
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const posX = Math.random() * (viewportWidth - 400) + 100;
        const posY = Math.random() * (viewportHeight - 100) + 50;
        
        element.style.left = `${posX}px`;
        element.style.top = `${posY}px`;
        
        const phrase = phrases[Math.floor(Math.random() * phrases.length)];
        element.textContent = phrase;
        
        typingBackground.appendChild(element);
        activeElements.push(element.id);
        
        setTimeout(() => {
            element.classList.add('visible');
            
            setTimeout(() => {
                element.classList.remove('visible');
                setTimeout(() => {
                    if (element.parentNode) {
                        element.parentNode.removeChild(element);
                        activeElements = activeElements.filter(id => id !== element.id);
                    }
                }, 2000);
            }, 7000 * currentIntensity);
        }, 100);
    }
    
    function runAnimation() {
        if (!animationEnabled) return;
        
        createTypingElement();
        const nextInterval = 1200 / currentIntensity;
        setTimeout(runAnimation, nextInterval);
    }
    
    runAnimation();
    
    // Control event listeners
    pauseBtn.addEventListener('click', () => {
        animationEnabled = !animationEnabled;
        pauseBtn.textContent = animationEnabled ? 'Pause Effect' : 'Resume Effect';
        if (animationEnabled) runAnimation();
    });
    
    intensityBtn.addEventListener('click', () => {
        currentIntensity = Math.min(3, currentIntensity + 0.5);
        intensityBtn.textContent = `Intensity: ${currentIntensity.toFixed(1)}x`;
    });
    
    // Matrix effect implementation
    function createMatrixEffect() {
        const matrixContainer = document.querySelector('.matrix-background');
        const columns = Math.floor(window.innerWidth / 20);
        const rows = Math.floor(window.innerHeight / 20);
        
        for (let i = 0; i < rows; i++) {
            const line = document.createElement('div');
            line.classList.add('matrix-line');
            line.style.top = `${i * 20}px`;
            line.style.animationDelay = `${Math.random() * 5}s`;
            
            for (let j = 0; j < columns; j++) {
                const char = document.createElement('span');
                char.classList.add('matrix-char');
                char.textContent = String.fromCharCode(0x30A0 + Math.random() * 96);
                char.style.animationDelay = `${Math.random() * 5}s`;
                line.appendChild(char);
            }
            
            matrixContainer.appendChild(line);
        }
    }
    
    createMatrixEffect();
});
