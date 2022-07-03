const menuLink = document.querySelectorAll('.links');
const menuSub = document.querySelectorAll('.menu_sub');

menuLink.forEach((link) => {
  link.onclick = function () {
    const list = link.nextElementSibling;
    if (list.classList.contains('menu_active')) {
      list.classList.remove('menu_active');
    } else {
      list.classList.add('menu_active');
    }
  }
});


// Дополнительное задание
// const menuLink = document.querySelectorAll('.links');
// const menuSub = document.querySelectorAll('.menu_sub');
// menuLink.forEach((link) => {
//   link.onclick = function () {
//     const list = link.nextElementSibling;
//     menuSub.forEach(item => item.classList.remove('menu_active'));
//     if (list.classList.contains('menu_active')) {
//       list.classList.remove('menu_active');
//     } else {
//       list.classList.add('menu_active');
//     }
//   }
// });