// const menuLink = document.querySelectorAll('.links');
// const menuSub = document.querySelectorAll('.menu_sub');

// menuLink.forEach((link) => {
//   link.onclick = function () {
//     const list = link.nextElementSibling;
//     list.classList.toggle('menu_active');
//   }
// });


const links = document.querySelectorAll('.links');


links.forEach((link) => {
  link.onclick = function () {
    const subMenu = link.nextElementSibling;
    const menuSubAll = document.querySelectorAll('.menu_sub');
    
    if (subMenu.classList.contains('menu_active')) {
      subMenu.classList.remove('menu_active');
      return false;
    }
    menuSubAll.forEach((item) => {
      item.classList.remove("menu_active");
    });
    
    subMenu.classList.add("menu_active");
  }
})

