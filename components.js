document.addEventListener("DOMContentLoaded", () => {
  // Inject Header
  const headerHTML = `
    <header id="header">
      <div class="container nav-container">
        <a href="index.html" class="logo">
          Vibgyor
        </a>
        <nav class="nav-links" id="nav-links">
          <a href="index.html" data-page="home">Home</a>
          <a href="services.html" data-page="services">Services</a>
          <a href="gallery.html" data-page="gallery">Gallery</a>
          <a href="about.html" data-page="about">About</a>
          <a href="contact.html" data-page="contact">Contact</a>
        </nav>
        <div class="nav-actions">
          <button class="theme-toggle" id="theme-toggle" aria-label="Toggle theme">
            <i class="fas fa-moon"></i>
          </button>
          <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Menu">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  `;

  // Inject Footer
  const footerHTML = `
    <footer>
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <a href="index.html" class="logo" style="margin-bottom: 1.5rem;">
              <div class="logo-bars">
                <div class="logo-bar" style="height: 16px;"></div>
                <div class="logo-bar" style="height: 16px;"></div>
                <div class="logo-bar" style="height: 16px;"></div>
                <div class="logo-bar" style="height: 16px;"></div>
                <div class="logo-bar" style="height: 16px;"></div>
                <div class="logo-bar" style="height: 16px;"></div>
                <div class="logo-bar" style="height: 16px;"></div>
              </div>
              Vibgyor
            </a>
            <p>Premium printing, design, branding and signage solutions in Taliparamba, Payyanur, and Kannur.</p>
          </div>
          <div class="footer-col">
            <h4>Quick Links</h4>
            <div class="footer-links">
              <a href="index.html">Home</a>
              <a href="about.html">About Us</a>
              <a href="services.html">Our Services</a>
              <a href="gallery.html">Portfolio</a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Services</h4>
            <div class="footer-links">
              <a href="services.html">Flex Printing</a>
              <a href="services.html">Vinyl & Stickers</a>
              <a href="services.html">UV Printing</a>
              <a href="services.html">Signage & Branding</a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <div class="footer-links">
              <a href="tel:+919876543210"><i class="fas fa-phone" style="width: 20px;"></i> +91 98765 43210</a>
              <a href="mailto:hello@vibgyor.com"><i class="fas fa-envelope" style="width: 20px;"></i> hello@vibgyor.com</a>
              <span><i class="fas fa-map-marker-alt" style="width: 20px;"></i> Taliparamba, Kerala</span>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          &copy; ${new Date().getFullYear()} Vibgyor Advertising. All rights reserved. Designed for excellence.
        </div>
      </div>
    </footer>
  `;

  // Insert header right after body tag if not present
  if (!document.getElementById('header')) {
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
  }

  // Insert footer right before body close tag
  if (!document.querySelector('footer')) {
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }

  // Initialize theme, active links, and mobile menu
  initTheme();
  initNavigation();
});

function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const icon = themeToggle.querySelector('i');
  
  // Check local storage
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme, icon);

  themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    let newTheme = theme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme, icon);
  });
}

function updateThemeIcon(theme, icon) {
  if (theme === 'dark') {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

function initNavigation() {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');
  const icon = mobileBtn.querySelector('i');

  // Set active link
  const currentPage = document.body.getAttribute('data-page');
  if (currentPage) {
    const activeLink = document.querySelector(`.nav-links a[data-page="${currentPage}"]`);
    if (activeLink) activeLink.classList.add('active');
  }

  // Mobile menu toggle
  mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    if (navLinks.classList.contains('show')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });
}
