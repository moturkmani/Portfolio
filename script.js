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

document.querySelectorAll('.runescape-text').forEach(el => {
  const text = el.textContent;
  el.innerHTML = ''; // clear existing content

  const rainbowColors = ['red', 'orange', 'yellow', 'limegreen', 'cyan', 'blue', 'violet'];

  for (let i = 0; i < text.length; i++) {
    const span = document.createElement('span');
    span.textContent = text[i];
    span.style.color = rainbowColors[i % rainbowColors.length];
    span.style.animationDelay = `${i * 50}ms`;
    el.appendChild(span);
  }
});
