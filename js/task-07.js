const inputControl = document.querySelector('#font-size-control');
const spanText = document.getElementById('text');

function spanTitle(event) { 
    spanText.style.fontSize = event.currentTarget.value + 'px';

}

inputControl.addEventListener('input', spanTitle);

