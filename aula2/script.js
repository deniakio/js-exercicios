// tipos primitivos 

// boolean
var booleano = true;
console.log(typeof (booleano));

// number
var numeroQualquer = 1;
console.log(typeof (numeroQualquer));

//string
var nome = 'deni'
console.log(typeof (nome));

//como declarar
var variavel = 'deni';
console.log(variavel);

let variavel2 = 'akio';
console.log(variavel2);
variavel2 = 'deni';
console.log(variavel2);

const constante = 'akio';
constante = 'deni';
console.log(constante);

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocal);
}

escopoLocal();

// atribuicao
var atribuicao = 'valor';
console.log(atribuicao);

// comparacao
var comparacao = '0' == 0;
console.log(comparacao);

// comparacao identica 
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

// adicao
var adicao = 1 + 1;
console.log(adicao);

// subtracao
var subtracao = 4 - 2;
console.log(subtracao);

// multiplicacao
var multiplicacao = 6 * 2;
console.log(multiplicacao);

// divisao real
var divisao = 8 / 4;
console.log(divisao);

// divisao inteira
var divisaoInteira = 7 % 3;
console.log(divisaoInteira);

//potenciacao
var potenciacao = 2 ** 3;
console.log(potenciacao);

// maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

// menor
var menorQue = 5 < 2;
console.log(menorQue);

// maior ou igual a 
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

// menor ou igual a
var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);

// operadores logicos (e, ou, inversao)

var e = true && true;
console.log(e);

var ou = false || false;
console.log(ou);

var inverter = !false;
console.log(inverter);