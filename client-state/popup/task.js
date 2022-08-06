const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
let extrance = Boolean(getCookie('extrance'));

if (!modal.classList.contains('modal_active') && !extrance) {
  modal.classList.add('modal_active');
}

function setCookie(name, value) {
  document.cookie = name + '=' + encodeURIComponent(value);
}

function getCookie(name) {
 
    const pairs = document.cookie.split("; ");
    const cookie = pairs.find((item) => item.startsWith(name + "="));
    return cookie ? cookie.substring(name.length + 1) : false;

}

modalClose.addEventListener('click', function (e) {
  e.preventDefault();
  modal.classList.remove('modal_active');
  setCookie('extrance', 'true');
})