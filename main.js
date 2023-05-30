import { estado } from "./store";
const form = document.forms.entrada;
form.addEventListener('submit', envia);    

atualiza();

function envia(evento) {
    evento.preventDefault();
    console.log('Formulário enviado!');
    estado++;
    atualiza();
}

function atualiza(){
    const ol = document.querySelector('ol');
    ol.innerHTML = `<li>${estado}</li>`;
}