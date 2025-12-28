// script.js
const wrapper = document.getElementById('carouselWrapper');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicators = document.getElementById('indicators');
const progressFill = document.getElementById('progressFill');

const prevBtnTop = document.getElementById('prevBtnTop');
const nextBtnTop = document.getElementById('nextBtnTop');
const indicatorsTop = document.getElementById('indicatorsTop');

let currentIndex = 0;
const totalSlides = 6;

// Criar indicadores principais
for (let i = 0; i < totalSlides; i++) {
  const indicator = document.createElement('div');
  indicator.className = 'indicator';
  indicator.addEventListener('click', () => goToSlide(i));
  indicators.appendChild(indicator);
}

// Criar indicadores do topo
for (let i = 0; i < totalSlides; i++) {
  const indicator = document.createElement('div');
  indicator.classList.add('indicator-minimal');
  indicator.addEventListener('click', () => goToSlide(i));
  indicatorsTop.appendChild(indicator);
}

function goToSlide(index) {
  if (index >= 0 && index < totalSlides) {
    currentIndex = index;
    updateCarousel();
  }
}

function updateCarousel() {
  const offset = currentIndex * -100;
  wrapper.style.transform = `translateX(${offset}%)`;

  // Atualizar classes dos slides
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, idx) => {
    slide.classList.remove('active', 'prev', 'next');
    if (idx === currentIndex) {
      slide.classList.add('active');
    } else if (idx === currentIndex - 1) {
      slide.classList.add('prev');
    } else if (idx === currentIndex + 1) {
      slide.classList.add('next');
    }
  });

  // Atualizar indicadores
  document.querySelectorAll('.indicator, .indicator-minimal').forEach((ind, idx) => {
    ind.classList.toggle('active', idx === currentIndex);
  });

  // Atualizar botões
  const isStart = currentIndex === 0;
  const isEnd = currentIndex === totalSlides - 1;
  prevBtn.disabled = prevBtnTop.disabled = isStart;
  nextBtn.disabled = nextBtnTop.disabled = isEnd;

  // Atualizar barra de progresso
  const progressPercent = ((currentIndex + 1) / totalSlides) * 100;
  progressFill.style.width = `${progressPercent}%`;
  progressFill.closest('.progress-bar').setAttribute('aria-valuenow', progressPercent);
}

// Eventos de navegação
prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
prevBtnTop.addEventListener('click', () => goToSlide(currentIndex - 1));
nextBtnTop.addEventListener('click', () => goToSlide(currentIndex + 1));

// Swipe touch
let touchStartX = 0;
let touchEndX = 0;

wrapper.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

wrapper.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  if (touchEndX < touchStartX - 50) goToSlide(currentIndex + 1);
  if (touchEndX > touchStartX + 50) goToSlide(currentIndex - 1);
});

// Clique em slides adjacentes
document.addEventListener('click', (e) => {
  const clickedSlide = e.target.closest('.slide');
  if (clickedSlide && !clickedSlide.classList.contains('active')) {
    const slides = Array.from(document.querySelectorAll('.slide'));
    const clickedIndex = slides.indexOf(clickedSlide);
    if (clickedIndex !== -1) goToSlide(clickedIndex);
  }
});

// Inicializar
updateCarousel();
