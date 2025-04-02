// Function to load content dynamically
function loadTab(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Error loading page:', error));
}

// Load "About Me" by default
document.addEventListener("DOMContentLoaded", () => {
    loadTab('about-me.html');

    // Modal setup
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = '<img src="" alt="Expanded Image">';
    document.body.appendChild(modal);

    // Close modal on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Image click opens modal
    document.body.addEventListener('click', function (e) {
        if (e.target.classList.contains('hobby-image')) {
            const modalImg = modal.querySelector('img');
            modalImg.src = e.target.src;
            modal.style.display = 'flex';
        }
    });
});
