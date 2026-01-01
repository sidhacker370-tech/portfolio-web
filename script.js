// ============================================
// Navigation & Smooth Scrolling
// ============================================

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
    });
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    activateNavLink();
    lastScroll = currentScroll;
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Skill Bars Animation
// ============================================

const skillBars = document.querySelectorAll('.skill-progress');
const skillsSection = document.querySelector('.skills-section');

const animateSkillBars = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBar = entry.target;
            const width = skillBar.style.width;
            skillBar.style.width = '0%';
            
            setTimeout(() => {
                skillBar.style.width = width;
            }, 100);
            
            observer.unobserve(skillBar);
        }
    });
};

const skillObserver = new IntersectionObserver(animateSkillBars, {
    threshold: 0.5
});

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// ============================================
// Portfolio Item Animation
// ============================================

const portfolioItems = document.querySelectorAll('.portfolio-item');

const animatePortfolio = (entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            observer.unobserve(entry.target);
        }
    });
};

const portfolioObserver = new IntersectionObserver(animatePortfolio, {
    threshold: 0.1
});

portfolioItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    portfolioObserver.observe(item);
});

// ============================================
// Blog Card Animation
// ============================================

const blogCards = document.querySelectorAll('.blog-card');

const animateBlog = (entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            observer.unobserve(entry.target);
        }
    });
};

const blogObserver = new IntersectionObserver(animateBlog, {
    threshold: 0.1
});

blogCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    blogObserver.observe(card);
});

// ============================================
// Contact Form Handling
// ============================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission (replace with actual API call)
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 1500);
    
    // In a real application, you would send the data to a server:
    // fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data)
    // })
    // .then(response => response.json())
    // .then(data => {
    //     alert('Thank you for your message!');
    //     contactForm.reset();
    // })
    // .catch(error => {
    //     alert('An error occurred. Please try again.');
    // });
});

// ============================================
// AI Chatbot Functionality
// ============================================

const chatbotToggle = document.querySelector('.chatbot-toggle');
const chatbotWindow = document.getElementById('chatbotWindow');
const chatbotClose = document.querySelector('.chatbot-close');
const chatbotMessages = document.getElementById('chatbotMessages');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotSend = document.getElementById('chatbotSend');

// Toggle chatbot
chatbotToggle.addEventListener('click', () => {
    chatbotWindow.classList.toggle('active');
    const isExpanded = chatbotToggle.getAttribute('aria-expanded') === 'true';
    chatbotToggle.setAttribute('aria-expanded', !isExpanded);
    if (chatbotWindow.classList.contains('active')) {
        chatbotInput.focus();
    }
});

chatbotClose.addEventListener('click', () => {
    chatbotWindow.classList.remove('active');
    chatbotToggle.setAttribute('aria-expanded', 'false');
});

// Chatbot responses (simple rule-based system)
const chatbotResponses = {
    greetings: [
        "Hello! How can I help you today?",
        "Hi there! What would you like to know?",
        "Greetings! I'm here to assist you."
    ],
    portfolio: [
        "I've worked on various projects including AI-powered e-commerce platforms, chatbots, and analytics dashboards. Check out my portfolio section for more details!",
        "My portfolio includes projects in AI integration, full stack development, and machine learning. Feel free to browse the portfolio section!"
    ],
    skills: [
        "I specialize in full stack development with React, Node.js, Python, and AI frameworks like TensorFlow and PyTorch. Check the skills section for a complete list!",
        "My technical skills span frontend (React, Vue.js), backend (Node.js, Python), and AI tools (TensorFlow, PyTorch). See the skills section for details!"
    ],
    contact: [
        "You can reach me through the contact form on this page, or connect with me on LinkedIn, GitHub, or Twitter. Links are in the contact section!",
        "Feel free to use the contact form or reach out via social media. All my contact information is in the contact section!"
    ],
    default: [
        "That's interesting! Could you tell me more?",
        "I'm here to help. What else would you like to know?",
        "Feel free to ask me about my projects, skills, or experience!"
    ]
};

function getChatbotResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    if (message.match(/hello|hi|hey|greetings/)) {
        return chatbotResponses.greetings[Math.floor(Math.random() * chatbotResponses.greetings.length)];
    } else if (message.match(/portfolio|project|work|projects/)) {
        return chatbotResponses.portfolio[Math.floor(Math.random() * chatbotResponses.portfolio.length)];
    } else if (message.match(/skill|technology|tech|framework/)) {
        return chatbotResponses.skills[Math.floor(Math.random() * chatbotResponses.skills.length)];
    } else if (message.match(/contact|email|reach|connect/)) {
        return chatbotResponses.contact[Math.floor(Math.random() * chatbotResponses.contact.length)];
    } else {
        return chatbotResponses.default[Math.floor(Math.random() * chatbotResponses.default.length)];
    }
}

function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chatbot-message ${isUser ? 'user-message' : 'bot-message'}`;
    messageDiv.innerHTML = `<p>${message}</p>`;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function sendMessage() {
    const message = chatbotInput.value.trim();
    if (message) {
        addMessage(message, true);
        chatbotInput.value = '';
        
        // Simulate thinking delay
        setTimeout(() => {
            const response = getChatbotResponse(message);
            addMessage(response, false);
        }, 500);
    }
}

chatbotSend.addEventListener('click', sendMessage);
chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// ============================================
// Lazy Loading Images
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// Form Validation Enhancement
// ============================================

const formInputs = contactForm.querySelectorAll('input, textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.validity.valid) {
            input.classList.remove('error');
        } else {
            input.classList.add('error');
        }
    });
});

// ============================================
// Accessibility: Keyboard Navigation
// ============================================

// Skip to main content
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && !document.querySelector('.skip-link:focus')) {
        const skipLink = document.createElement('a');
        skipLink.href = '#home';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'Skip to main content';
        document.body.insertBefore(skipLink, document.body.firstChild);
    }
});

// ============================================
// Performance: Debounce Function
// ============================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll events
const optimizedScroll = debounce(() => {
    activateNavLink();
}, 10);

window.addEventListener('scroll', optimizedScroll);

// ============================================
// Initialize on DOM Load
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Set initial active nav link
    activateNavLink();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

