// Theme toggle and navigation controls for Prodesk IT

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Management (Dark / Light Mode)
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const themeText = document.getElementById('themeText');
  const root = document.documentElement;

  function updateThemeUI(isDark) {
    if (themeIcon) {
      themeIcon.textContent = isDark ? '☾' : '☀';
    }
    if (themeText) {
      themeText.textContent = isDark ? 'Dark' : 'Light';
    }
  }

  // Determine initial state
  const isDarkMode = root.classList.contains('dark');
  updateThemeUI(isDarkMode);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const willBeDark = !root.classList.contains('dark');
      if (willBeDark) {
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      updateThemeUI(willBeDark);
    });
  }

  // 2. Mobile Navigation Toggle
  const menuToggle = document.getElementById('menuToggle');
  const primaryNav = document.getElementById('primaryNav');

  if (menuToggle && primaryNav) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      const newState = !isExpanded;

      menuToggle.setAttribute('aria-expanded', String(newState));
      
      if (newState) {
        primaryNav.classList.remove('hidden');
        primaryNav.classList.add('flex');
      } else {
        primaryNav.classList.add('hidden');
        primaryNav.classList.remove('flex');
      }
    });

    // Close mobile nav when clicking any link
    const navLinks = primaryNav.querySelectorAll('a');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
          primaryNav.classList.add('hidden');
          primaryNav.classList.remove('flex');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Close when clicking outside on mobile
    document.addEventListener('click', (event) => {
      if (
        window.innerWidth < 768 &&
        !primaryNav.contains(event.target) &&
        !menuToggle.contains(event.target) &&
        !primaryNav.classList.contains('hidden')
      ) {
        primaryNav.classList.add('hidden');
        primaryNav.classList.remove('flex');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
        primaryNav.classList.add('hidden');
        primaryNav.classList.remove('flex');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.focus();
      }
    });
  }

  // 3. Dynamic Footer Copyright Year
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});