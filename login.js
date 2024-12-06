const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

document.querySelector('form').addEventListener('submit', function(event) {
    // Seleciona os campos do formulário

    var nome = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;

    // Verifica se os campos estão vazios
    if (nome === '' || senha === '') {
        alert('Por favor, preencha todos os campos.'); // Exibe uma mensagem de erro
        event.preventDefault(); // Cancela o envio do formulário
    } else {
        FormData.reset();
    }    
});

document.querySelector('form').addEventListener('submit', function(event) {
    // Seleciona os campos do formulário

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;


    // Verifica se os campos estão vazios
    if (nome === '' || email === '' || senha === '') {
        alert('Por favor, preencha todos os campos.'); // Exibe uma mensagem de erro
        event.preventDefault(); // Cancela o envio do formulário
    } else {
        FormData.reset();
    }    
});