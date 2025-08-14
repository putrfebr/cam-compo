document.addEventListener('DOMContentLoaded', function () {
  // ====== MENU ACTIVE ======
  const menuLinks = document.querySelectorAll("header nav ul li a");

  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      menuLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // ====== SMOOTH SCROLL (semua anchor ke section) ======
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // ====== MENU TOGGLE (Mobile) ======
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('menu');

  if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('show');
    });
  }

  // ====== DROPDOWN MENU (Mobile) ======
  document.querySelectorAll('#menu li').forEach(li => {
    const link = li.querySelector(':scope > a');
    const sub = li.querySelector(':scope > ul');

    if (sub && link) {
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          li.classList.toggle('open');
        }
      });
    }
  });

  // ====== TUTUP MENU KALAU KLIK DI LUAR (Mobile) ======
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      const isClickInside = e.target.closest('header');
      if (!isClickInside && menu) {
        menu.classList.remove('show');
        document.querySelectorAll('#menu li.open').forEach(x => x.classList.remove('open'));
      }
    }
  });

  // ====== RESET MENU SAAT RESIZE KE DESKTOP ======
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && menu) {
      menu.classList.remove('show');
      document.querySelectorAll('#menu li.open').forEach(x => x.classList.remove('open'));
    }
  });

  // ====== SLIDER (Otomatis) ======
  let currentIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    if (slides[index]) {
      slides[index].classList.add('active');
    }
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  if (totalSlides > 0) {
    showSlide(currentIndex); // Tampilkan pertama
    setInterval(nextSlide, 3000); // Pindah tiap 3 detik
  }
});
