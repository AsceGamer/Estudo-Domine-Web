const quasiArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' };
console.log(quasiArray);
Object.defineProperty(quasiArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
});

console.log(quasiArray[0]);

const meuArray = ['Rafael', 'Ana', 'Bia'];
console.log(quasiArray.toString(), meuArray);