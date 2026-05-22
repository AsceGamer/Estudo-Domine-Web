/* Feito sem ver o video
function criarPessoa(nome, sobrenome, desconto = 0.1) {
    return {
        desconto: desconto,
        nome: nome,
        sobrenome: sobrenome,
    };
};

console.log(criarPessoa('Maria', 'Oliveira'));
*/

// Feito com o video
function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1,
    };
};

console.log(criarProduto('Notebook', 2199.49));
console.log(criarProduto('iPad', 1199.49));