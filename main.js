const form = document.forms.entrada;
form.addEventListener('submit', envia);    

let estado = 0;

function envia(evento) {
    evento.preventDefault();
    console.log('Formulário enviado!');
    estado++;
    atualiza();
}

function atualiza(){
    const ol = document.querySelector('ol');
    ol.innerHTML = `<li>${estado}<\li>`;
}