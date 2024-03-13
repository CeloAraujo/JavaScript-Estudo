// // 1- Number
// console.log(typeof 2);
// console.log(typeof 2.97);
// console.log(typeof -989);

// // Operações aritméticas
// console.log(2 + 4);
// console.log(6 - 1);
// console.log(97 + 123 * 98 - 123 * 76);
// console.log(12 * 2 * (12 - 5));

// // 3-special numbers
// console.log(typeof Infinity);

// console.log(typeof -Infinity);

// console.log(12*"jdij");

// console.log(typeof NaN);

// // 4-Strings
// console.log("Um texto");
// console.log(`um texto`);
// console.log('13');

// console.log(typeof "Um texto");
// console.log(typeof `um texto`);
// console.log(typeof '13');

// 5-Símbolos especiais em strings
console.log("text em \nduas linhas");
console.log("espaçamento \t de tab");

// 6-Concatenação
console.log("oi," + "tudo" + " bem?");
console.log(`testando` + ` com` + ` crase`);

// template strings ( tem que ser entre crases)
console.log(`A some de 2+2 é: ${2 + 2}`);
console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`);

// 8-Boolean
console.log(true);
console.log(false);

console.log(5 > 6);
console.log(4 < 5);
console.log(typeof false);

// 9- Comparações
console.log(5 <= 5);
console.log(5 < 5);
console.log(10 == 10);
console.log(10 == 9);
console.log(10 != 9);

// 10- Idêntico
console.log(9 == "9");
console.log(9 + "9");
console.log(9 === "9");
console.log(9 !== "9");

// 11- Operadores lógicos
console.log(true && true);
console.log(true && false);
console.log(5 > 2 && 2 < 10);
console.log(5 > 2 && "marcelo" === 5);
console.log(5 > 2 || "marcelo" === 5);
console.log(5 < 2 || 2 > 5);
console.log(!true);
console.log(!5 < 2);

// 12-empty value
console.log(typeof null, typeof undefined);
console.log(null === undefined);
console.log(null == undefined);
console.log(null == false);
console.log(undefined == false);

// 13- mudança de tipos
console.log(5 * null);
console.log("teste" * "opa");
console.log("10" + 1);
console.log("10" - 1);
