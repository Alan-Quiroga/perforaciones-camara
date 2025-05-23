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

document.addEventListener('DOMContentLoaded', function() {
  const toggleButtons = document.querySelectorAll('.features-toggle');
  
  if (window.matchMedia("(max-width: 768px)").matches) {
    toggleButtons.forEach(button => {
      // Inicialización
      const card = button.closest('.service-card');
      const features = button.nextElementSibling;
      
      // Calcular alturas
      const basicHeight = card.querySelector('.service-icon').offsetHeight + 
                         card.querySelector('h3').offsetHeight + 
                         card.querySelector('p').offsetHeight + 
                         button.offsetHeight + 40; // 40px de márgenes/paddings
      
      // Establecer altura inicial
      card.style.height = basicHeight + 'px';
      card.classList.remove('expanded');
      
      // Evento click
      button.addEventListener('click', function() {
        const isExpanding = !card.classList.contains('expanded');
        
        if (isExpanding) {
          // Calcular altura total cuando se expande
          const fullHeight = basicHeight + features.scrollHeight;
          card.style.height = fullHeight + 'px';
        } else {
          // Volver a altura básica
          card.style.height = basicHeight + 'px';
        }
        
        // Alternar clases
        card.classList.toggle('expanded');
        features.classList.toggle('active');
        this.classList.toggle('active');
        
        // Cambiar texto del botón
        this.textContent = isExpanding 
          ? '▲ Ocultar características' 
          : '▼ Ver características';
      });
    });
  }
});

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