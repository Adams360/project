// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle'

// import styles bundle
import 'swiper/css/bundle'

document.addEventListener('DOMContentLoaded', function () {
  const scrollRoot = document.querySelector('.hero') // Observe the hero section
  const navbar = document.querySelector('[data-navbar]')

  function handleIntersect(entries) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        navbar.classList.add('is-scrolled')
      } else {
        navbar.classList.remove('is-scrolled')
      }
    })
  }

  const observer = new IntersectionObserver(handleIntersect, {
    root: null,
    threshold: 1, // Adjust this based on when you want the callback to fire
  })

  if (scrollRoot) {
    observer.observe(scrollRoot)
  } else {
    console.error('No element found to observe')
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

  var brandsReelSwiper = new Swiper('.brandsReelSwiper', {
    loop: true,
    // spaceBetween: 10,
    slidesPerView: 3,
    // freeMode: true,
    watchSlidesProgress: true,
    grabCursor: true,

    thumbs: {
      swiper: brandsDisplaySwiper,
    },
    mousewheel: {
      invert: true,
    },
  })

  var brandsDisplaySwiper = new Swiper('.brandsDisplaySwiper', {
    // loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: brandsReelSwiper,
    },
  })

  var testimonialsSlider = new Swiper('.testimonialsSwiper', {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })

  // FAQ Accordion
  const accordion = document.querySelector('.accordion')

  accordion.addEventListener('click', (e) => {
    const activePanel = e.target.closest('.accordion__panel')
    if (!activePanel) return
    toggleAccordion(activePanel)
  })

  function toggleAccordion(panelToActivate) {
    const activeButton = panelToActivate.querySelector('button')
    const activePanel = panelToActivate.querySelector('.accordion__content')
    const activePanelIsOpened = activeButton.getAttribute('aria-expanded')

    if (activePanelIsOpened === 'true') {
      panelToActivate
        .querySelector('button')
        .setAttribute('aria-expanded', false)

      panelToActivate
        .querySelector('.accordion__content')
        .setAttribute('aria-hidden', true)
    } else {
      panelToActivate
        .querySelector('button')
        .setAttribute('aria-expanded', true)

      panelToActivate
        .querySelector('.accordion__content')
        .setAttribute('aria-hidden', false)
    }
  }
})
