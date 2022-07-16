const reveal = document.querySelector('.reveal');

window.addEventListener('scroll', function (e) {
  const position = reveal.getBoundingClientRect();
  if (position.bottom <= window.innerHeight && position.top > 0) {
    reveal.classList.add("reveal_active");
  } else {
    reveal.classList.remove("reveal_active");
  }
})