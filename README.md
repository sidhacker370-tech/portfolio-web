# AI-Integrated Full Stack Web Developer Portfolio

A comprehensive, modern portfolio website showcasing expertise in AI integration and full stack web development.

## Features

- **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **SEO Optimized**: Meta tags, semantic HTML, and proper heading structure
- **Accessibility**: WCAG compliant with ARIA labels and keyboard navigation
- **AI Chatbot**: Interactive chatbot demonstrating AI integration capabilities
- **Performance**: Optimized loading with lazy loading images and efficient animations

## Sections

1. **Home**: Professional introduction with headshot and tagline
2. **About Me**: Detailed biography and career highlights
3. **Portfolio**: Showcase of 6 projects with technologies used
4. **Skills**: Categorized technical skills with visual progress bars
5. **Blog**: Blog section with article cards
6. **Contact**: Contact form and social media links

## Setup Instructions

### 1. Add Images

Place the following images in the `assets/` directory:

- `profile.jpg` - Your professional headshot (recommended: 300x300px, square)
- `project1.jpg` through `project6.jpg` - Portfolio project screenshots (recommended: 800x600px)
- `blog1.jpg` through `blog6.jpg` - Blog post featured images (recommended: 800x600px)

You can use placeholder images from services like:
- [Unsplash](https://unsplash.com)
- [Pexels](https://www.pexels.com)
- [Placeholder.com](https://placeholder.com)

### 2. Customize Content

Edit `index.html` to update:
- Personal information (name, bio, etc.)
- Project descriptions and links
- Blog post content
- Contact information
- Social media links

### 3. Update Links

Replace placeholder URLs in:
- Portfolio project links (GitHub and demo links)
- Social media profile links
- Blog post links

### 4. Customize Colors (Optional)

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --primary-dark: #4f46e5;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* ... */
}
```

## File Structure

```
portfolio-web/
├── index.html          # Main HTML file
├── styles.css          # All styles and responsive design
├── script.js           # JavaScript for interactivity
├── README.md          # This file
└── assets/            # Images directory
    ├── profile.jpg
    ├── project1.jpg
    ├── project2.jpg
    ├── project3.jpg
    ├── project4.jpg
    ├── project5.jpg
    ├── project6.jpg
    ├── blog1.jpg
    ├── blog2.jpg
    ├── blog3.jpg
    ├── blog4.jpg
    ├── blog5.jpg
    └── blog6.jpg
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)**: Interactive features and animations
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- Lazy loading images
- Smooth scroll animations
- Intersection Observer API for efficient animations
- Debounced scroll events
- Optimized CSS and JavaScript

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Skip to main content link
- Alt text for all images
- Proper heading hierarchy

## SEO Features

- Meta description and keywords
- Open Graph tags
- Semantic HTML structure
- Proper heading hierarchy
- Descriptive alt text

## Customization Tips

1. **Colors**: Modify CSS variables in `:root` selector
2. **Fonts**: Change Google Fonts import in HTML head
3. **Animations**: Adjust transition durations in CSS
4. **Content**: All content is in `index.html` for easy editing
5. **Chatbot**: Customize responses in `script.js` chatbotResponses object

## Contact Form

The contact form currently shows a success message. To make it functional:

1. Set up a backend service (Node.js, Python Flask/Django, etc.)
2. Update the fetch call in `script.js` contact form handler
3. Add proper error handling and validation

## Deployment

You can deploy this portfolio to:

- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Push to a repository and enable Pages
- **AWS S3**: Upload files to an S3 bucket
- **Any static hosting service**

## License

This portfolio template is free to use and modify for personal or commercial projects.

## Support

For questions or issues, please refer to the code comments or create an issue in the repository.

---

**Note**: Remember to replace all placeholder content, links, and images with your actual information before deploying!

