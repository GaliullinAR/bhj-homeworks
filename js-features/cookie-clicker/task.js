const clicker = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
let count = 0;

cookie.onclick = start;

function start() {
  count++;
  clicker.textContent = count;
  cookie.width = 250;
  setTimeout(() => {
    cookie.width = 200;
  }, 50);
}