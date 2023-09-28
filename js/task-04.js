let counterValue = 0;
const valueBtn = document.getElementById("value");

const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');

const decrementOnClick = (event) => {
  counterValue -= 1;
  valueBtn.textContent = counterValue;
};

const incrementOnClick = (event) => {
  counterValue -= 1;
  valueBtn.textContent = counterValue;
};

btnDecrement.addEventListener("click", decrementOnClick);
btnIncrement.addEventListener("click", incrementOnClick);
