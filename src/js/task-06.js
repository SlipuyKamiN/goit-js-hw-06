const inputEl = document.querySelector("#validation-input");
const inputValidLength = inputEl.getAttribute("data-length");

const onInputLengthValidation = (event) => {
  const target = event.currentTarget;
  target.classList.add("invalid");
  const isValid = target.value.length == Number(inputValidLength);

  if (isValid) {
    target.classList.replace("invalid", "valid");
  }
};

inputEl.addEventListener("blur", onInputLengthValidation);
