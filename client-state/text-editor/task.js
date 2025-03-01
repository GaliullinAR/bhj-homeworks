const button = document.createElement('button');
const textArea = document.getElementById('editor');
const storage = localStorage.getItem('value');

// if (storage) {
//   textArea.value = storage;
// }

textArea.value = storage;

button.textContent = 'Очистить';
button.style.borderRadius = '8px';
button.style.background = '#0000ff'

textArea.addEventListener('change', function (e) {
  
  const storedValue = e.target.value;
  localStorage.setItem('value', storedValue);
})

document.querySelector('.card').appendChild(button);

button.addEventListener('click', function (e) {
  textArea.value = '';
  localStorage.removeItem('value');
})
