// estrategia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
};

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)); // O resultado é 3, pois o valor 0 é considerado falsy em JavaScript. Quando a função soma1 é chamada com os argumentos (0, 0, 0), as variáveis a, b e c são atribuídas com o valor 0. Em seguida, a expressão a || 1 avalia para 1, b || 1 avalia para 1 e c || 1 avalia para 1. Portanto, a função retorna a soma de 1 + 1 + 1, que é igual a 3.

// estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1; // Verifica se o índice 1 existe no objeto arguments, ou seja, se o segundo argumento foi passado para a função. Se o índice 1 existir, a variável b recebe o valor do segundo argumento; caso contrário, b recebe o valor padrão 1.
    c = isNaN(c) ? 1 : c;
    return a + b + c;
};

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0)); // O resultado é 3, pois o valor 0 é considerado falsy em JavaScript. Quando a função soma2 é chamada com os argumentos (0, 0, 0), as variáveis a, b e c são atribuídas com o valor 0. Em seguida, a expressão a !== undefined ? a : 1 avalia para 1, b = 1 in arguments ? b : 1 avalia para 1 e c = isNaN(c) ? 1 : c avalia para 1. Portanto, a função retorna a soma de 1 + 1 + 1, que é igual a 3.

// valor padrão do ES2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c;
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0)); // O resultado é 3, pois o valor 0 é considerado falsy em JavaScript. Quando a função soma3 é chamada com os argumentos (0, 0, 0), as variáveis a, b e c são atribuídas com o valor 0. Em seguida, a expressão a = 1 avalia para 1, b = 1 avalia para 1 e c = 1 avalia para 1. Portanto, a função retorna a soma de 1 + 1 + 1, que é igual a 3.