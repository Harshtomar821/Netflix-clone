
const slider = document.getElementById('slider');

function scrollLeft() {
  slider.scrollBy({
    left: -250,
    behavior: 'smooth'
  });
}

function scrollRight() {
  slider.scrollBy({
    left: 250,
    behavior: 'smooth'
  });
}
