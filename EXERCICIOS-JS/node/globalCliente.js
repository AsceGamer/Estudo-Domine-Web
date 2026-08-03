require('./global');

console.log(MinhaApp.saudacao());

MinhaApp.nome = 'Eita!'; // Não vai alterar o nome, pois o objeto foi congelado
console.log(MinhaApp.nome);