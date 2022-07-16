const rotatorCases = Array.from(document.querySelectorAll('.rotator__case'));
const rotatorCasesLength = rotatorCases.length;

function newIndexRotator(currentRotator) {
  if (currentRotator === rotatorCasesLength - 1) {
    return 0;
  } else {
    return currentRotator + 1;
  }
}

function toggleClassRotator(rotator) {
  rotator.classList.toggle('rotator__case_active');
}

function rotatorIntervalChange(ms) {
  let rotatorInterval = setInterval(function () {

    let currentRotator = rotatorCases.findIndex((item) => {
      return item.classList.contains('rotator__case_active');
    })

    let newRotator = newIndexRotator(currentRotator);

    toggleClassRotator(rotatorCases[currentRotator]);
    toggleClassRotator(rotatorCases[newRotator]);

    rotatorCases[newRotator].style.color = rotatorCases[newRotator].dataset.color;

    clearInterval(rotatorInterval);
    rotatorIntervalChange(rotatorCases[newRotator].dataset.speed);
  }, ms)
}

rotatorIntervalChange();