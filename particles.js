// Sahifada nechta particle ko’rinishi
const PARTICLE_COUNT = 25;

function createParticle() {
  const particle = document.createElement("div");
  particle.classList.add("particle");

  // random rang: moviy yoki qizil neon
  const hue = Math.random() < 0.5 ? 200 : 0;
  particle.style.color = `hsl(${hue}, 100%, 60%)`;

  // random pozitsiya
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;

  // random hajm / animation delay
  const size = 4 + Math.random() * 5;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  const delay = Math.random() * 8;
  const duration = 6 + Math.random() * 6;
  particle.style.animationDelay = `-${delay}s`;
  particle.style.animationDuration = `${duration}s`;

  document.getElementById("particles").appendChild(particle);
}

// Barcha particlelarni boshlash
function initParticles() {
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    createParticle();
  }
}

// Papkada 10 marta ko’roq yangi particle qo’shish (siz istasangiz o’chirish mumkin)
function addMoreParticles() {
  for (let i = 0; i < 10; i++) {
    createParticle();
  }
}

// DOM yuklandi, particlelarni yarat
document.addEventListener("DOMContentLoaded", () => {
  initParticles();
  // agar xohlasa, har 10 sekundda 10 ta yangi neon qo’shsin
  setInterval(addMoreParticles, 10000);
});
