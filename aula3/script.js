// o q sao vetores/arrays

// como declarar um array
/*let array = ['string', 1, true];
console.log(array);
*/

// pode aguardar varios tipos de dados, inclusive outros arrays
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
// ao chamar o array, vc pode colocar entre os parenteses o indice do array q vc quer chamar
console.log(array[3]);

// foreach (executa uma funcao para cada indice de um array)
array.forEach(function () { console.log })

// push (adiciona item no final do array)
array.push(['array novo do push']);
console.log(array);

// pop (remove item no final do array)
array.pop();
console.log(array);

// shift (remove item no inicio do array)
array.shift();
console.log(array);

// unshift - adiciona item no inicio do array
array.unshift();
console.log(array);

// indexOf - retorna o indice de um valor do array
console.log(array.indexOf(true));

// splice - remove ou substitui um item pelo indice ou intervalo de indice informado
array.splice(1, 3);
console.log(array);

// slice - retorna uma parte de um array existente
let novoArray = array.slice(0, 2);
console.log(array);

// objetos - propriedades de variaveis
let gameboy = { cor: 'verde', pilhas: 2, funcionando: true, array: ["array"], jogos: { nomeJogo: 'Pokemon' } };
console.log(gameboy.jogos);

var cor = gameboy.cor;
console.log(cor);

var arrayInterno = gameboy.array;
console.log(arrayInterno);

var { cor, pilhas, funcionando } = gameboy;
console.log(cor, pilhas, funcionando);