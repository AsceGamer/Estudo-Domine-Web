// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0';   // não e recomendado adicionar propriedades ao Object.prototype, pois isso afeta todos os objetos

const avo = { attr1: 'A' };
const pai = { __proto__: avo, attr2: 'B', attr3: '3' };
const filho = { __proto__: pai, attr3: 'C' };
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3); // 0 e do Object.prototype, A do avo, B do pai e C do filho

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta;
        } else {
            this.velAtual = this.velMax;
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
    },
};

const ferrari = {
    modelo: 'F40',
    velMax: 324, // shadowing (sombreamento)
};

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`; // super para acessar o método do protótipo
    },
};

Object.setPrototypeOf(ferrari, carro); // ferrari herda de carro
Object.setPrototypeOf(volvo, carro); // volvo herda de carro

console.log(ferrari); // { modelo: 'F40', velMax: 324 }
console.log(volvo); // { modelo: 'V40', status: [Function: status] }

volvo.acelerarMais(100);
console.log(volvo.status()); // V40: 100Km/h de 200Km/h

ferrari.acelerarMais(300);
console.log(ferrari.status()); // 324Km/h de 324Km/h (velMax do ferrari é 324, não do carro)