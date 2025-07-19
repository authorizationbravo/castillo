// app.js
document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Initialize from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.remove('dark-mode');
        updateToggleText(false);
    } else {
        body.classList.add('dark-mode');
        updateToggleText(true);
    }
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        updateToggleText(isDarkMode);
    });
    
    function updateToggleText(isDarkMode) {
        const icon = themeToggle.querySelector('i');
        const text = themeToggle.querySelector('span');
        
        if (isDarkMode) {
            icon.className = 'fas fa-sun';
            text.textContent = 'Light Mode';
        } else {
            icon.className = 'fas fa-moon';
            text.textContent = 'Dark Mode';
        }
    }
    
    // Create animated particles
    const backgroundAnimation = document.querySelector('.background-animation');
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(i);
    }
    
    function createParticle(id) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.floor(Math.random() * 6) + 2;
        const left = Math.random() * 100;
        const delay = Math.random() * 8;
        const duration = Math.floor(Math.random() * 15) + 10;
        
        // Color options
        const colors = ['#00d1d1', '#0091ff', '#9f7aea', '#ff6b6b'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}%`;
        particle.style.backgroundColor = color;
        particle.style.animation = `float ${duration}s infinite linear`;
        particle.style.animationDelay = `${delay}s`;
        
        backgroundAnimation.appendChild(particle);
        
        // Recreate particle after animation completes
        setTimeout(() => {
            particle.remove();
            createParticle(id);
        }, (duration * 1000) + (delay * 1000));
    }
    
    // Add hover effects to interactive elements
    document.querySelectorAll('.nav-item, .project-card, .stat-card, .activity-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.03) translateY(-5px)';
            item.style.zIndex = '10';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = '';
            item.style.zIndex = '';
        });
    });
});
