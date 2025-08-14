// ====== SLIDER ======
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 4000); // ganti slide tiap 4 detik

// ====== MENU ACTIVE ======
const menuLinks = document.querySelectorAll("header nav ul li a");

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// ====== SMOOTH SCROLL ======
document.querySelectorAll('a[href^="#tentang"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('menu');

  // Toggle main menu on mobile
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('show');
    });
  }

  // Handle dropdown toggle only for mobile
  document.querySelectorAll('#menu li').forEach(li => {
    const link = li.querySelector(':scope > a');
    const sub = li.querySelector(':scope > ul');

    if (sub && link) {
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          // Mobile: toggle submenu
          e.preventDefault();
          li.classList.toggle('open');
        }
        // Desktop: no preventDefault -> link works normally
      });
    }
  });

  // Optional: close menu when clicking outside (mobile)
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      const isClickInside = e.target.closest('header');
      if (!isClickInside) {
        menu.classList.remove('show');
        document.querySelectorAll('#menu li.open').forEach(x => x.classList.remove('open'));
      }
    }
  });

  // Close menu & dropdowns when resizing to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      menu.classList.remove('show');
      document.querySelectorAll('#menu li.open').forEach(x => x.classList.remove('open'));
    }
  });
});
