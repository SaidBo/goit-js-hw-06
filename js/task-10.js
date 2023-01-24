function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector("#controls input"),
  buttonCreate: document.querySelector("button[data-create]"),
  buttonDestroy: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement("div");
    newBox.style.width = 30 + (10 * i)"px";
    newBox.style.height = 30 + (10 * i)"px";
    newBox.style.backgroundColor = getRandomHexColor();

    refs.boxes.appendChild(newBox);
  }
}
