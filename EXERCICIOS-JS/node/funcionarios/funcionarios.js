const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

const chineses = (func) => func.pais === "China";
const mulheres = (func) => func.genero === "F";

console.log("Mulheres chinesas:");
axios.get(url).then((response) => {
    const funcionarios = response.data;

    // Mulheres chinesas com menor salário
    const resultado = funcionarios.filter(chineses).filter(mulheres).reduce((acumulador, func) => {
      if (func.salario < acumulador.salario) {
        return func;
      }
      return acumulador;
    },);
    console.log(resultado);
});


// codigo analizado e melhorado pelo google:

/*
const axios = require("axios");
const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
*/

// Minifunções para deixar o código legível
const ehChines = (func) => func.pais === "China";
const ehMulher = (func) => func.genero === "F";
const menorSalario = (menor, atual) => atual.salario < menor.salario ? atual : menor;

// Usando async/await para lidar com a requisição de forma moderna
async function buscarMulherChinesaMaisBarata() {
    try {
        // Espera os dados chegarem antes de ir para a próxima linha
        const response = await axios.get(url);
        const funcionarios = response.data;

        const resultado = funcionarios
            .filter(ehChines)
            .filter(ehMulher)
            .reduce(menorSalario); // Sem valor inicial, ele pega o 1º do array filtrado!

        console.log("Mulher chinesa com menor salário:");
        console.log(resultado);

    } catch (erro) {
        // Se algo der errado (ex: sem internet), ele cai aqui e avisa
        console.error("Erro ao buscar os funcionários:", erro.message);
    }
}

// Executa a função
buscarMulherChinesaMaisBarata();