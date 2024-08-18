document.getElementById('celebrateBtn').addEventListener('click', function() {
    const container = document.getElementById('celebrationContainer');
    
    // Array of Rakhi image paths
    const rakhiImages = [
        'rakhi1.png', 
        'rakhi2.png', 
        'rakhi3.png' 
    ];
    
    for (let i = 0; i < 30; i++) {
        const element = document.createElement('div');
        element.classList.add('rakhi');
        
        // Randomly choose a Rakhi image
        const rakhiImage = rakhiImages[Math.floor(Math.random() * rakhiImages.length)];
        element.style.backgroundImage = `url(${rakhiImage})`;
        
        const size = Math.random() * 50 + 20;
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.top = `${Math.random() * 100}vh`;
        element.style.left = `${Math.random() * 100}vw`;
        element.style.animationDuration = `${Math.random() * 3 + 2}s`;
        
        container.appendChild(element);
        
        setTimeout(() => {
            element.remove();
        }, 5000);
    }
});
