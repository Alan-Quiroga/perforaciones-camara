// ============================================
// MENÚ MÓVIL CON CIERRE AL TOCAR FUERA
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navbar = document.querySelector('.navbar');
  
  // Crear overlay si no existe
  let overlay = document.querySelector('.navbar-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'navbar-overlay';
    document.body.appendChild(overlay);
  }
  
  // Función para cerrar menú
  function closeMenu() {
    if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
    if (navbar) navbar.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = ''; // Restaurar scroll
  }
  
  // Función para abrir menú
  function openMenu() {
    if (mobileMenuBtn) mobileMenuBtn.classList.add('active');
    if (navbar) navbar.classList.add('active');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Bloquear scroll
  }
  
  // Toggle del botón hamburguesa
  if (mobileMenuBtn && navbar) {
    mobileMenuBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      if (navbar.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }
  
  // Cerrar al hacer clic en el overlay
  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }
  
  // Cerrar al hacer clic en cualquier enlace del menú
  const navLinks = document.querySelectorAll('.nav-link, .btn-nav');
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  
  // Cerrar al presionar tecla ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navbar && navbar.classList.contains('active')) {
      closeMenu();
    }
  });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (header) {
    header.classList.toggle('scrolled', window.scrollY > 50);
  }
});

// ============================================
// RESTO DE TU CÓDIGO (services, carrusel, formulario...)
// ============================================
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

      ajustarVisibilidadPorPantalla();
    });
  });

  function ajustarVisibilidadPorPantalla() {
    const ancho = window.innerWidth;
    const features = document.querySelectorAll('.service-features');
    const botones = document.querySelectorAll('.features-toggle');
    const cards = document.querySelectorAll('.service-card');

    if (ancho >= 769) {
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
    },
    on: {
      init: function () {
        setTimeout(() => {
          const slides = document.querySelectorAll('.project-slide');
          let maxHeight = 0;

          slides.forEach(slide => {
            slide.style.height = 'auto';
            const height = slide.offsetHeight;
            if (height > maxHeight) {
              maxHeight = height;
            }
          });

          slides.forEach(slide => {
            slide.style.height = maxHeight + 'px';
          });
        }, 100);
      }
    }
  });
});

// ===============================
// FORMULARIO A WHATSAPP
// ===============================
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');

  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('phone').value.trim();
    const servicio = document.getElementById('service').value;
    const mensaje = document.getElementById('message').value.trim();

    if (!nombre || !email || !telefono || !servicio || !mensaje) {
      alert('Por favor complete todos los campos');
      return;
    }

    const texto = 
`Hola! 👋
Quiero consultar por un servicio.

🧑 Nombre: ${nombre}
📧 Email: ${email}
📞 Teléfono: ${telefono}
🔧 Servicio: ${servicio}

📝 Mensaje:
${mensaje}`;

    const textoCodificado = encodeURIComponent(texto);
    const numero = "541139183289";
    const url = `https://wa.me/${numero}?text=${textoCodificado}`;

    window.open(url, '_blank');
    form.reset();
  });
});