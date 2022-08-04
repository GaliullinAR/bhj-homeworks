const button = document.querySelector('#signin__btn');
const welcome = document.querySelector('.welcome');
const singIn = document.querySelector('.signin');
const userID = document.getElementById('user_id');
const xhr = new XMLHttpRequest();

const logout = document.querySelector('.logout');

const storage = JSON.parse(localStorage.getItem('response'));

if (storage !== null) {
  welcome.classList.add("welcome_active");
  singIn.classList.remove("signin_active");
  userID.innerText = storage.user_id;
}

button.addEventListener('click', function (e) {
  e.preventDefault();
  const formData = new FormData(document.getElementById('signin__form'));

  xhr.addEventListener('readystatechange', function (e) {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);

      if (response.success) {
        welcome.classList.add("welcome_active");
        singIn.classList.remove("signin_active");

        userID.innerText = response.user_id;
        
        localStorage.setItem('response', JSON.stringify(response));
      } else {
        welcome.classList.add("welcome_active");
        singIn.classList.remove("signin_active");

        welcome.innerText = `Неверный логин/пароль`;
      }
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

  localStorage.clear();
})
