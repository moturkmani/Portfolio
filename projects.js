// Get all project titles and project details
const projectTitles = document.querySelectorAll('.project-title');

// Add click event listener to each project title
projectTitles.forEach((title, index) => {
    title.addEventListener('click', () => {
        const projectDetails = title.nextElementSibling; // Get the corresponding project details
        const allDetails = document.querySelectorAll('.project-details');

        // If clicked project details are already open, close them
        if (projectDetails.style.display === 'block') {
            projectDetails.style.display = 'none';
        } else {
            // Close all other project details
            allDetails.forEach(detail => {
                detail.style.display = 'none';
            });
            // Open the clicked project's details
            projectDetails.style.display = 'block';
        }
    });
});
