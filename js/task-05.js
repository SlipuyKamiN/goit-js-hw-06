const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

const onInputInput = (event) => {
  refs.output.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    refs.output.textContent = "Anonymous";
  }
};

refs.input.addEventListener("input", onInputInput);
