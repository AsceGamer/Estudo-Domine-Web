function Pessoa() {
    this.idade = 0;

    const self = this; // Armazenando a referência de 'this' em uma variável 'self'
    setInterval(function() {
        self.idade++;
        console.log(self.idade);
    } /*.bind(this)*/ , 1000); // O bind é uma alternativa para manter o contexto de 'this' dentro da função de callback
};

new Pessoa;