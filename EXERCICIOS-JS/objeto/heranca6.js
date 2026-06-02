function Aula(nome, videoID) {
    this.nome = nome;
    this.videoID = videoID;
};

const aula1 = new Aula('Bem vindo', 123);
const aula2 = new Aula('Até breve', 456);
console.log(aula1, aula2); // Aula { nome: 'Bem vindo', videoID: 123 } Aula { nome: 'Até breve', videoID: 456 }

// Simulando o operador new
function novo(f, ...params) { // ...params é o operador rest, que agrupa os parâmetros em um array
    const obj = {};
    obj.__proto__ = f.prototype; // obj herda de f.prototype
    f.apply(obj, params); // executa a função f com o contexto de obj e os parâmetros passados
    return obj; // retorna o objeto criado
};

const aula3 = novo(Aula, 'Bem vindo', 123);
const aula4 = novo(Aula, 'Até breve', 456);
console.log(aula3, aula4); // Aula { nome: 'Bem vindo', videoID: 123 } Aula { nome: 'Até breve', videoID: 456 }