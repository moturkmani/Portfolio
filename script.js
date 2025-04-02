// Handle image click for expansion
document.querySelectorAll('.hobby-image').forEach(img => {
    img.addEventListener('click', function() {
        // Create overlay
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        
        const largeImage = document.createElement('img');
        largeImage.src = this.src; // Set source to the clicked image
        overlay.appendChild(largeImage);
        
        // Add overlay to the body
        document.body.appendChild(overlay);

        // When overlay is clicked, remove it (close the expanded image)
        overlay.addEventListener('click', function() {
            document.body.removeChild(overlay);
        });
    });
});
