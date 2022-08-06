const button = document.querySelector('#signin__btn');
const welcome = document.querySelector('.welcome');
const singIn = document.querySelector('.signin');
const userID = document.getElementById('user_id');
const xhr = new XMLHttpRequest();
xhr.responseType = "json";

const logout = document.querySelector('.logout');

const storage = JSON.parse(localStorage.getItem('response'));

if (storage !== null) {
  getGreeting(storage.user_id);
}

button.addEventListener('click', function (e) {
  e.preventDefault();
  const formData = new FormData(document.getElementById('signin__form'));

  xhr.addEventListener('load', function () {
    
    const response = xhr.response;

    if (response.success) {
      getGreeting(response.user_id)
      
      localStorage.setItem('response', JSON.stringify(response));
    } else {
      document.getElementById("signin__form").reset();
      alert('Неверный логин/пароль');
    }
    
  })
  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
  xhr.send(formData);
})


logout.addEventListener('click', function (e) {
  e.preventDefault();
  e.target.classList.remove('logout_active');

  welcome.classList.remove("welcome_active");
  singIn.classList.add("signin_active");

  localStorage.removeItem('response');
})

function getGreeting(user) {
  welcome.classList.add("welcome_active");
  singIn.classList.remove("signin_active");

  userID.innerText = user;
}