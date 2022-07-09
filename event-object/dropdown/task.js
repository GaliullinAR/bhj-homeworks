const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');

function active(e) {
  e.target.nextElementSibling.classList.add('dropdown__list_active');
  const links = document.querySelectorAll('.dropdown__link');
  links.forEach((item) => {
    item.onclick = function () {
      e.target.textContent = item.textContent;
      e.target.nextElementSibling.classList.remove('dropdown__list_active');
      return false;
    }
  })
  
}

dropdownValue.addEventListener('click', active);