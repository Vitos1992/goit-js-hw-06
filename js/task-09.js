const widgetColor = document.querySelector(".widget");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const titleColor = document.querySelector(".color");
const btnColor = document.querySelector(".change-color");
const body = document.body;

const changeColor = () => {
  titleColor.textContent = body.style.background = getRandomHexColor();
};

btnColor.addEventListener("click", changeColor);
