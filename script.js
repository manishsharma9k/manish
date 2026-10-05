// Loader animation
const loaderScreen = document.getElementById('loaderScreen');
window.addEventListener('load', () => {
  setTimeout(() => {
    loaderScreen.classList.add('hidden');
  }, 900);
});

// Typed role animation
const roles = ['Frontend Developer', 'UI Engineer', 'React Developer', 'Web Designer'];
let roleIndex = 0, charIndex = 0, isDeleting = false;
const typedEl = document.getElementById('typed-text');

if (typedEl) {
  function type() {
    const current = roles[roleIndex];
    typedEl.textContent = isDeleting ? current.slice(0, charIndex--) : current.slice(0, charIndex++);
    if (!isDeleting && charIndex === current.length + 1) {
      setTimeout(() => isDeleting = true, 1500);
    } else if (isDeleting && charIndex === -1) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      charIndex = 0;
    }
    setTimeout(type, isDeleting ? 60 : 100);
  }
  type();
}

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 80) current = sec.getAttribute('id');
  });
  links.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--primary)' : '';
  });
});

// Scroll fade-in animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.skill-card, .project-card, .stat, .about-text, .contact-info, .contact-form, .service-card')
  .forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const msg = document.getElementById('formMsg');
  msg.textContent = '✅ Message sent successfully!';
  this.reset();
  setTimeout(() => msg.textContent = '', 4000);
});
