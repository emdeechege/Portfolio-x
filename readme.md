# Portfolio-x

This is a personal portfolio website for Tom Maina Chege, Product Manager & Software Developer. The site showcases professional experience, skills, achievements, and contact information in a modern, responsive design.

## Features

- **Responsive Design:** Built with [Tailwind CSS](https://tailwindcss.com/) for mobile and desktop compatibility.
- **Animated Sections:** Uses [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) for smooth section transitions.
- **Feather Icons:** Clean, scalable icons via [Feather Icons](https://feathericons.com/).
- **Contact Form:** Simple contact form for direct communication.
- **Easy Deployment:** Ready for static hosting, with GitHub Actions workflow for deployment to GitHub Pages.

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── static.yml         # GitHub Actions workflow for deployment
├── images/
│   └── tc.JPG                 # Profile image
├── index.html                 # Main portfolio page
├── .gitignore                 # Node modules and environment files ignored
```

## Getting Started

### Prerequisites

- No build tools required. All dependencies are loaded via CDN.
- To customize, you only need a text editor (e.g., VS Code).

### Usage

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/Portfolio-x.git
   cd Portfolio-x
   ```

2. **Open `index.html` in your browser**  
   All styles and scripts are loaded via CDN, so no build step is required.

3. **Customize Content:**  
   - Update profile image at `images/tc.JPG`.
   - Edit sections in [`index.html`](index.html) to change experience, skills, achievements, and contact info.

### Deployment

This project is configured to deploy automatically to GitHub Pages using the workflow in [`.github/workflows/static.yml`](.github/workflows/static.yml):

- On push to the `master` branch, the workflow will build and deploy the site.
- The entire repository is uploaded as a static artifact.

#### Manual Deployment

You can also deploy manually by uploading the contents to any static hosting provider (e.g., Netlify, Vercel, GitHub Pages).

## Customization

- **Change Colors/Fonts:**  
  Edit the `<style>` block in [`index.html`](index.html) or update Tailwind classes.
- **Add Sections:**  
  Duplicate and modify existing sections in the HTML.
- **Update Social Links:**  
  Change URLs in the Contact and Footer sections.

## Credits

- [Tailwind CSS](https://tailwindcss.com/)
- [AOS](https://michalsnik.github.io/aos/)
- [Feather Icons](https://feathericons.com/)
- [Google Fonts](https://fonts.google.com/)

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Contact:**  
Tom Maina Chege  
Email: emdeechege@gmail.com  
LinkedIn: