/* =========================================================
   MO TURKMANI PORTFOLIO - script.js
   Everything here uses "event delegation": listeners sit on
   the whole document, so they keep working after a page is
   swapped into #content (scripts inside the loaded pages
   would NOT run, so all logic lives here).
   ========================================================= */

const ANIM_MS = 320; // speed of the open/close animation for branches (milliseconds)

/* ---------------------------------------------------------
   1) PAGE LOADING
   Fetches a page (about-me.html etc.) and drops it into #content.
   --------------------------------------------------------- */
function loadTab(page) {
    const content = document.getElementById('content');

    fetch(page)
        .then(response => {
            if (!response.ok) throw new Error(response.status);
            return response.text();
        })
        .then(html => {
            content.innerHTML = html;

            // ANIMATION: restart the fade-in each time a page loads
            content.classList.remove('page-enter');
            void content.offsetWidth;            // forces the browser to "reset" the animation
            content.classList.add('page-enter');

            // Highlight the matching nav button
            document.querySelectorAll('.nav-link').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.page === page);
            });

            // Load videos in any branch that starts open (e.g. <details open>)
            content.querySelectorAll('details[open]').forEach(loadVideos);

            // Remember the page in the URL (#projects) so refresh/back works
            history.replaceState(null, '', '#' + page.replace('.html', ''));
        })
        .catch(err => {
            content.innerHTML = '<p class="intro">Sorry, that page didn\'t load. Try again in a moment.</p>';
            console.error('Error loading page:', err);
        });
}

/* ---------------------------------------------------------
   2) LAZY VIDEOS
   iframes in projects.html use data-src instead of src.
   We only set the real src when the branch is opened,
   so YouTube doesn't load 6 videos up front.
   --------------------------------------------------------- */
function loadVideos(details) {
    details.querySelectorAll(':scope > .branch-content iframe[data-src]').forEach(frame => {
        frame.src = frame.dataset.src;
        frame.removeAttribute('data-src');
    });
}

/* ---------------------------------------------------------
   3) SMOOTH OPEN / CLOSE FOR BRANCHES
   <details> normally snaps open. This animates the height
   of .branch-content so it slides open/closed instead.
   --------------------------------------------------------- */
function openBranch(details) {
    if (details.open) return;
    const body = details.querySelector(':scope > .branch-content');
    details.open = true;
    loadVideos(details);
    if (!body) return;

    // ANIMATION: slide down from 0 to full height while fading in
    const full = body.scrollHeight;
    body.animate(
        [{ height: '0px', opacity: 0 }, { height: full + 'px', opacity: 1 }],
        { duration: ANIM_MS, easing: 'ease-out' }
    );
}

function closeBranch(details) {
    if (!details.open) return;
    const body = details.querySelector(':scope > .branch-content');
    if (!body) { details.open = false; return; }

    // ANIMATION: slide up from current height to 0 while fading out,
    // and only actually close <details> when the animation is done
    const full = body.scrollHeight;
    const anim = body.animate(
        [{ height: full + 'px', opacity: 1 }, { height: '0px', opacity: 0 }],
        { duration: ANIM_MS, easing: 'ease-in' }
    );
    anim.onfinish = () => { details.open = false; };
}

/* ---------------------------------------------------------
   4) SET EVERYTHING UP WHEN THE PAGE IS READY
   --------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {

    // Load the page from the URL (#experience) or About Me by default
    const start = location.hash ? location.hash.slice(1) + '.html' : 'about-me.html';
    const valid = ['about-me.html', 'experience.html', 'projects.html', 'hobbies.html'];
    loadTab(valid.includes(start) ? start : 'about-me.html');

    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    // Nav buttons: load their page and close the mobile menu
    document.querySelectorAll('.nav-link').forEach(btn => {
        btn.addEventListener('click', () => {
            loadTab(btn.dataset.page);
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Hamburger toggle (mobile)
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Photo viewer (modal) created once and reused
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = '<img src="" alt="Expanded photo">';
    document.body.appendChild(modal);
    const modalImg = modal.querySelector('img');

    /* One click listener for the whole site */
    document.addEventListener('click', (e) => {

        // a) Branch title clicked -> animated open/close
        const summary = e.target.closest('.branch > summary');
        if (summary) {
            e.preventDefault();                 // stop the instant snap
            const details = summary.parentElement;
            details.open ? closeBranch(details) : openBranch(details);
            return;
        }

        // b) Expand all / Collapse all buttons
        const treeBtn = e.target.closest('.tree-btn');
        if (treeBtn) {
            const branches = document.querySelectorAll('#content details.branch');
            branches.forEach(d => treeBtn.dataset.tree === 'expand' ? openBranch(d) : closeBranch(d));
            return;
        }

        // c) Photo clicked -> open full screen
        if (e.target.classList.contains('hobby-image')) {
            modalImg.src = e.target.src;
            modalImg.alt = e.target.alt;
            modal.classList.add('open');
            return;
        }

        // d) Click on the dark background -> close the photo
        if (e.target === modal) modal.classList.remove('open');

        // e) Click outside the mobile menu -> close it
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Esc key closes the photo viewer
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') modal.classList.remove('open');
    });

    // Back to Top: smooth scroll
    const backBtn = document.getElementById('backToTop');
    backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // ANIMATION: fade the Back to Top button in after scrolling 300px
    window.addEventListener('scroll', () => {
        backBtn.classList.toggle('show', window.scrollY > 300);
    });
});
