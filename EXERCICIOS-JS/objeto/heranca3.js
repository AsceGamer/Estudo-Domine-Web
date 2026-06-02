const pai = { nome: 'Pedro', corCabelo: 'preto' };

const filha1 = Object.create(pai); // filha1 herda de pai
filha1.nome = 'Ana'; // filha1 tem seu próprio nome, mas herda corCabelo de pai
console.log(filha1.corCabelo); // preto

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }, // filha2 tem seu próprio nome, mas herda corCabelo de pai
});

console.log(filha2.nome); // Bia
filha2.nome = 'Carla'; // esta linha não tem efeito porque writable é false
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`); // Bia

console.log(Object.keys(filha1)); // [ 'nome' ] (filha1 tem a propriedade nome, mas não tem corCabelo)
console.log(Object.keys(filha2)); // [ 'nome' ] (filha2 tem a propriedade nome, mas não tem corCabelo)

for (let key in filha2) {
    filha2.hasOwnProperty(key) ? // hasOwnProperty verifica se a propriedade pertence ao objeto ou é herdada
        console.log(key) : console.log(`Por herança: ${key}`); // nome é propriedade de filha2, corCabelo é herdada de pai
};