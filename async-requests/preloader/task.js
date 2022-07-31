const xhr = new XMLHttpRequest();

xhr.open("GET", "https://netology-slow-rest.herokuapp.com");


xhr.addEventListener('readystatechange', function () {
  if (xhr.readyState === 4) {
    document.getElementById('loader').classList.remove('loader_active');

    const itemBox = document.getElementById('items');

    let requests = JSON.parse(xhr.response);
    let req = requests.response.Valute;

    for (let reqItem in req) {
      const item = document.createElement('div');
      item.classList.add('item');
      
      item.innerHTML = `
        <div class="item__code">
          ${req[reqItem].CharCode}
        </div>
        <div class="item__value">
          ${req[reqItem].Value}
        </div>
        <div class="item__currency">
          руб.
        </div>
      `;
      
      itemBox.appendChild(item);
    };
  }
})

xhr.send();