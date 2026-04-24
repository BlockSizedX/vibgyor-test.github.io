document.addEventListener("DOMContentLoaded", () => {
  // Scroll Reveal Animations
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  };

  const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
  
  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // Gallery Filtering
  const filterChips = document.querySelectorAll('.filter-chip');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (filterChips.length > 0 && galleryItems.length > 0) {
    filterChips.forEach(chip => {
      chip.addEventListener('click', () => {
        if(chip.style.cursor === 'default') return; // Skip if it's a non-clickable chip

        // Remove active class from all
        filterChips.forEach(c => {
          if(c.style.cursor !== 'default') c.classList.remove('active');
        });
        // Add active class to clicked
        chip.classList.add('active');

        const filterValue = chip.getAttribute('data-filter');

        galleryItems.forEach(item => {
          if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
            item.style.display = 'block';
            setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'scale(1)'; }, 50);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.9)';
            setTimeout(() => { item.style.display = 'none'; }, 300);
          }
        });
      });
    });
  }

  // Contact Form Validation
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const formMessage = document.getElementById('form-message');

      if (!name || !email || !message) {
        formMessage.textContent = 'Please fill out all required fields.';
        formMessage.className = 'form-message error';
        return;
      }

      // Simple email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.className = 'form-message error';
        return;
      }

      // Success simulation
      formMessage.textContent = 'Thank you! Your message has been sent successfully. We will get back to you shortly.';
      formMessage.className = 'form-message success';
      contactForm.reset();
      
      // Hide message after 5 seconds
      setTimeout(() => {
        formMessage.style.display = 'none';
        formMessage.className = 'form-message';
      }, 5000);
    });
  }
});
