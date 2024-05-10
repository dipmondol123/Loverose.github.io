const slideshow = document.querySelector('.slideshow');
const cards = slideshow.querySelectorAll('.card');
let currentCard = 0;

function changeSlide() {
  cards[currentCard].classList.remove('active');
  const backgroundImage = cards[currentCard].querySelector('img').src;
  document.body.style.backgroundImage = `url(${backgroundImage})`;
  document.body.style.backgroundSize = 'contain';
  currentCard = (currentCard + 1) % cards.length;
  cards[currentCard].classList.add('active');
}

// Add a pause/resume functionality
let slideshowInterval;
function startSlideshow() {
  slideshowInterval = setInterval(changeSlide, 3000);
}

function pauseSlideshow() {
  clearInterval(slideshowInterval);
}

// Add keyboard navigation
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    pauseSlideshow();
    changeSlide();
    startSlideshow();
  } else if (event.key === 'ArrowLeft') {
    pauseSlideshow();
    currentCard = (currentCard - 2 + cards.length) % cards.length;
    changeSlide();
    startSlideshow();
  }
});

// Initialize the slideshow
changeSlide();
startSlideshow();