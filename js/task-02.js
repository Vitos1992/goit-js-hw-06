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

// const potatoesLi = document.createElement("li");
// potatoesLi.textContent = "Potatoes";
// console.log(potatoesLi);
// const mushroomsLi = document.createElement("li");
// mushroomsLi.textContent = "Mushrooms";
// console.log(mushroomsLi);
// const garlicLi = document.createElement("li");
// garlicLi.textContent = "Garlic";
// console.log(garlicLi);
// const tomatosLi = document.createElement("li");
// tomatosLi.textContent = "Tomatos";
// console.log(tomatosLi);
// const herbsLi = document.createElement("li");
// herbsLi.textContent = "Herbs";
// console.log(herbsLi);
// const condimentsLi = document.createElement("li");
// condimentsLi.textContent = "Condiments";
// console.log(condimentsLi);
// // li.append("#ingredients");
// // console.log(li);

// //potatoesLi.append(li);
// container.append(li);

//container.insertAdjacentHTML("beforebegin", li);
