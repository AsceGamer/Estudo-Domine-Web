/*01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/

const valor = function (x, y, operacao) {
    if (operacao === 'soma') {
        console.log(x + y);
    } else if (operacao === 'subtracao') {
        console.log(x - y);
    } else if (operacao === 'multiplicacao') {
        console.log(x * y);
    } else if (operacao === 'divisao') {
        console.log(x / y);
    } else {
        console.log('Operação inválida');
    }
};

valor(3, 4, 'soma');
valor(3, 4, 'subtracao');
valor(3, 4, 'multiplicacao');
valor(3, 4, 'divisao');
valor(3, 4, 'teste');

// resposta
/*function calcularOperacoes (operador1, operador2) {
    console.log(operador1+operador2, operador1-operador2, operador1*operador2, operador1/operador2);
}

calcularOperacoes(5, 2)
*/

/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/

const triângulo = function (lado1, lado2, lado3) {
    if (lado1 === lado2 && lado2 === lado3) {
        console.log('O triângulo é Equilátero');
    } else if (lado1 !== lado2 && lado2 !== lado3 && lado1 !== lado3) {
        console.log('O triângulo é Escaleno');
    } else {
        console.log('O triângulo é Isósceles');
    }
};

triângulo(1, 2, 3);
triângulo(4, 3, 3);
triângulo(4, 4, 4);

/*03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.*/

const elevar = function (base, expoente) {
    console.log(base ** expoente);
};

elevar(2, 3);



/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/

const divisão = function (divisor, dividendo) {
    console.log(dividendo / divisor);
    console.log(dividendo % divisor);
};

divisão(2, 10);

/*05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).*/

let valorexer5 = a => 0.30000000000000004;

console.log(valorexer5().toFixed(2).replace('.', ','));

/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

let jurosSimples = function (capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    console.log(capitalInicial * (1 + taxaDeJuros * tempoDeAplicacao).toFixed(2));
};

let jurosCompostos = function (capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    console.log((capitalInicial * (1 + taxaDeJuros) ** tempoDeAplicacao).toFixed(2));
};

jurosSimples(1000, 0.1, 2);
jurosCompostos(1000, 0.1, 2);

/*07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.*/

let bhaskara = function (a, b, c) {
    let delta = (b ** 2) - (4 * a * c);
    if (delta < 0) {
        return 'Delta é negativo, portanto não existem raízes reais';
    }else {
        let x1 = 0;
        let x2 = 0;
        x1 = (-b + Math.sqrt(delta)) / (2 * a);
        x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return [x1, x2];
    };
};

console.log(bhaskara(1, -5, 6));


/*08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)*/

let pontuacao = [10, 20, 20, 8, 25, 3, 0, 30, 1];

let registroDePontuacao = function (pontuacao) {
    let recorde = pontuacao[0];
    let piorJogo = 1;
    let vezesQueBateuRecorde = 0;
    for (let i = 1; i < pontuacao.length; i++) {
        if (pontuacao[i] > recorde) {
            recorde = pontuacao[i];
            vezesQueBateuRecorde++;
        }
        if (pontuacao[i] < pontuacao[piorJogo - 1]) {
            piorJogo = i + 1;
        }
    }
    return [vezesQueBateuRecorde, piorJogo];
};

console.log(registroDePontuacao(pontuacao));


/*09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.*/

let sistemaDeNotas = function (notas) {
    if (notas < 38 && notas >= 0) {
        return `Aluno Reprovado ${notas}`;
    }else if (notas >= 38 && notas < 40) {
        return 'Aluno Aprovado 40';
    }else if (notas >= 40 && notas < 100) {
        return `Aluno Aprovado ${notas}`;
    }else{
        return 'Nota inválida';
    };
};

console.log(sistemaDeNotas(29));
console.log(sistemaDeNotas(38));
console.log(sistemaDeNotas(84));
console.log(sistemaDeNotas(101));


/*10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.*/

let divisivelPor3 = function (numero) {
    return numero % 3 === 0;
};

console.log(divisivelPor3(15));
console.log(divisivelPor3(10));
console.log(divisivelPor3(-15));

/*11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.*/

let anoBissexto = function (ano) {
    if (ano % 400 === 0) {
        return `${ano} é um ano bissexto.`;
    } else if (ano % 100 === 0) {
        return `${ano} não é um ano bissexto.`;
    } else if (ano % 4 === 0) {
        return `${ano} é um ano bissexto.`;
    } else {
        return `${ano} não é um ano bissexto.`;
    }
};

console.log(anoBissexto(1990));
console.log(anoBissexto(2020));
console.log(anoBissexto(1900));
console.log(anoBissexto(2000));


/*12) Faça um algoritmo que calcule o fatorial de um número.*/

