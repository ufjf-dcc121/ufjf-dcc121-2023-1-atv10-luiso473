import { adicionar, getItems }  from "./store.js";
const form = document.forms.entrada;
form.addEventListener('submit', envia);    


atualiza();

function envia(evento) {
    evento.preventDefault();
    console.log('Formulário enviado!');
    const n = form.valor.value;
    adicionar(n);
    form.valor.value = "";
    form.valor.focus();
    atualiza();
}

function atualiza(){
    const ol = document.querySelector('ol');
    ol.innerHTML = '';
    const items = getItems();
    for(let i =0; i < items.length; i++){
        const li = document.createElement('li');
        li.textContent = items[i];
        ol.appendChild(li);
    }
}