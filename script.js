// CURSOR GLOW EFFECT
const glow = document.querySelector('.cursor-glow');

window.addEventListener('mousemove', (e) => {
  glow.style.left = e.clientX - 150 + 'px';
  glow.style.top = e.clientY - 150 + 'px';
});

// SMOOTH SCROLL TO CONTACT FORM
function scrollToForm() {
  document.querySelector('#contact').scrollIntoView({
    behavior: 'smooth'
  });
}

// NAVBAR SCROLL EFFECT
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(0,0,0,0.75)';
    navbar.style.backdropFilter = 'blur(20px)';
    navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.4)';
  } else {
    navbar.style.background = 'rgba(0,0,0,0.45)';
    navbar.style.boxShadow = 'none';
  }
});

// HERO ANIMATION
const heroContent = document.querySelector('.hero-content');
const heroCards = document.querySelectorAll('.glass-card');

window.addEventListener('load', () => {
  heroContent.classList.add('show');

  heroCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('show-card');
    }, index * 300);
  });
});

// SERVICE CARD HOVER EFFECT
const cards = document.querySelectorAll('.service-card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-15px) scale(1.02)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0px) scale(1)';
  });
});

// WHATSAPP FORM SUBMIT
const form = document.getElementById('bookingForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value;

  // VALIDATION
  if (name === '' || phone === '') {
    alert('Please fill all required fields');
    return;
  }

  // WHATSAPP MESSAGE
  const text =
`🔥 *New Booking - NV HUB* 

👤 Name: ${name}

📞 Phone: ${phone}

🛠 Service: ${service}

📝 Issue:
${message}`;

  // ENCODE MESSAGE
  const encodedText = encodeURIComponent(text);

  // OPEN WHATSAPP
  window.open(
    `https://wa.me/918796493504?text=${encodedText}`,
    '_blank'
  );

  // RESET FORM
  form.reset();
});

// SCROLL REVEAL ANIMATION
const revealElements = document.querySelectorAll(
  '.service-card, .why-card, .testimonial-card, .about-right, .contact-box'
);

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const revealTop = el.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {
      el.classList.add('active-reveal');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);

// AUTO RUN
revealOnScroll();

// FLOATING ANIMATION RANDOM
const floatingCards = document.querySelectorAll('.glass-card');

floatingCards.forEach((card, index) => {
  card.style.animationDuration = `${4 + index}s`;
});

// BUTTON RIPPLE EFFECT
const buttons = document.querySelectorAll(
  '.primary-btn, .secondary-btn, .service-card button, form button'
);

buttons.forEach(button => {
  button.addEventListener('click', function (e) {

    const ripple = document.createElement('span');

    ripple.classList.add('ripple');

    const rect = button.getBoundingClientRect();

    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// TYPING EFFECT
const heading = document.querySelector('.hero h1');

const text = heading.innerHTML;

heading.innerHTML = '';

let i = 0;

function typeEffect() {

  if (i < text.length) {
    heading.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 40);
  }
}

window.addEventListener('load', typeEffect);