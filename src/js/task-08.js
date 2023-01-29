const refs = {
  form: document.querySelector(".login-form"),
  inputEmail: document.querySelector("[name=email]"),
  inputPassword: document.querySelector("[name=password]"),
  button: document.querySelector(".login-form > button"),
};

const onFormSubmitting = (event) => {
  event.preventDefault();
  const dataArray = {};
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені!");
  }

  dataArray[email.getAttribute("name")] = email.value;
  dataArray[password.getAttribute("name")] = password.value;

  console.log(dataArray);
  event.currentTarget.reset();
};

refs.form.addEventListener("submit", onFormSubmitting);
