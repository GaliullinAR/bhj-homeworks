
const modalMain = document.getElementById('modal_main');
const modalClose = document.querySelectorAll('.modal__close');
const showSuccess = document.querySelector('.show-success');
const modalSuccess = document.getElementById('modal_success');


modalMain.classList.add('modal_active');

modalClose.forEach((element) => {
  element.onclick = function () {
    if (modalMain.classList.contains('modal_active')) {
      modalMain.classList.remove('modal_active');
    }
    if (modalSuccess.classList.contains('modal_active')) {
      modalSuccess.classList.remove('modal_active');
    }
  }
})

showSuccess.onclick = function () {
  modalSuccess.classList.add('modal_active');
}