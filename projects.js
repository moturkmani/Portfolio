// Get all project titles and project details containers
const projectTitles = document.querySelectorAll('.project-title');

// Add click event listener to each project title
projectTitles.forEach((title) => {
    title.addEventListener('click', () => {
        const projectId = title.getAttribute('data-project');
        const projectDetails = document.getElementById(projectId);

        // If the clicked project details are already open, close them
        if (projectDetails.style.display === 'block') {
            projectDetails.style.display = 'none';
        } else {
            // Close all other project details
            const allProjectDetails = document.querySelectorAll('.project-details');
            allProjectDetails.forEach(detail => {
                detail.style.display = 'none';
            });

            // Open the clicked project's details
            projectDetails.style.display = 'block';
        }
    });
});
