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
// RuneScape-style rainbow wiggle animation per letter
document.querySelectorAll('.runescape-text').forEach(el => {
  el.innerHTML = el.textContent
    .split('')
    .map((char, i) => `<span style="
      display:inline-block;
      animation: wiggleRGB 1s infinite ease-in-out;
      animation-delay:${i * 50}ms;
      color: ${rainbowColor(i)};
    ">${char}</span>`)
    .join('');
});

// Helper function to return a rainbow color based on index
function rainbowColor(i) {
  const colors = ['red', 'orange', 'yellow', 'limegreen', 'cyan', 'blue', 'violet'];
  return colors[i % colors.length];
}

