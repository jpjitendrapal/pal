(function () {
  'use strict';

  // Navigation and Smooth Scrolling
  const navLinks = document.querySelectorAll('.jump-link');
  const sections = document.querySelectorAll('.content');

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      const targetId = this.getAttribute('data-id');
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // No collapsible logic needed for the timeline structure

  // Robust Scrollspy Logic
  function updateActiveNav() {
    let currentSectionId = 'about';
    const scrollPosition = window.scrollY + 150; // Offset for header + buffer

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.id;
      }
    });

    // Special case: bottom of the page
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
      currentSectionId = sections[sections.length - 1].id;
    }

    // Special case: top of the page
    if (window.scrollY < 100) {
      currentSectionId = 'about';
    }

    navLinks.forEach(link => {
      link.classList.toggle('selected', link.getAttribute('data-id') === currentSectionId);
    });
  }

  window.addEventListener('scroll', updateActiveNav);
  window.addEventListener('resize', updateActiveNav);
  updateActiveNav(); // Initial check

  // Dynamic Experience Calculation
  function updateExperience() {
    const joinDate = new Date('2011-07-16');
    const today = new Date();
    
    let years = today.getFullYear() - joinDate.getFullYear();
    let months = today.getMonth() - joinDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    const expElement = document.querySelector('.dynamic-exp');
    const expYearsElement = document.querySelector('.dynamic-exp-years');
    
    if (expElement) {
      expElement.textContent = `${years} Years ${months > 0 ? months + ' Months' : ''}`;
    }
    if (expYearsElement) {
      expYearsElement.textContent = years;
    }
  }

  // Scroll to Top Button
  function addScrollToTop() {
    const btn = document.createElement('button');
    btn.innerHTML = '↑';
    btn.id = 'scrollTopBtn';
    btn.style.cssText = `
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background: var(--accent-gradient);
      color: white;
      border: none;
      cursor: pointer;
      display: none;
      font-size: 1.5rem;
      box-shadow: 0 10px 15px -3px rgba(139, 92, 246, 0.3);
      z-index: 1000;
      transition: transform 0.3s ease;
    `;
    
    btn.addEventListener('mouseenter', () => btn.style.transform = 'scale(1.1)');
    btn.addEventListener('mouseleave', () => btn.style.transform = 'scale(1)');
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
      btn.style.display = window.scrollY > 500 ? 'block' : 'none';
    });
  }

  // Initialize
  updateExperience();
  addScrollToTop();
})();