function calcularFatorial(numero) {
    if (numero < 0) return "Não existe fatorial de número negativo";
    
    let resultado = 1;
    for (let i = numero; i > 1; i--) {
        resultado *= i;
    }
    return resultado;
}

console.log(calcularFatorial(5));


/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.*/

const diaDaSemana = function (dia) {
    switch (dia) {
        case 6: case 2: case 3: case 4: case 5:
            console.log('Dia útil');
            break;
        case 1: case 7:
            console.log('Fim de semana');
            break;
        default:
            console.log('Dia inválido');
    };
};

diaDaSemana(1);

/*14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.*/

const frutas = function (fruta) {
    switch (fruta) {
        case 'maçã':
            console.log(`Não vendemos esta ${fruta} aqui.`);
            break;
        case 'kiwi':
            console.log(`Estamos com escassez de ${fruta}.`);
            break;
        case 'melancia':
            console.log(`Aqui está, são 3 reais o quilo.`);
            break;
        default:
            console.log('Fruta inválida.');
    };
};

frutas('maçã');
frutas('kiwi');
frutas('melancia');
frutas('alcatra');


/*15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.*/

const comprarCarro = function (carro) {
    switch (carro) {
        case 'hatch':
            console.log(`Compra efetuada com sucesso.`);
            break;
        case 'sedans': case 'motocicletas': case 'caminhonetes':
            console.log(`Tem certeza que não prefere este modelo?`);
            break;
        default:
            console.log(`Não trabalhamos com este ${carro} de automóvel aqui`);
    };
};

comprarCarro('hatch');
comprarCarro('sedans');
comprarCarro('motocicletas');
comprarCarro('caminhonetes');
comprarCarro('teste');


/*16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.*/

const calculadoraBásica = function (a, b, operacao) {
    switch (operacao) {
        case '+': case 'soma':
            console.log("O resultado da soma é: " + (a + b));
            break;
        case '-': case 'subtração':
            console.log("O resultado da subtração é: " + (a - b));
            break;
        case '*': case 'multiplicação':
            console.log("O resultado da multiplicação é: " + (a * b));
            break;
        case '/': case 'divisão':
            console.log("O resultado da divisão é: " + (a / b));
            break;
        default:
            console.log(`Operação inválida.`);
    };
};

calculadoraBásica(10, 5, '+');
calculadoraBásica(10, 5, 'divisão');
calculadoraBásica(10, 5, '-');
calculadoraBásica(10, 5, 'teste');

/*17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/

const planoDeTrabalho = function (salario, aumento) {
    switch (aumento) {
        case 'A': case 'a':
            console.log("Seu novo salário é: " + (salario * 1.1).toFixed(2) + " Aumento de 10%");
            break;
        case 'B': case 'b':
            console.log("Seu novo salário é: " + (salario * 1.15).toFixed(2) + " Aumento de 15%");
            break;
        case 'C': case 'c':
            console.log("Seu novo salário é: " + (salario * 1.2).toFixed(2) + " Aumento de 20%");
            break;
        default:
            console.log(`plano é inválido.`);
    };
};

planoDeTrabalho(2100, 'A');
planoDeTrabalho(2100, 'b');
planoDeTrabalho(2100, 'C');
planoDeTrabalho(2100, 'Teste');


/*18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’*/

const leiaNumero = function (a) {
    switch (a) {
        case 1: case '1':
            console.log(`O seu número ${a} por extenso é: um`);
            break;
        case 2: case '2':
            console.log(`O seu número ${a} por extenso é: dois`);
            break;
        case 3: case '3':
            console.log(`O seu número ${a} por extenso é: três`);
            break;
        case 4: case '4':
            console.log(`O seu número ${a} por extenso é: quatro`);
            break;
        case 5: case '5':
            console.log(`O seu número ${a} por extenso é: cinco`);
            break;
        case 6: case '6':
            console.log(`O seu número ${a} por extenso é: seis`);
            break;
        case 7: case '7':
            console.log(`O seu número ${a} por extenso é: sete`);
            break;
        case 8: case '8':
            console.log(`O seu número ${a} por extenso é: oito`);
            break;
        case 9: case '9':
            console.log(`O seu número ${a} por extenso é: nove`);
            break;
        case 10: case '10':
            console.log(`O seu número ${a} por extenso é: dez`);
            break;
        case 0: case '0':
            console.log(`O seu número ${a} por extenso é: zero`);
            break;
        default:
            console.log(`Número fora do intervalo.`);
    };
};

leiaNumero(1);
leiaNumero("5");
leiaNumero(0);
leiaNumero("10");
leiaNumero(1000);



/*19) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.*/

