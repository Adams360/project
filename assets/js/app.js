document.addEventListener('DOMContentLoaded', function () {
    const scrollRoot = document.querySelector('.hero'); // Observe the hero section
    const navbar = document.querySelector('[data-navbar]');
  
    function handleIntersect(entries) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          navbar.classList.add('is-scrolled');
        } else {
          navbar.classList.remove('is-scrolled');
        }
      });
    }
  
    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      threshold: 1, // Adjust this based on when you want the callback to fire
    });
  
    if (scrollRoot) {
      observer.observe(scrollRoot);
    } else {
      console.error('No element found to observe');
    }

  // Handler when the DOM is fully loaded

  // Toggle the side navigation
  const primaryNav = document.querySelector('#primary-navigation')
  const navToggle = document.querySelector('.navbar__toggle')

  navToggle.addEventListener('click', () => {
    const isVisible = primaryNav.getAttribute('data-visible')

    if (isVisible === 'false') {
      primaryNav.setAttribute('data-visible', true)
      navToggle.setAttribute('aria-expanded', true)
    } else {
      primaryNav.setAttribute('data-visible', false)
      navToggle.setAttribute('aria-expanded', false)
    }
  })
})
