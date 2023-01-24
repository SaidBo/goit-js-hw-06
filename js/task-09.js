function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.body;
const buttonEl = document.querySelector(".change-color");
const spanText = document.querySelector(".color");

const color = getRandomHexColor();

buttonEl.addEventListener("click", changeColor);

function changeColor() {
  const color = getRandomHexColor();

  bodyEl.style.backgroundColor = color;
  spanText.textContent = color;
}
