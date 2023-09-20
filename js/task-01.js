const numberOfCategories =
  document.getElementById("categories").children.length;
console.log(`Number of categories: ${numberOfCategories}`);

const categoriArr = document.querySelectorAll(".item");
categoriArr.forEach((element) => {
  console.log("Category:", element.firstElementChild.textContent);
  console.log("Elements:", element.lastElementChild.children.length);
});
