const tabs = document.querySelectorAll('.tab');
const tabsContent = document.querySelectorAll('.tab__content');

let tabArr = Array.from(tabs);
let tabArrContent = Array.from(tabsContent);

tabArr.forEach((item, index) => {
  item.addEventListener("click", function tabActive() {
    let lastPosition = tabArr.findIndex((index) => index.classList.contains("tab_active"));
    tabArr[lastPosition].classList.remove('tab_active');
    tabArrContent[lastPosition].classList.remove('tab__content_active');
    tabArr[index].classList.add('tab_active');
    tabArrContent[index].classList.add('tab__content_active');
  });
});

