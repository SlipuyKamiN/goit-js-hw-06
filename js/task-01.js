const listRef = document.querySelector("#categories");
const categoriesRef = listRef.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesRef.length}`);

const getCategories = function () {
  for (let i = 0; i < categoriesRef.length; i += 1) {
    const categoryRef = listRef.children[i];

    const categoryNameRef = categoryRef.querySelector("h2");

    console.log(`Category: ${categoryNameRef.textContent}`);

    const elementsRef = categoryRef.querySelectorAll("ul li");
    console.log(`Elements: ${elementsRef.length}`);
  }
};

getCategories();
