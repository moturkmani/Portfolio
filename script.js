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

    // Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

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

// Back to Top Button Logic
window.addEventListener('scroll', () => {
    const btn = document.getElementById('backToTop');
    const isScrollable = document.body.scrollHeight > window.innerHeight;

    if (window.scrollY > 100 && isScrollable) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
});

// Smooth scroll to top on click
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('backToTop');
    if (btn) {
        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
