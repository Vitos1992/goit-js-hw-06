const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const typeInput = (event) => {
  nameOutput.textContent =
    nameInput.value !== "" ? event.currentTarget.value : "Anonymous";
};

nameInput.addEventListener("input", typeInput);
