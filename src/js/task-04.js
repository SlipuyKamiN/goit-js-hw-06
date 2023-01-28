const decrementBtnRef = document.querySelector("[data-action=decrement]");
const counterValue = document.querySelector("#value");
const incrementBtnRef = document.querySelector("[data-action=increment]");

let value = Number(counterValue.textContent);

decrementBtnRef.addEventListener("click", () => {
  value -= 1;

  counterValue.textContent = value;
});

incrementBtnRef.addEventListener("click", () => {
  value += 1;

  counterValue.textContent = value;
});

console.log(decrementBtnRef);
