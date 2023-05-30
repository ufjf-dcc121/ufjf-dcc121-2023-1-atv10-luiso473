const store = {estado: [0,1,2,3]};
export default store;

export function adicionar(valor){
    store.estado.push(valor);
}
export function getItems(){
    return [...store.estado];
}