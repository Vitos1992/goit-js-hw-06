const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const container = document.querySelector("#ingredients");

const classIng = ingredients.map((ingredient) => {
  const titleItem = document.createElement("li");
  titleItem.textContent = ingredient;
  titleItem.classList.add("item");
  return titleItem;
});

container.append(...classIng);


