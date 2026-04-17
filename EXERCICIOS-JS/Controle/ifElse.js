const imprimirResultado = function (nota) {
    if (nota >= 7) {
        console.log('Aprovado');
    } else {
        console.log('Reprovado');
    };
};

imprimirResultado(10);
imprimirResultado(4);
imprimirResultado('Epa!'); // Cuidado, a string é convertida para número e o resultado é NaN, que é considerado falso