const lanchonetecardapio = function (item, quantidade) {
    switch (item) {
        case 100: case '100': case "Cachorro Quente": case "cachorroQuente":
            valor = quantidade * 3;
            console.log(`O valor a ser pago pelo ${quantidade} Cachorro Quente(s) é: R$ ${(valor).toFixed(2)}`);
            break;
        case 200: case '200': case "Hambúrguer Simples": case "hambúrguerSimples":
            valor = quantidade * 4;
            console.log(`O valor a ser pago pelo ${quantidade} Hambúrguer Simples(s) é: R$ ${(valor).toFixed(2)}`);
            break;
        case 300: case '300': case "Cheeseburguer": case "cheeseburguer":
            valor = quantidade * 5.5;
            console.log(`O valor a ser pago pelo ${quantidade} Cheeseburguer(s) é: R$ ${(valor).toFixed(2)}`);
            break;
        case 400: case '400': case "Bauru": case "bauru":
            valor = quantidade * 7.5;
            console.log(`O valor a ser pago pelo ${quantidade} Bauru(s) é: R$ ${(valor).toFixed(2)}`);
            break;
        case 500: case '500': case "Refrigerante": case "refrigerante":
            valor = quantidade * 3.5;
            console.log(`O valor a ser pago pelo ${quantidade} Refrigerante(s) é: R$ ${(valor).toFixed(2)}`);
            break;
        case 600: case '600': case "Suco": case "suco":
            valor = quantidade * 2.8;
            console.log(`O valor a ser pago pelo ${quantidade} Suco(s) é: R$ ${(valor).toFixed(2)}`);
            break;
        default:
            console.log(`Não existe este item no cardápio.`);
    };
};

lanchonetecardapio(100, 2);
lanchonetecardapio(200, 5);
lanchonetecardapio(300, 7);
lanchonetecardapio(400, 10);
lanchonetecardapio(500, 20);
lanchonetecardapio(600, 8);
lanchonetecardapio(1000, 20);

/*20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.*/

const quantasnotas = function (valor) {
    let notas = { 100: 0, 50: 0, 10: 0, 5: 0, 1: 0 };
    let resto = valor;

    while (resto > 0) {
        if (resto >= 100) {
            notas[100] = Math.floor(resto / 100);
            resto %= 100;
        } else if (resto >= 50) {
            notas[50] = Math.floor(resto / 50);
            resto %= 50;
        } else if (resto >= 10) {
            notas[10] = Math.floor(resto / 10);
            resto %= 10;
        } else if (resto >= 5) {
            notas[5] = Math.floor(resto / 5);
            resto %= 5;
        } else {
            notas[1] = resto;
            resto = 0;
        }
    };

    for (let nota in notas) {
        if (notas[nota] > 0) {
            console.log(`${notas[nota]} nota(s) de R$ ${parseInt(nota).toFixed(2)}`);
        };
    };
};

quantasnotas(18);




/*21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130*/

const planoSaude = function (idade) {
    if (idade >= 0 && idade < 10) {
        console.log(`O valor a ser pago pelo plano de saúde é: R$ ${(100 + 80).toFixed(2)}`);
    } else if (idade >= 10 && idade <= 30) {
        console.log(`O valor a ser pago pelo plano de saúde é: R$ ${(100 + 50).toFixed(2)}`);
    } else if (idade > 30 && idade <= 60) {
        console.log(`O valor a ser pago pelo plano de saúde é: R$ ${(100 + 95).toFixed(2)}`);
    } else if (idade > 60) {
        console.log(`O valor a ser pago pelo plano de saúde é: R$ ${(100 + 130).toFixed(2)}`);
    } else {
        console.log(`Idade inválida.`);
    };
};

planoSaude(5);
planoSaude(18);
planoSaude(50);
planoSaude(80);
planoSaude(-5);

/*22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.*/




/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/




/*24) Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.*/

const impimirMensagem = function () {
    for (let i = 0; i < 11; i++) {
        console.log("Hello World!");
    };
};

impimirMensagem();



/*25) Escrever um programa para exibir os números de 1 até 50 na tela.*/


const impimirNumero1a50 = function () {
    for (let i = 1; i <= 50; i++) {
        console.log(i);
    };
};

impimirNumero1a50();

/*26) Fazer um programa para encontrar todos os pares entre 1 e 100.*/

const impimirNumerosPares = function () {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    };
};

impimirNumerosPares();


/*27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.*/

