const refs = {
  input: document.querySelector("#validation-input"),
};

const inputLength = Number(refs.input.dataset.length);
// refs.input.classList.add("invalid", "valid");
// console.log(refs.input);
refs.input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === inputLength) {
    refs.input.classList.add("valid");
    refs.input.classList.remove("invalid");
  } else {
    refs.input.classList.remove("valid");
    refs.input.classList.add("invalid");
  }
}
