let counterValue = 0;

const refs = {
  decrementButton: document.querySelector('[data-action="decrement"]'),
  incrementButton: document.querySelector('[data-action="increment"]'),
  counter: document.querySelector("#value"),
};

refs.decrementButton.addEventListener("click", subtraction);
refs.incrementButton.addEventListener("click", additional);

function additional() {
  counterValue += 1;
  refs.counter.innerHTML = counterValue;
}

function subtraction() {
  counterValue -= 1;
  refs.counter.innerHTML = counterValue;
}
