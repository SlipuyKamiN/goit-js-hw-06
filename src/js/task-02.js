const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector("#ingredients");

let createList = function (array) {
  const items = [];
  array.map((element) => {
    const elementRef = document.createElement("li");
    elementRef.textContent = element;
    elementRef.classList.add("item");
    items.push(elementRef);

    // return items;
  });
  listRef.append(...items);
};

createList(ingredients);

console.log(listRef);
