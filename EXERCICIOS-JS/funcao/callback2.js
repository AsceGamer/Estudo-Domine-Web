const notas = [7.7, 6.5, 8.9, 9.2, 3.6, 4.5, 8.1];

// Sem callback
const notasBaixas1 = [];
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i]);
    };
};

console.log(notasBaixas1);

// Com callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7;
});

console.log(notasBaixas2);

const notasMenorQue7 = nota => nota < 7;
const notasBaixas4 = notas.filter(notasMenorQue7);
console.log(notasBaixas4);


// Com callback e arrow
const notasBaixas3 = notas.filter(nota => nota < 7);
console.log(notasBaixas3);