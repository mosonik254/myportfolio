# Menjo Portfolio

A modern, responsive, and feature-rich static portfolio website built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Projects Showcase**: Display your best work with project descriptions and links
- **Blog Section**: Share your thoughts and expertise with built-in search functionality
- **Contact Form**: Allow visitors to get in touch with you
- **About Page**: Tell your story and showcase your skills
- **Modern UI**: Clean, professional design with smooth animations
- **Fast Performance**: No dependencies, pure HTML/CSS/JS

## File Structure

```
menjo-portfolio/
├── index.html              # Home page
├── about.html              # About page with skills and experience
├── projects.html           # Projects showcase
├── blog.html               # Blog posts with search
├── contact.html            # Contact form
├── styles/
│   └── main.css            # All styling
├── js/
│   ├── blog.js             # Blog search functionality
│   └── contact.js          # Contact form handling
└── README.md               # This file
```

## Getting Started

### 1. Customize Your Information

Edit the following files to add your personal information:

**index.html**
- Change the hero section title and description
- Update social media links
- Add your featured projects

**about.html**
- Replace "Menjo" with your name
- Update your bio and skills
- Modify the experience timeline
- Add your photo (replace the placeholder image)

**projects.html**
- Add your actual projects with descriptions
- Update project links (live demo and GitHub)
- Change technology tags
- Update project images/colors

**blog.html**
- Add your blog posts
- Update dates and read times
- Customize tags and descriptions

**contact.html**
- Update your email address
- Add your social media links
- Change your location
- Customize the contact form

### 2. Set Up Social Media Links

Update all social media links throughout the site. Look for `href="#"` in:
- Navigation footer social links
- About page social links
- Contact page social methods

### 3. Add Your Photo

Replace the placeholder in `about.html`:
```html
<div class="placeholder-image">Your Photo</div>
```

With an actual image:
```html
<img src="path/to/your-photo.jpg" alt="Your Name" />
```

Then add this CSS to `styles/main.css`:
```css
.about-image img {
    width: 100%;
    border-radius: 0.5rem;
    object-fit: cover;
}
```

### 4. Set Up Contact Form

The contact form currently shows a success message locally. To make it functional:

**Option 1: Using Formspree (Recommended)**
```javascript
// Replace the fetch in contact.js with:
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: new FormData(contactForm)
});
```

1. Go to [formspree.io](https://formspree.io)
2. Sign up and create a new form
3. Get your form ID
4. Replace `YOUR_FORM_ID` in the code above

**Option 2: Using Netlify Forms**
Add `netlify` attribute to your form and connect to Netlify

**Option 3: Backend Service**
Create your own backend API to handle form submissions

## Customization

### Colors

Edit the CSS variables in `styles/main.css`:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --text-dark: #1a1a1a;
    --text-light: #666;
    --bg-light: #f9f9f9;
    --border-color: #eee;
}
```

### Fonts

The portfolio uses system fonts. To use Google Fonts, add to the `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;600&display=swap" rel="stylesheet">
```

Then update the `font-family` in `main.css`.

### Projects Grid

Change the number of columns:
```css
.projects-grid {
    grid-template-columns: repeat(4, 1fr); /* Change 3 to your desired number */
}
```

## Deployment

### Option 1: GitHub Pages

1. Create a GitHub repository named `username.github.io`
2. Push your portfolio files
3. Your site will be live at `https://username.github.io`

### Option 2: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Connect your repository
3. Deploy automatically with each push

### Option 3: Vercel

1. Go to [vercel.com](https://vercel.com)
2. Import your repository
3. Deploy with one click

### Option 4: Traditional Hosting

Upload all files to your web hosting provider's public directory.

## SEO Optimization

Add meta descriptions to each page's `<head>`:
```html
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="developer, web design, portfolio">
```

Update the Open Graph tags for social sharing:
```html
<meta property="og:title" content="Menjo - Portfolio">
<meta property="og:description" content="Full-stack developer">
<meta property="og:image" content="url-to-preview-image">
```

## Performance Tips

1. **Optimize Images**: Use tools like [TinyPNG](https://tinypng.com) to compress images
2. **Lazy Loading**: Add `loading="lazy"` to images (supported in modern browsers)
3. **Minify CSS**: Use tools to minify your CSS for production
4. **Use a CDN**: For faster delivery of assets globally

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

Feel free to use this portfolio template for your own purpose.

## Need Help?

- Check the code comments for implementation details
- Customize the CSS variables for colors and spacing
- Test locally by opening `index.html` in your browser

---

Made with ❤️ by your portfolio
