// 1- criando função
function minhaFuncao(txt) {
  console.log("testando");
}
// chamando a funcao
minhaFuncao();
minhaFuncao();

const minhaFuncaoEmVariavel = function () {
  console.log("Função em variável");
};

minhaFuncaoEmVariavel();

function funcaoComParametro(txt) {
  console.log(`imprimindo: ${txt}`);
}

funcaoComParametro("imprimindo alguma coisa");

funcaoComParametro("Outra função");

// 2- return
const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1, n2) {
  return n1 + n2;
}

const resultado = soma(a, b);

console.log(resultado);

console.log(soma(c, d));

// 3-escopo da funcao

let y = 10;

function testandoEscopo() {
  let y = 20;
  console.log(`Y dentro da função é: ${y}`);
}

console.log(`Y fora da função é:${y}`);

y = 15;

testandoEscopo();

console.log(`Y fora da função é:${y}`);

// 4- escopo aninhado
let m = 10;

function escopoAninhado() {
  let m = 20;

  if (true) {
    let m = 30;

    if (true) {
      let m = 40;
      console.log(m);
    }
    console.log(m);
  }
  console.log(m);
}

escopoAninhado();

console.log(m);

// arrow function
const testArrow = () => {
  console.log("Esta é uma arrow function");
};

testArrow();

const parOuImpar = (n) => {
  if (n % 2 === 0) {
    console.log("Par");
    return;
  }
  console.log("Impar");
};

parOuImpar(5);
parOuImpar(10);

// 6- mais sobre arrow function

const raizQuadrada = (x) => {
  return x * x;
};
console.log(raizQuadrada(8));

const raizQuadrada2 = (x) => x * x;

console.log(raizQuadrada2(8));

// 7- Parametro opcional

const multiplication = function (m, n) {
  if (n === undefined) {
    return m * 2;
  } else {
    return m * n;
  }
};

console.log(multiplication(5));
console.log(multiplication(5, 5));

const greeting = (name) => {
  if (!name) {
    console.log("Olá");
    return;
  }
  console.log(`Olá ${name}!`);
};

greeting();

greeting("Marcelo");

// 8- valor default... é quando o argumento tem um valor prévio
const customGreeting = (name, greet = "Olá") => {
  return `${greet},${name}`;
};

console.log(customGreeting("Matheus"));

console.log(customGreeting("Marcelo", "Boa Tarde"));

const repeatText = (text, repeat = 4) => {
  for (let i = 0; i < repeat; i++) {
    console.log(text);
  }
};
// utilizando o valor default
repeatText("Testando");

// modificando o valor
repeatText("testando outros valores", 2);

// 9- closure

function someFunction() {
  let txt = "Alguma coisa";

  function display() {
    console.log(txt);
  }
  display();
}

someFunction();

// 10- mais sobre closure

const multiplicationClosure = (n) => {
  return (m) => {
    return n * m;
  };
};

const c1 = multiplicationClosure(5);
const c2 = multiplicationClosure(10);

console.log(c1(2));
console.log(c2(4));

// 11-recursion

const untilTen = (n, m) => {
  if (n < 10) {
    console.log("A função parou de executar!");
  } else {
    const x = n - m;

    console.log(x);

    untilTen(x, m);
  }
};

untilTen(100, 7);

// infinite recursion

// function run(){
//     console.log("Executando...");
//     return();
// }
// run();

function factorial(x) {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}
const num = 5;

const result = factorial(num);

console.log(`O fatorial do número ${num} é:${result}`);

