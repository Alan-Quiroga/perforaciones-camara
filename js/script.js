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

// Expansión dinámica de servicios (botones + rotación responsive)
document.addEventListener('DOMContentLoaded', function () {
  const toggleButtons = document.querySelectorAll('.features-toggle');

  toggleButtons.forEach(button => {
    const card = button.closest('.service-card');
    const features = card.querySelector('.service-features');
    const icon = card.querySelector('.service-icon');
    const title = card.querySelector('h3');
    const desc = card.querySelector('p');

    const baseHeight = icon.offsetHeight + title.offsetHeight + desc.offsetHeight + button.offsetHeight + 40;
    card.style.height = baseHeight + 'px';
    card.classList.remove('expanded');
    features.classList.remove('active');

    button.addEventListener('click', function () {
      const isExpanding = !card.classList.contains('expanded');

      if (isExpanding) {
        const fullHeight = baseHeight + features.scrollHeight + 20;
        card.style.height = fullHeight + 'px';
      } else {
        card.style.height = baseHeight + 'px';
      }

      card.classList.toggle('expanded');
      features.classList.toggle('active');
      button.classList.toggle('active');

      this.textContent = isExpanding
        ? '▲ Ocultar características'
        : '▼ Ver características';

      ajustarVisibilidadPorPantalla(); // asegura estilo correcto tras click
    });
  });

  // Función para ajustar el comportamiento responsive
  function ajustarVisibilidadPorPantalla() {
    const ancho = window.innerWidth;
    const features = document.querySelectorAll('.service-features');
    const botones = document.querySelectorAll('.features-toggle');
    const cards = document.querySelectorAll('.service-card');

    if (ancho >= 769 && ancho <= 900) {
      // Modo tablet: mostrar todo
      features.forEach(el => {
        el.style.maxHeight = 'none';
        el.style.opacity = '1';
        el.style.padding = '0 15px 15px';
        el.style.overflow = 'visible';
      });
      botones.forEach(btn => {
        btn.style.display = 'none';
      });
      cards.forEach(card => {
        card.style.height = 'auto';
      });
    } else {
      // Modo móvil: vuelve a comportamiento animado
      features.forEach(el => {
        const card = el.closest('.service-card');
        if (!card.classList.contains('expanded')) {
          el.style.maxHeight = '0';
          el.style.opacity = '0';
          el.style.padding = '0 15px';
          el.style.overflow = 'hidden';
        } else {
          el.style.maxHeight = '1000px';
          el.style.opacity = '1';
          el.style.padding = '0 15px 15px';
          el.style.overflow = 'visible';
        }
      });
      botones.forEach(btn => {
        btn.style.display = 'block';
      });

      // Recalcular altura de cada card
      cards.forEach(card => {
        const icon = card.querySelector('.service-icon');
        const title = card.querySelector('h3');
        const desc = card.querySelector('p');
        const button = card.querySelector('.features-toggle');
        const features = card.querySelector('.service-features');

        const baseHeight = icon.offsetHeight + title.offsetHeight + desc.offsetHeight + button.offsetHeight + 40;

        if (card.classList.contains('expanded')) {
          const fullHeight = baseHeight + features.scrollHeight + 20;
          card.style.height = fullHeight + 'px';
        } else {
          card.style.height = baseHeight + 'px';
        }
      });
    }
  }

  // Ejecutar al cargar y al cambiar tamaño
  window.addEventListener('load', ajustarVisibilidadPorPantalla);
  window.addEventListener('resize', ajustarVisibilidadPorPantalla);
});

// Animación de los pasos al hacer scroll
document.addEventListener('DOMContentLoaded', function () {
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
document.addEventListener('DOMContentLoaded', function () {
  const projectsSwiper = new Swiper('.projects-swiper', {
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
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      }
    }
  });
});
