const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

const chineses = (func) => func.pais === "China";
const mulheres = (func) => func.genero === "F";
const salarioMaior = (func) => func.salario > 2100;

console.log("Mulheres chinesas:");
axios.get(url).then((response) => {
  const funcionarios = response.data;
    const resultado = funcionarios.filter(chineses).filter(mulheres).filter(salarioMaior);
    console.log(resultado);
});