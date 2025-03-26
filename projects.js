// Get all project images
const images = document.querySelectorAll('.expandable-image');
const modal = document.getElementById('image-modal');
const expandedImage = document.getElementById('expanded-image');
const closeModal = document.querySelector('.close-modal');

// Open the modal and display the clicked image
images.forEach((image) => {
    image.addEventListener('click', () => {
        expandedImage.src = image.src; // Set the clicked image as the modal content
        modal.style.display = 'flex'; // Show the modal
        document.body.classList.add('modal-background-blue'); // Apply blue background tint
    });
});

// Close the modal when clicking the close button (X)
closeModal.addEventListener('click', () => {
    modal.style.display = 'none'; // Hide the modal
    document.body.classList.remove('modal-background-blue'); // Remove the background tint
});

// Close modal if clicked anywhere outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none'; // Hide the modal
        document.body.classList.remove('modal-background-blue'); // Remove the background tint
    }
});
