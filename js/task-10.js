function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector("input"),
  buttonCreate: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

const createBoxes = () => {
  let boxSize = 30;
  const newBoxes = [];

  for (let i = 0; i < refs.input.value; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxSize += 10;

    newBoxes.push(box);
  }
  return refs.boxes.append(...newBoxes);
};

const resetBoxes = () => (refs.boxes.innerHTML = "");

refs.buttonCreate.addEventListener("click", createBoxes);

refs.buttonDestroy.addEventListener("click", resetBoxes);
