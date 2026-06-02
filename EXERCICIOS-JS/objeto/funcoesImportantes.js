const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13,
};

console.log(Object.keys(pessoa)); // retorna um array com as chaves do objeto
console.log(Object.values(pessoa)); // retorna um array com os valores do objeto
console.log(Object.entries(pessoa)); // retorna um array com os pares chave-valor do objeto

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // torna a propriedade enumerável (aparece em Object.keys)
    writable: false,  // torna a propriedade imutável (não pode ser alterada)
    value: '01/01/2020' // valor da propriedade
});

pessoa.dataNascimento = '01/01/2021'; // esta linha não tem efeito porque writable é false
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// Object.assign (ECMAScript 2015)
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2); // dest é o objeto destino, o1 e o2 são os objetos de origem

Object.freeze(obj); // congela o objeto, tornando-o imutável
obj.c = 1234; // esta linha não tem efeito porque o objeto está congelado
console.log(obj);