const hasTooltip = document.querySelectorAll('.has-tooltip');

hasTooltip.forEach((item, index) => {

  item.addEventListener('click', function (e) {
    e.preventDefault();

    let { top, right, bottom, left, height } = e.target.getBoundingClientRect()
    let tooltip = document.createElement('div');
    let idx;

    console.log(e.target.getBoundingClientRect());

    tooltip.classList.add('tooltip', 'tooltip_active');
    tooltip.innerText = `${e.target.getAttribute('title')}`;
    tooltip.style.top = bottom + 'px';
    tooltip.style.left = left + "px";

    e.target.insertAdjacentElement('afterend', tooltip);
  
  })
})