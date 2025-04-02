// Function to load content dynamically
function loadTab(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Error loading page:', error));
}

// Load "About Me" by default on first load
document.addEventListener("DOMContentLoaded", () => {
    loadTab('about-me.html');

    // ✅ Create modal container for image expansion
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = '<img src="" alt="Expanded Image">';
    document.body.appendChild(modal);

    // ✅ Close modal when clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // ✅ Handle image click events (delegated from body)
    document.body.addEventListener('click', function (e) {
        if (e.target.classList.contains('hobby-image')) {
            const modalImg = modal.querySelector('img');
            modalImg.src = e.target.src;
            modal.style.display = 'flex';
        }
    });
});
