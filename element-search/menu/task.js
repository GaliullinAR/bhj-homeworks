// ДО

// const links = document.querySelectorAll('.links');


// links.forEach((link) => {
//   link.onclick = function () {
//     const subMenu = link.nextElementSibling;
//     const menuSubAll = document.querySelectorAll('.menu_sub');
    
//     if (subMenu.classList.contains('menu_active')) {
//       subMenu.classList.remove('menu_active');
//       return false;
//     }
//     menuSubAll.forEach((item) => {
//       item.classList.remove("menu_active");
//     });
    
//     subMenu.classList.add("menu_active");
//   }
// })


// ПОСЛЕ

const menuSub = document.querySelectorAll('.menu_sub');

menuSub.forEach((item) => {
  const menuLink = item.previousElementSibling;
  menuLink.onclick = function () {
    if (item.classList.contains('menu_active')) {
      item.classList.remove('menu_active');
      return false;
    }
    menuSub.forEach(itemRem => itemRem.classList.remove('menu_active'));
    item.classList.add('menu_active');
  }
})