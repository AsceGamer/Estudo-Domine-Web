const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

axios.get(url).then((response) => {
    const funcionarios = response.data;
});

const chineses = (func) => func.pais === "China";
const mulheres = (func) => func.genero === "F";

console.log("Mulheres chinesas:");
axios.get(url).then((response) => {
  const funcionarios = response.data;
    const resultado = funcionarios.filter(chineses).filter(mulheres).reduce((acc, func) => {
      if (func.salario < acc.salario) {
        return func;
      }
      return acc;
    }, funcionarios[0]);
    console.log(resultado);
});