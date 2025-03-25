// Get all the images in the hobby block
const images = document.querySelectorAll('.expandable-image');
let currentImageIndex = 0; // Track the current image in the modal

// Get the modal and modal elements
const modal = document.getElementById('image-modal');
const expandedImage = document.getElementById('expanded-image');
const closeModal = document.getElementById('close-modal');
const prevImage = document.getElementById('prev-image');
const nextImage = document.getElementById('next-image');

// Open the modal when an image is clicked
images.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentImageIndex = index;
        expandedImage.src = image.src;
        modal.style.display = "flex"; // Show the modal
    });
});

// Close the modal when clicking the close button
closeModal.addEventListener('click', () => {
    modal.style.display = "none"; // Hide the modal
});

// Navigate to the previous image
prevImage.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
    expandedImage.src = images[currentImageIndex].src; // Change the source of the expanded image
});

// Navigate to the next image
nextImage.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
    expandedImage.src = images[currentImageIndex].src; // Change the source of the expanded image
});
