const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`);
});

aprovados.forEach(nome => console.log(nome));
//aprovados.forEach((nome, indice) => console.log(`${indice + 1}) ${nome}`));
//aprovados.forEach(aprovado => console.log(aprovado));

const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados);