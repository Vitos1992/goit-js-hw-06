
const arrImput = document.querySelector('#validation-input');
arrImput.addEventListener('blur', arrNewInput);

function arrNewInput(event) { 
    const newList = Number(arrImput.dataset.length);
    const listValue = Number(arrImput.value.trim().length);

    if (listValue === newList) {
        arrImput.classList.add('valid');
        arrImput.classList.remove('invalid');
    } else { 
        arrImput.classList.remove('valid');
        arrImput.classList.add('invalid');
    }

}


