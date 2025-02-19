import './js/header';
import './js/modal';
import './js/tours';
import './js/gallery';
import './js/reviews';

function createSlider(wrapper) {
  const slider = wrapper.querySelector('.slider');
  const slides = slider.children;
  const prevBtn = wrapper.querySelector('.prev');
  const nextBtn = wrapper.querySelector('.next');
  let currentIndex = 0;

  // Функція для переміщення слайдів
  function moveSlides(direction) {
    if (direction === 'next') {
      currentIndex = (currentIndex + 1) % slides.length;
    } else {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    }
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Додаємо обробники подій для кнопок
  prevBtn.addEventListener('click', () => moveSlides('prev'));
  nextBtn.addEventListener('click', () => moveSlides('next'));
}

// Ініціалізуємо всі слайдери
document.querySelectorAll('.slider-wrapper').forEach(createSlider);
