
const interests = document.querySelector('.interests_main');

interests.addEventListener('change', function (e) {
  const listItem = e.target.closest('.interest');
  const ulItem = listItem.querySelectorAll('.interests');
  const checkBox = listItem.querySelector('.interest__check');
  
  ulItem.forEach(item => {
    const checkBoxChild = item.querySelectorAll('.interest__check');
    checkBoxChild.forEach(el => {
      if (checkBox.checked) {
        el.checked = true;
      } else {
        el.checked = false;
      }
    })
  })
})