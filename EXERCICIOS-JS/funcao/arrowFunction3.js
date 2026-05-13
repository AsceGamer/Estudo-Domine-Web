let comparaComThis = function (param) {
    console.log(this === param)
};

comparaComThis(global); // true

const obj = {};
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global); // false
comparaComThis(obj); // true

let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global); // false, pois o this em arrow function aponta para o contexto onde foi definida, ou seja, o módulo
comparaComThisArrow(module.exports); // true, pois o this em arrow function aponta para o contexto onde foi definida, ou seja, o módulo

comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj); // false, pois o this em arrow function não muda com bind, continua apontando para o módulo 
comparaComThisArrow(module.exports); // true, pois o this em arrow function aponta para o contexto onde foi definida, ou seja, o módulo