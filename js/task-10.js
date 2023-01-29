function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector("input"),
  buttonCreate: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

const createBoxes = (amount) => {
  let boxSize = 30;
  const newBoxes = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxSize += 10;

    newBoxes.push(box);
  }
  return refs.boxes.append(...newBoxes);
};

//Коли я пишу так :
// refs.buttonCreate.addEventListener("click", createBoxes(refs.input.value));
// В мене чомусь скрипт не працює, він не може взяти значення інпута в такому випадку,
//  через змінну теж пробував, не виходить.

refs.buttonCreate.addEventListener("click", () => {
  createBoxes(refs.input.value);
});

refs.buttonDestroy.addEventListener("click", () => {
  refs.boxes.innerHTML = "";
});
