const hole = document.querySelectorAll('.hole');
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

let deadCount = 0;
let lostCount = 0;

for (let i = 0; i < hole.length; i++) {
  hole[i].onclick = function () {
    if (hole[i].classList.contains('hole_has-mole')) {
      deadCount++
      dead.textContent = deadCount;
    } else {
      lostCount++;
      lost.textContent = lostCount;
    }

    if (deadCount === 10 && lostCount < 5) {
      alert('Вы выиграли');
      countReset();
    }
    if (lostCount === 5 && deadCount < 10) {
      alert('Вы проиграли');
      countReset();
    }
  }

}

function countReset() {
  dead.textContent = 0;
  lost.textContent = 0;
  deadCount = 0;
  lostCount = 0;
}

const holeGame = document.querySelector('.hole.hole_has-mole');

