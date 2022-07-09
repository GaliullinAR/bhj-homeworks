const sliderItem = document.querySelectorAll(".slider__item");
const sliderDots = document.querySelectorAll(".slider__dot");

const prev = document.querySelector(".slider__arrow_prev");
const next = document.querySelector(".slider__arrow_next");

function slider() {
  let index = 0;
  let array = Array.from(sliderItem);
  let dots = Array.from(sliderDots);

  function loadItem(arr) {
    let position = arr.findIndex((item) => item.classList.contains('slider__item_active'));
    console.log(position);
    arr[position].classList.remove('slider__item_active');
    dots[position].classList.remove('slider__dot_active');
    arr[index].classList.add("slider__item_active");
    dots[index].classList.add("slider__dot_active");
  }

  function resetIndex() {
    if (index === array.length) {
      index = 0;
    }
    if (index < 0) {
      index = array.length - 1;
    }
    loadItem(array);
  }

  next.onclick = function () {
    index++;
    resetIndex();
    loadItem(array);
  };

  prev.onclick = function () {
    index--;
    resetIndex();
    loadItem(array);
  };

  dots.forEach((item, idx) => {
    item.onclick = function () {
      index = idx;
      loadItem(array);
    };
  });

  loadItem(array);
}

slider();