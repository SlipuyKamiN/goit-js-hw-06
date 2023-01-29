function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyEl: document.querySelector("body"),
  button: document.querySelector(".change-color"),
  colorDescription: document.querySelector(".color"),
};

const onBodyBackgroungColorChanging = (event) => {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  refs.colorDescription.textContent = getRandomHexColor();
};

refs.button.addEventListener("click", onBodyBackgroungColorChanging);
