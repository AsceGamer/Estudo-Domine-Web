function soma() {
    let soma = 0;
    for (i in arguments) {
        soma += arguments[i];
    };
    return soma;
};

console.log(soma());
console.log(soma(1));
console.log(soma(1.1, 2.2, 3.3));

console.log(soma(1.1, 2.2, 'Teste')); // O resultado é 3.3Teste, pois o operador + tem a função de concatenação quando um dos operandos é string. O número 3.3 é convertido para string e concatenado com a string 'Teste'.
console.log(soma('a', 'b', 'c')); // O resultado é abc, pois o operador + tem a função de concatenação quando um dos operandos é string. As strings 'a', 'b' e 'c' são concatenadas para formar a string 'abc'.