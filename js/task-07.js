const refs = {
  input: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};


refs.input.addEventListener("input", value);
refs.text.style.fontSize = "56px";

function value(event) {
  refs.text.style.fontSize = `${event.target.value}px`;
}
