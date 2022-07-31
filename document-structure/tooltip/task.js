const hasTooltip = document.querySelectorAll('.has-tooltip');
const tooltip = document.createElement('div');

tooltip.classList.add('tooltip');
document.body.appendChild(tooltip);

hasTooltip.forEach((item) => {

  item.addEventListener('click', function (e) {
    e.preventDefault();
    const tooltipActive = document.getElementsByClassName('tooltip_active')[0];

    if (tooltipActive !== undefined) {
      tooltipActive.classList.remove('tooltip_active');
      if (tooltipActive.textContent === this.title) {
        return false;
      }
    }

    let { bottom, left } = e.target.getBoundingClientRect();

    tooltip.style.top = bottom + "px";
    tooltip.style.left = left + "px";
    
    tooltip.innerText = `${e.target.getAttribute('title')}`;
    tooltip.classList.toggle("tooltip_active");
  });
});