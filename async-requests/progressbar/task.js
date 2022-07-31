const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
  e.preventDefault()
  let input = form.elements.file;
  let file = input.files[0];
  let xhr = new XMLHttpRequest();

  xhr.upload.onprogress = function (event) {
    progress.value = event.loaded / event.total;
    console.log(event);
  };

  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
  xhr.send(file);
})


