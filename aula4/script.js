// condicional IF

var jogador1 = 0;
var jogador2 = 0;
var placar;

if (jogador1 > 0) {
    console.log('Jogador 1 marcou ponto!')
} else if (jogador2 > 0) {
    console.log('Jogador 2 marcou ponto!')
} else {
    console.log('Ninguem marcou ponto.')
}

//IF ternario - condicional em uma unica linha
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores sao validos') : console.log('Os jogadores nao sao validos');

//usando switch - mesma utilidade do if
switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('jogador 1 ganhou');
        break;
    case placar = jogador1 < jogador2:
        console.log('jogador 2 ganhou');
        break;
    default:
        console.log('ninguem ganhou')
}

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];

let object = { propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3', }

//for - executa uma instrucao ate q ela seja falsa
for (let indice = 0; indice < array.length; indice++) {
    console.log(indice);
}

// for/of - executa repeticao a partir de valor
//com array
for (i of array) {
    console.log(i);
}

// com object
for (i of object.propriedade1) {
    console.log(i);
}

var a = 0;
while (a < 10) {
    a++;
    console.log(a);
}

do {
    a++;
    console.log(a);
} while (a < 10)