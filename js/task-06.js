const refs = {
  input: document.querySelector("#validation-input"),
};

const inputLength = Number(refs.input.dataset.length);

refs.input.addEventListener("blur", onInputBlur);
refs.input.classList.add("invalid");

function onInputBlur(event) {
  if (event.currentTarget.value.trim().length === inputLength) {
    refs.input.classList.replace("invalid", "valid");
  } else {
    refs.input.classList.replace("valid", "invalid");
  }
}
