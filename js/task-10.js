function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const idControls = document.getElementById("controls");
const inputType = document.querySelector('[type="number"]');
const btnCreate = document.querySelector("button[data-create]");
const btnDestory = document.querySelector("button[data-destroy]");
const idBoxes = document.getElementById("boxes");

idBoxes.style.display = "flex";
idBoxes.style.flexWrap = "wrap";

inputType.addEventListener("input", toogleValue);
btnCreate.addEventListener("click", () => {
  createBoxes(Number(inputType.value));
});
btnDestory.addEventListener("click", destroyBoxes);

let inputValue = 0;
function toogleValue(event) {
  inputValue = event.currentTarget.value;
  console.log(inputValue);
}

function createBoxes(amount) {
  let size = 30;
  const boxesArr = [];
  for (let i = 0; i < amount; i += 1) {
    size += 10 * i;
    const div = `<div class="item" style="display: block; margin-right: 30px; margin-bottom: 30px; background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
    boxesArr.push(div);
  }
  idBoxes.insertAdjacentHTML("beforeend", boxesArr.join(""));
}

function destroyBoxes() {
  inputType.value = "";
  return (idBoxes.innerHTML = "");
}
