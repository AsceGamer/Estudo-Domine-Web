console.log(typeof String); 
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function() { // adicionando um método ao protótipo de String
    return this.split('').reverse().join('');
};

console.log('Escola Cod3r'.reverse()); // r3doC alocsE (o método reverse funciona em qualquer string, pois foi adicionado ao protótipo de String)

Array.prototype.first = function() { // adicionando um método ao protótipo de Array
    return this[0];
};

console.log([1, 2, 3, 4, 5].first()); // 1 (o método first funciona em qualquer array, pois foi adicionado ao protótipo de Array)
console.log(['a', 'b', 'c'].first()); // a (o método first funciona em qualquer array, pois foi adicionado ao protótipo de Array)

String.prototype.toString = function() { // sobrescrevendo o método toString do protótipo de String
    return 'Lascou tudo';
};

console.log('Escola Cod3r'.reverse()); // Lascou tudo (o método toString foi sobrescrito e funciona em qualquer string, pois foi adicionado ao protótipo de String)