const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log("Заповніть, будь ласка, всі поля");
  }

  console.log(`Email: ${email.value}, password: ${password.value}`);

  event.currentTarget.reset();

  //   const formData = new FormData(event.currentTarget);
  //   formData.forEach((value, name) => {
  //     console.log(name, value);
  //   })
}
