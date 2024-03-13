// 1-variaveis
let nome = "Marcelo";

console.log(nome);

nome = "Marcelo Araujo";
console.log(nome);

const idade = 24;

console.log(idade);

// idade = 25; não se muda constante, erro

console.log(typeof nome);
console.log(typeof idade);

// 2 mais sobre variaveis

// let 2teste ="inválido"
// let @teste="inválido"

let a = 10,
  b = 20,
  c = 30;

console.log(a, b, c);

const nomecompleto = "Marcelo Araujo";
const nomeCompleto = "João Ribeiro";

console.log(nomecompleto);
console.log(nomeCompleto);

let _teste = "ok";
let $teste = "ok";

console.log(_teste, $teste);

// 3-prompt

// const age = prompt("Digite a sua idade:");

// console.log(`você tem ${age} anos`);

// 4-alert
// alert("testando");

// const z=10;
// alert(`o número é ${z}`)

// 5-math
console.log(Math.max(5, 2, 1, 10));

console.log(Math.floor(5.14));
console.log(Math.ceil(5.14));

// 6-console
console.error("erro!");
console.warn("Aviso!");

// 7- If and Else
const m = 10;

if (m > 5) {
  console.log("M é maior que 5");
}

const user = "João";

if (user === "João") {
  console.log("nome de usuário é João");
}

if (user === "Maria") {
  console.log("Olá Maria");
} else {
  console.log("Registre seu nome");
}

const loggedIn = false;

if (loggedIn) {
  console.log("Está autenticado");
} else {
  console.log("Não está autenticado");
}

const q = 10;
const w = 15;

if (q > 5 && w > 20) {
  console.log("Números mais altos");
} else {
  console.log("Os números não são mais altos");
}

// Else if
if (1 > 2) {
  console.log("Teste");
} else if (2 > 3) {
  console.log("Teste 2");
} else if (5 > 1) {
  console.log("Agora sim!");
}

const userName = "Marcelo";
const userAge = 24;

if (userName === "José") {
  console.log("Bem vindo José!");
} else if (userName === "Marcelo" && userAge === 24) {
  console.log("Olá Marcelo, você tem 24 anos");
} else {
  console.log("Nenhuma condição aceita");
}

// 10-Estrutura de repetição- While
let p = 0;

while (p < 5) {
  console.log(`Repetindo ${p}`);
  p = p + 1;
}

// loop infinito
// let x = 10;

// while (x>5){
//     console.log(`Imprimindo ${x}`)
// }

// 11-DO while
let o = 10;

do {
  console.log(`Valor de o:${o}`);
  o--;
} while (o > 1);

// estrutura de repetição FOR
for (let t = 0; t < 10; t++) {
  console.log("Repetindo algo...");
}
let r = 10;
for (r; r > 0; r = r - 1) {
  console.log(`O r esta diminuindo: ${r}`);
}

// 13- Identação
for (let u = 0; u < 10; u++) {
  if (u * 2 > 10) {
    console.log(`Maior que 10!${u}`);
  } else {
    if (u / 2 === 0) {
      console.log("Deu 0");
    }
  }
}

// 14- Break

for (let g = 20; g > 10; g--) {
  console.log(`O valor de g é:${g}`);
  if (g === 15) {
    console.log("O g é 15");
    break;
  }
}

for (let m = 38; m > 5; m--) {
  console.log(`O valor de m é:${m}`);
  if (m === 24) {
    console.log(`Sua idade é ${m}`);
    break;
  }
}

// 15- Pulando a execução do loop (continue)
for (let s = 0; s < 10; s = s + 1) {
  // operador de resto =%
  if (s % 2 === 0) {
    console.log(`Número par! ${s}`);
    continue;
  }
  console.log(`Número ímpar!${s}`);
}

// 16- Switch
const job = "Advogado";

switch (job) {
  case "Programador":
    console.log("Você é um programador!");
    break;
  case "Advogado":
    console.log("Você é um advogado!");
    break;
  case "Engenheiro":
    console.log("Você é um engenheiro!");
    break;
  default:
    console.log("Profissão não encontrada");
}

// Switch  "Errado"
const l = 100

switch(l){
    case 200:
        console.log("L é 200")
    case 100:
        console.log("L é 100")
    case 50:
        console.log("L é 50!")
    default:
        console.log("L não foi encontrado")
}
