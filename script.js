
// Initialize Particles
particlesJS('particles-js', {
  particles: {
    number: { value: 150, density: { enable: true, value_area: 800 } },
    color: { value: ["#8a2be2", "#00ffff", "#ff00ff"] },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" }
    },
    opacity: {
      value: 0.6,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 4,
      random: true,
      anim: { enable: true, speed: 2, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#00ffff",
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: true, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

// Navbar scroll effect
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Countdown Timer
function updateCountdown() {
  const now = new Date();
  // Mahashivratri 2026 - February 15, 2026 at midnight
  const mahashivratriDate = new Date(2026, 1, 15, 0, 0, 0);

  const diff = mahashivratriDate - now;

  if (diff <= 0) {
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days.toString().padStart(2, '0');
  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// Blessing Generator
const blessings = [
  "🕉️ May Lord Shiva's trident destroy all your sorrows and grant you eternal peace and prosperity. Har Har Mahadev! 🕉️",
  "✨ May the cosmic dance of Shiva bring perfect harmony, balance, and divine rhythm to every aspect of your life. ✨",
  "💧 May the sacred Ganges flowing from Shiva's matted locks cleanse your soul of all impurities and bless you with spiritual purity. 💧",
  "🌙 May the crescent moon adorning Shiva's head illuminate your path with divine wisdom, clarity, and inner peace. 🌙",
  "🐍 May the serpent Vasuki around Shiva's neck protect you from all negativity, fear, and evil forces. You are divinely protected. 🐍",
  "🔥 May the fire of Shiva's third eye burn away all ignorance, ego, and darkness, awakening the light of supreme consciousness within you. 🔥",
  "🕉️ Har Har Mahadev! May Shiva's infinite blessings shower upon you, your family, and all your endeavors. May you attain moksha. 🕉️",
  "💫 May you find the profound stillness of Shiva within yourself during this sacred Mahashivratri night. Experience oneness with the universe. 💫",
  "🌟 May Shiva's damru (cosmic drum) rhythm guide you to spiritual awakening and help you hear the divine sound of creation. 🌟",
  "🌺 May the sacred Bilva leaves you offer bring divine grace, fulfillment of all righteous desires, and liberation from the cycle of birth and death. 🌺",
  "⚡ May Shiva's immense power and compassion transform your life, removing all obstacles and granting you strength to overcome any challenge. ⚡",
  "🌌 May you experience the vastness of Shiva's consciousness, transcending all limitations and realizing your true divine nature. 🌌",
  "🙏 May your devotion on this Mahashivratri night reach the abode of Shiva, bringing blessings beyond your imagination. Om Namah Shivaya! 🙏",
  "🌈 May Shiva's rainbow-colored aura surround you with love, joy, and divine protection. May your life be filled with spiritual colors. 🌈",
  "💫 May the ash (vibhuti) on Shiva's body remind you of life's impermanence and inspire you to seek eternal truth and liberation. 💫"
];

const blessingBtn = document.getElementById('blessingBtn');
const blessingDisplay = document.getElementById('blessingDisplay');
const blessingText = document.getElementById('blessingText');

blessingBtn.addEventListener('click', function () {
  // Remove show class for animation
  blessingDisplay.classList.remove('show');

  // Generate new blessing after brief delay
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * blessings.length);
    const randomBlessing = blessings[randomIndex];

    blessingText.textContent = '';
    blessingDisplay.classList.add('show');

    // Typing effect
    let i = 0;
    const typeWriter = setInterval(() => {
      if (i < randomBlessing.length) {
        blessingText.textContent += randomBlessing.charAt(i);
        i++;
      } else {
        clearInterval(typeWriter);
      }
    }, 30);

    // Vibration effect on button
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = '';
    }, 200);

    // Add to history
    addToBlessingHistory(randomBlessing);
  }, 300);
});

function addToBlessingHistory(blessing) {
  console.log('Blessing received:', blessing);
}

// Smooth scrolling for navigation
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: 'smooth'
      });

      // Update active link
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    }
  });
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe multiple elements
document.querySelectorAll('.feature-card, .countdown-card, .section-title, .darshan-card').forEach(el => {
  observer.observe(el);
});

// Add delay to animations
document.querySelectorAll('.feature-card').forEach((el, index) => {
  el.style.animationDelay = `${0.2 + index * 0.1}s`;
});

// Cosmic background animation
function createAdvancedCosmicEffect() {
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.zIndex = '-4';
  canvas.style.pointerEvents = 'none';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const stars = [];
  const numStars = 300;

  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speed: Math.random() * 0.8 + 0.2,
      opacity: Math.random() * 0.6 + 0.2,
      color: Math.random() > 0.5 ? '#8a2be2' : '#00ffff'
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${star.color === '#8a2be2' ? '138, 43, 226' : '0, 255, 255'}, ${star.opacity})`;
      ctx.fill();

      // Move stars
      star.y += star.speed;
      if (star.y > canvas.height) {
        star.y = 0;
        star.x = Math.random() * canvas.width;
      }

      // Twinkle effect
      if (Math.random() > 0.95) {
        star.opacity = Math.random() * 0.6 + 0.2;
      }
    });

    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// Initialize cosmic effect
createAdvancedCosmicEffect();

// Add interactive particle effect on click
document.addEventListener('click', function (e) {
  // Create ripple effect
  const ripple = document.createElement('span');
  ripple.style.position = 'absolute';
  ripple.style.width = '0';
  ripple.style.height = '0';
  ripple.style.border = '3px solid var(--glow)';
  ripple.style.borderRadius = '50%';
  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`;
  ripple.style.pointerEvents = 'none';
  ripple.style.zIndex = '9999';
  ripple.style.opacity = '0.7';
  document.body.appendChild(ripple);

  // Animate ripple
  let size = 0;
  const animateRipple = setInterval(() => {
    size += 5;
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - size / 2}px`;
    ripple.style.top = `${e.clientY - size / 2}px`;
    ripple.style.opacity = `${0.7 - size / 100}`;

    if (size > 100) {
      clearInterval(animateRipple);
      ripple.remove();
    }
  }, 20);
});

// Auto-scroll blessing on hover
blessingDisplay.addEventListener('mouseenter', function () {
  if (this.scrollHeight > this.clientHeight) {
    this.style.overflowY = 'auto';
    this.style.scrollbarWidth = 'thin';
  }
});

blessingDisplay.addEventListener('mouseleave', function () {
  this.style.overflowY = 'hidden';
});

// Console message for developers
console.log('%c🕉️ Har Har Mahadev! 🕉️', 'font-size: 24px; color: #8a2be2; font-weight: bold;');
console.log('%cWelcome to the Mahashivratri 2026 Futuristic Website!', 'font-size: 16px; color: #00ffff;');
console.log('%cMay Lord Shiva bless you with peace, prosperity, and spiritual awakening.', 'font-size: 14px; color: #ffd700;');