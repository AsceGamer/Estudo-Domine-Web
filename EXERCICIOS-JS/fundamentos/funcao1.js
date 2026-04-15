// Função sem retorno
function imprimirSomar(a, b){
    console.log(a + b);
};

imprimirSomar(2, 3);
imprimirSomar(2);
imprimirSomar(2, 10, 4, 5, 6, 7, 8);
imprimirSomar();

//Função com retorno

function soma(a, b = 0) {
    return a + b;
};

console.log(soma(2, 3));
console.log(soma(2));
console.log(soma());