const fonts = Array.from(document.querySelectorAll('.font-size'));
const bookControlFontColor = Array.from(document.querySelector('.book__control_color').children);
const bookControlBg = Array.from(document.querySelector(".book__control_background").children);
const bookContent = document.querySelector('.book__content');

function resetFs(book) {
  if (book.classList.contains('book_fs-big')) {
    book.classList.remove("book_fs-big");
  }

  if (book.classList.contains('book_fs-small')) {
    book.classList.remove("book_fs-small");  
  }
}

function resetColor(book) {
  if (book.classList.contains("book_color-gray")) {
    book.classList.remove("book_color-gray");
  }

  if (book.classList.contains("book_color-whitesmoke")) {
    book.classList.remove("book_color-whitesmoke");
  }

  if (book.classList.contains("book_color-black")) {
    book.classList.remove("book_color-black");
  }
}

function resetBg(book) {
  if (book.classList.contains("book_bg-gray")) {
    book.classList.remove("book_bg-gray");
  }

  if (book.classList.contains("book_bg-black")) {
    book.classList.remove("book_bg-black");
  }

  if (book.classList.contains("book_bg-white")) {
    book.classList.remove("book_bg-white");
  }
}

fonts.forEach((el) => {

  el.addEventListener("click", function changeFontSize(e) {
    e.preventDefault();

    let dataSize = e.target.dataset.size;
    let currentFontActive = fonts.findIndex((item) => {
      return item.classList.contains("font-size_active");
    });

    fonts[currentFontActive].classList.remove("font-size_active");
    e.target.classList.add("font-size_active");

    resetFs(bookContent);
    
    if (dataSize === 'small') {
      bookContent.classList.add('book_fs-small');
    } 

    if (dataSize === "big") {
      bookContent.classList.add("book_fs-big");
    } 

  });
})



bookControlFontColor.forEach((el) => {
  el.addEventListener('click', function changeBgColor(e) {
    e.preventDefault();

    let dataColor = e.target.getAttribute('data-text-color');
    console.log(dataColor)
    let currentFontActive = bookControlFontColor.findIndex((item) => {
      return item.classList.contains("color_active");
    });

    bookControlFontColor[currentFontActive].classList.remove('color_active');
    e.target.classList.add('color_active');

    resetColor(bookContent);

    if (dataColor === "gray") {
      bookContent.classList.add("book_color-gray");
    }

    if (dataColor === "black") {
      bookContent.classList.add("book_color-black");
    }

    if (dataColor === 'whitesmoke') {
      bookContent.classList.add("book_color-whitesmoke");
    }

  });
});

bookControlBg.forEach((el) => {
  el.addEventListener("click", function changeBgColor(e) {
    e.preventDefault();

    let dataBg = e.target.getAttribute("data-bg-color");
    let currentFontActive = bookControlBg.findIndex((item) => {
      return item.classList.contains("color_active");
    });

    bookControlBg[currentFontActive].classList.remove("color_active");
    e.target.classList.add("color_active");

    resetBg(bookContent);

    if (dataBg === "gray") {
      bookContent.classList.add("book_bg-gray");
    }

    if (dataBg === "black") {
      bookContent.classList.add("book_bg-black");
    }

    if (dataBg === "white") {
      bookContent.classList.add("book_bg-white");
    }
  });
});
