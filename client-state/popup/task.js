const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
let extrance = Boolean(getCookie('extrance'));

if (!modal.classList.contains('modal_active') && !extrance) {
  modal.classList.add('modal_active');
}

function setCookie(name, value) {
  document.cookie = name + '=' + value;
}

function getCookie(name) {
  try {

    const pairs = document.cookie.split("; ");
    const cookie = pairs.find((item) => item.startsWith(name + "="));
    return cookie.substring(name.length + 1);

  } catch (error) {

    return false;

  }  
}

modalClose.addEventListener('click', function (e) {
  e.preventDefault();
  modal.classList.remove('modal_active');
  setCookie('extrance', 'true');
})