const alturaCrescimento = function (altura1, altura2, taxaCrescimento1, taxaCrescimento2) {
    if (altura1 !== altura2) {
        if (altura1 < altura2 && taxaCrescimento1 > taxaCrescimento2) {
            alturaMenor = altura1 + taxaCrescimento1;
            alturaMaior = altura2 + taxaCrescimento2;
            tempo = 1;
            while (alturaMenor <= alturaMaior) {
                alturaMenor += taxaCrescimento1;
                alturaMaior += taxaCrescimento2;
                tempo++;
            };
            console.log('A criança 1 ultrapassará a maior em ' + tempo + ' anos.');
            return;
        } else if (altura1 < altura2 && taxaCrescimento1 < taxaCrescimento2) {
            alturaMenor = altura2 + taxaCrescimento2;
            alturaMaior = altura1 + taxaCrescimento1;
            tempo = 1;
            while (alturaMenor <= alturaMaior) {
                alturaMenor += taxaCrescimento2;
                alturaMaior += taxaCrescimento1;
                tempo++;
            };
            console.log('A criança 2 ultrapassará a maior em ' + tempo + ' anos.');
            return;
        } else {
            console.log('A criança menor não ultrapassará a maior.');
             return;
        }
    } else if (altura1 === altura2 && taxaCrescimento1 !== taxaCrescimento2) {
        console.log('As crianças têm a mesma altura.');
        return;
    }
};

alturaCrescimento(100, 90, 3, 3);


/*28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/
const vetor28 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let quantidadePares = 0;
let quantidadeImpares = 0;

const contadorParImpar= function () {
    for (let i in vetor28) {
        if (vetor28[i] % 2 === 0) {
            quantidadePares++;
        } else {
            quantidadeImpares++;
        };
    };
    console.log(`Quantidade de números pares: ${quantidadePares}`);
    console.log(`Quantidade de números ímpares: ${quantidadeImpares}`);
};

contadorParImpar();


/*29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.*/

                                /* 
                                    REFATORAR 
                                                O
                                                    CODIGO PARA VERIFICAR SE TEM COMO MELHORAR.
                                       
                                                                                            */


const vetor29 = [0, 1, 2, 30, 4, 5, 50, 7, 8, 16, 10];

const contadorIntervalo10a20 = function () {
    for (let i in vetor29) {
        if (vetor29[i] >= 10 && vetor29[i] <= 20) {
            console.log(`O número ${vetor29[i]} está no intervalo [10,20].`);
        } else {
            console.log(`O número ${vetor29[i]} está fora do intervalo [10,20].`);
        };
    };
};

contadorIntervalo10a20();


/*30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.*/

const vetor30 = [0, 1, 2, 30, 4, 5, 50, 7, 8, 16, 10];
let maiorValor = vetor30[0];
let menorValor = vetor30[0];

const contadorMaioreMenor = function () {
    for (let i = 0; i < vetor30.length; i++) {
        if (vetor30[i] > maiorValor) {
            maiorValor = vetor30[i];
        } else if (vetor30[i] < menorValor) {
            menorValor = vetor30[i];
        };
    };
    console.log(`O maior valor do vetor é: ${maiorValor}, e o menor valor do vetor é: ${menorValor}.`);
};

contadorMaioreMenor();

/* Feito com auxilio do Google. */

const vetor30 = [0, 1, 2, 30, 4, 5, 50, 7, 8, 16, 10];
let maiorNumero = Math.max(...vetor30);                     // O operador spread (...) é usado para expandir o vetor em elementos individuais, permitindo que a função Math.max()   encontre o maior número.
console.log(`O maior número é: ${maiorNumero}`);


/*31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/

const vetor31 = [-1, 2, 30, 4, -5, 50, 7, 8, -16, 10, 0];
let quantidadeNegativos = 0;

const contadorNegativos = function () {
    for (let i = 0; i < vetor31.length; i++) {
        if (vetor31[i] < 0) {
            quantidadeNegativos++;
        }
    };
    console.log(`A quantidade de números negativos no vetor é: ${quantidadeNegativos}.`);
};

contadorNegativos();


/*32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.*/

const vetor32 = [-1, 2, 30, 4, -5, 50, 7, 8, -16, 10, 0];
let quantidadeTotal = 0;

const contadorMedioVetor = function () {
    for (let i = 0; i < vetor32.length; i++) {
        quantidadeTotal += vetor32[i];
    };
    const media = quantidadeTotal / vetor32.length;
    console.log(`A média aritmética dos valores do vetor é: ${media.toFixed(2)}.`);
};

contadorMedioVetor();


/*33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.*/

const vetorInteiro = [1, 2, 30, 4, 5, 50];
const vetorString = ['a', 'w', 's', 'd', 'q', 'w'];
const vetorDouble = [-1.5, 2.7, 30.1, 4.3, -5.2, 50.8];
let vetorUniao = vetorInteiro.concat(vetorString, vetorDouble);
console.log(vetorUniao);


/*34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.*/




/*35) Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos
inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha
e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao
final das operações imprima os vetores no console.*/




/*36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.*/




/*37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.*/




/*38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.*/




/*39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.*/




/*40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.*/



