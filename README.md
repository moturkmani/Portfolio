# 💻 Personal Portfolio Website

A responsive, interactive personal portfolio built with HTML, CSS, and JavaScript. It features dynamic tab loading, a modal image viewer, a "Back to Top" button, and stylish theming with gold and black.

## 🔥 Live Preview

Check it out on GitHub Pages or host locally to see the full effect, including glowing headers and image modals.

## 🌐 Project Structure

```
/assets
    ├── github-icon.png
    ├── linkedin-icon.png
    └── youtube-icon.png
/index.html
/style.css
/script.js
/about-me.html
/experience.html
/projects.html
/hobbies.html
/favicon.png
```

## ✨ Features

- **📄 Tab Navigation:** Load page content dynamically without refreshing
- **🖼️ Modal Image Viewer:** Click on hobby images to expand in a stylish modal
- **🔝 Scroll to Top Button:** Smooth scroll animation when scrolled down
- **🎨 Stylish UI:** Black and gold aesthetic with responsive typography
- **🌈 Animated Effects:** Glowing title animation for highlighted sections

## 📂 Files Explained

### `index.html`
- Contains layout structure, tab buttons, and dynamic content container.
- Includes footer with social media icons (GitHub, LinkedIn, YouTube).

### `style.css`
- Responsive styles using `clamp()` and media queries.
- Custom `glowPulse` animation for glowing title effect.
- Styled tabs, image containers, modal, and social icons.

### `script.js`
- Loads HTML content into the `#content` section on button click.
- Implements a modal popup for full-size image viewing.
- Adds logic for "Back to Top" button visibility and smooth scrolling.

## 📸 Screenshots

> Include screenshots or screen recordings here for a better preview.

## 🚀 How to Run Locally

```bash
git clone https://github.com/your-username/your-portfolio-repo.git
cd your-portfolio-repo
open index.html # or open in your browser
```

> Or use a local development server (like VS Code Live Server) for dynamic loading to work properly.

## 🛠️ Customization

To change the glowing title effect:

Edit `.glow-title` in `style.css`:

```css
.glow-title {
  animation: glowPulse 2s infinite linear;
}
```

To apply it to any heading, just add:

```html
<h2 class="glow-title">Your Glowing Title</h2>
```

## 🔗 Connect With Me

- [GitHub](https://github.com/moturkmani)
- [LinkedIn](https://www.linkedin.com/in/mojtaba-t-b51746107/)
- [YouTube](https://www.youtube.com/@MoVoltageMoPower)

---

📌 **Note:** This project uses JavaScript `fetch()` to load internal HTML files. For full functionality, run it on a local server (e.g., using VS Code Live Server) or host it on a web platform like GitHub Pages or Netlify.
