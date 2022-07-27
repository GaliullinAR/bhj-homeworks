const hasTooltip = document.querySelectorAll('.has-tooltip');
const tooltip = document.createElement('div');

tooltip.classList.add('tooltip');
document.body.appendChild(tooltip);

hasTooltip.forEach((item) => {

  item.addEventListener('click', function (e) {
    e.preventDefault();

    let { top, right, bottom, left, height } = e.target.getBoundingClientRect();

    tooltip.classList.toggle('tooltip_active');
    tooltip.innerText = `${e.target.getAttribute('title')}`;
    tooltip.style.top = bottom + 'px';
    tooltip.style.left = left + "px";
  });
});