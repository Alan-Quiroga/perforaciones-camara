// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navbar = document.querySelector('.navbar');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenuBtn.classList.toggle('active');
  navbar.classList.toggle('active');
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});

/*
// Efecto Parallax para la imagen del hero
window.addEventListener('scroll', function() {
  const heroImage = document.querySelector('.hero-image img');
  const scrollPosition = window.pageYOffset;
  heroImage.style.transform = `perspective(1000px) rotateY(-10deg) translateY(${scrollPosition * 0.2}px)`;
});
*/

/*
// Efecto de aparición gradual de las cards al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
  const serviceCards = document.querySelectorAll('.service-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }, 150 * index);
      }
    });
  }, { threshold: 0.1 });
  

  serviceCards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
  });
});

*/
// Animación de los pasos al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
  const steps = document.querySelectorAll('.step');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateX(0)';
        }, 200 * index);
      }
    });
  }, { threshold: 0.1 });
  
  steps.forEach(step => {
    step.style.opacity = 0;
    step.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    if (step.querySelector('.step-content').classList.contains('odd')) {
      step.style.transform = 'translateX(-50px)';
    } else {
      step.style.transform = 'translateX(50px)';
    }
    
    observer.observe(step);
  });
});

// Inicialización del carrusel
document.addEventListener('DOMContentLoaded', function() {
  const projectsSwiper = new Swiper('.projects-swiper', {
    // Configuración del carrusel
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // Cuando el ancho es >= 768px
      768: {
        slidesPerView: 2,
      },
      // Cuando el ancho es >= 992px
      992: {
        slidesPerView: 3,
      }
    }
  });
});