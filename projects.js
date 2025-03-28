function loadProjects(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Error loading projects:', error));
}

document.addEventListener("DOMContentLoaded", () => {
    loadProjects('projects.html');
});
