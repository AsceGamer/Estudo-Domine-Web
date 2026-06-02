function MeuObjeto() {}
console.log(MeuObjeto.prototype); // { constructor: MeuObjeto }

const obj1 = new MeuObjeto();
const obj2 = new MeuObjeto();
console.log(obj1.__proto__ === obj2.__proto__); // true (obj1 e obj2 compartilham o mesmo protótipo)
console.log(MeuObjeto.prototype === obj1.__proto__); // true (o protótipo de obj1 é o mesmo que MeuObjeto.prototype)

MeuObjeto.prototype.nome = 'Anônimo';
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`);
};

obj1.falar(); // Bom dia! Meu nome é Anônimo (obj1 herda nome e falar de MeuObjeto.prototype)

obj2.nome = 'Rafael';
obj2.falar(); // Bom dia! Meu nome é Rafael (obj2 tem seu próprio nome, mas herda falar de MeuObjeto.prototype)

const obj3 = {};
obj3.__proto__ = MeuObjeto.prototype; // obj3 herda de MeuObjeto.prototype
obj3.nome = 'Obj3';
obj3.falar(); // Bom dia! Meu nome é Obj3 (obj3 tem seu próprio nome, mas herda falar de MeuObjeto.prototype)

// Resumo da cadeia de protótipos:
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype); // true
console.log(MeuObjeto.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null); // true (Object.prototype é o topo da cadeia de protótipos)