function validation() {
    const name = document.querySelector('#name').value.length;
    const email = document.querySelector('#email').value.length;
    const text = document.querySelector('#why').value.length;

    if ((name < 10 || name > 40) || (email < 10 || email > 50) || (text > 500)) {
        return false;
    } else {
        return true;
    }
}

function prevent(event) {
    event.preventDefault();
    const validating = validation();
    if (validating === false) {
        alert('Dados inválidos');
      } else {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
      }
}

function clean() {
    const inputs = document.querySelectorAll('input');
    const textarea = document.querySelector('textarea');
    for(i = 0; i < inputs.length; i += 1) {
        inputs[i].value = '';
        inputs[i].checked = false;
    }
    
    textarea.value = '';
    textarea.checked = false;
}

function agreement() {
    const submit = document.querySelector('#submit');
    const checked = document.querySelector('#checkboxtwo');

    submit.disabled = !checked.checked;
}

window.onload = function() {
    const submit = document.querySelector('#submit');
    const reset = document.querySelector('#reset');
    submit.addEventListener('click', prevent);
    submit.addEventListener('click', agreement);
    reset.addEventListener('click', clean);
}