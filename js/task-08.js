const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const object = {};

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert`Заповніть, будь ласка, всі поля`;
  }

  object.email = email.value;
  object.password = password.value;

  console.log(object);

  event.currentTarget.reset();
}
