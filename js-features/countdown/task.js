const timer = document.getElementById('timer');
function timerDown() {
  if (timer.textContent > 0) {
    timer.textContent -= 1;
  } else {
    clearInterval(timeout);
    alert('Вы победили в конкурсе');
  }
  
}
 
let timeout = setInterval(timerDown, 1000);

