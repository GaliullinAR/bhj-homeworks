const quantityButtonInc = document.querySelectorAll(".product__quantity-control_inc");
const quantityButtonDec = document.querySelectorAll('.product__quantity-control_dec');

const cartProduct = document.querySelector('.cart__products');
const productAdd = document.querySelectorAll('.product__add');

const cart = cartProduct.closest('.cart');
const removeButton = document.querySelector('.basket__button');

cart.style.display = 'none';

quantityButtonDec.forEach((item) => {
  item.addEventListener("click", function (e) {

    let quantityValue = e.target.nextElementSibling;
    let value = Number(quantityValue.textContent);

    value--;
    if (value <= 1) value = 1;

    quantityValue.innerText = value;
  });
});
  
quantityButtonInc.forEach((item) => {
  item.addEventListener("click", function (e) {

    let quantityValue = e.target.previousElementSibling;
    let value = Number(quantityValue.textContent);

    quantityValue.innerText = ++value;
  });
});



productAdd.forEach((item) => {
  item.addEventListener('click', function (e) {
    
    cart.style.display = "block";

    let product = e.target.closest('.product');
    let count = Number(product.querySelector('.product__quantity-value').textContent);  
    let cartProductCount = document.createElement('div');
    let array = Array.from(cartProduct.children);
    let index = array.findIndex((el) => {
      return el.dataset.id === product.dataset.id;
    });


    cartProductCount.classList.add('cart__product-count');
    cartProductCount.innerText = count;

    let productClone = product.cloneNode(true);
    productClone.className = 'cart__product';

    productClone.firstElementChild.remove();
    productClone.replaceChild(cartProductCount, productClone.lastElementChild);
    cartProduct.insertAdjacentElement('beforeEnd', productClone);

    
    if (index !== -1) {
      let lastCount = Number(cartProduct.children[index].lastElementChild.textContent)
      cartProductCount.innerText = count + lastCount;
      cartProduct.replaceChild(productClone, cartProduct.children[index]);
    }
     
    
    
  });
});


removeButton.addEventListener('click', function () {
  cart.style.display = "none";

  if (cartProduct.children.length > 0) {
    let array = Array.from(cartProduct.children);
    array.forEach((item) => {
      item.remove();
    })
  }
})

