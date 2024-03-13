// arrays
const lista = [1, 2, 3, 4, 5];
console.log(lista);

console.log(typeof lista);

const itens = ["Marcelo", 15, true, 24.05, [1, 2, 3, "marcelo"]];

console.log(itens);
// 2- mais sobre arrays
const arr = ["a", "b", "c", "d"];

// 0 based [0,1,2,3]
console.log(arr[2]);

// 3-propriedades

const numbers = [5, 3, 4];

console.log(numbers.length);

console.log(numbers["length"]);

const myName = "Marcelo";

console.log(myName.length);

// 4- métodos
const otherNumbers = [1, 2, 3];

const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

const text = "algum texto";

console.log(text.toUpperCase());

console.log(typeof text.toUpperCase);

console.log(text.indexOf("g"));

// 5-objetos
const person = {
  name: "Marcelo",
  age: 31,
  job: "Programador",
};

console.log(person);

console.log(person.name);
console.log(person.name.length);
console.log(typeof person);

// 6-criando e deletando propriedades

const car = {
  engine: "1.0 aspirado",
  brand: "VW",
  model: "Polo",
  km: 2800,
};

console.log(car);

car.doors = 4;
console.log(car);

delete car.km;

console.log(car);

// 7- mais sobre objetos

const obj = {
  a: "teste",
  b: true,
};

console.log(obj instanceof Object);

// assign agrega, adiciona uma lista na outra

const obj2 = {
  c: [],
};
Object.assign(obj2, obj);

console.log(obj2);

// 8- conhecendo melhor os objetos

console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car));

// 9- mutação

const a = {
  name: "Marcelo",
};

const b = a;

console.log(a);
console.log(b);

console.log(a === b);

a.age = 31;

console.log(b);
console.log(a);

delete b.age;

console.log(b);
console.log(a);

// 10- Loop em array
const users = ["Marcelo", "Tsuna", "Sung", "Luci"];

for (let i = 0; i < users.length; i++) {
  console.log(`Listando o usuário: ${users[i]}`);
}

// 11- métodos de array: push e pop (fim)
const array = ["a", "b", "c"];

// adicionar
array.push("d");

console.log(array);
console.log(array.length);

// remover
array.pop();

console.log(array);

const itemRemovido = array.pop();

console.log(itemRemovido);

// 12- métodos de array: Shift e unshift (início)
const letters = ["a", "b", "c", "d"];

// remover
const letter = letters.shift();

console.log(letter);
console.log(letters);

// adicionar
letters.unshift("e", "f", "g");
letters.unshift("z");
console.log(letters);

// 13- métodos de array: indexOf e lastIndexOf
const myElement = ["Faca", "Espada", "Revolver", "Bastão", "Revolver"];

console.log(myElement.indexOf("Espada"));
console.log(myElement.indexOf("Revolver"));

console.log(myElement[2]);
console.log(myElement[myElement.indexOf("Revolver")]);

console.log(myElement.lastIndexOf("Revolver"));

console.log(myElement.indexOf("Bazooka"));
console.log(myElement.lastIndexOf("Bazooka"));

// 14-método de array: Slice
const testeSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testeSlice.slice(2, 4);

console.log(testeSlice);
console.log(subArray);

const subArray2 = testeSlice.slice(2, 4 + 1);

console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20);

console.log(subArray3);

const subArray4 = testeSlice.slice(2);

console.log(subArray4);

// 15-método de array: forEach
const nums = [1, 2, 3, 4, 5];

nums.forEach((numero) => {
  console.log(`O número é ${numero}`);
});

// exemplo de como ficaria com for

// for (i = 0; i < nums.length; i++) {
//   const numero = nums[i];
//   console.log(`O número é ${numero}`);
// }

const posts = [
  { title: "Primeiro post", category: "PHP" },
  { title: "Segundo post", category: "JavaScript" },
  { title: "Terceiro post", category: "Phyton" },
];

posts.forEach((post) => {
  console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
});

// exemplo de como ficaria com for

// for (i=0; i<posts.length; i++){
//     const post =posts[i];
//     console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`)
// }

// 16- método de array: includes
const brands = ["Gucci", "VW", "Mercedes"];

console.log(brands.includes("Mercedes"));
console.log(brands.includes("BMW"));

if (brands.includes("Mercedes")) {
  console.log("Essa marca está presente no sistema!");
} else {
  console.log("Esta marca não está presente no sistema!");
}

// 17- métodos de array: reverse
const reverseTest = [1, 2, 3, 4, 5];

reverseTest.reverse();

console.log(reverseTest);

// 18- Métodos de string

// trim
const trimTest = "  Testando \n ";

console.log(trimTest);

console.log(trimTest.trim());

console.log(trimTest.length);

console.log(trimTest.trim().length);

// padStart
const testePadStart = "1";

const newNumber = testePadStart.padStart(4, "0");

console.log(testePadStart);
console.log(newNumber);

// padEnd
const testePadEnd = newNumber.padEnd(10, "0");

console.log(testePadEnd);

// split
const frase = "O rato roeu a roupa do rei de Roma";

const arrayDaFrase = frase.split(" ");
console.log(arrayDaFrase);

// join
const fraseDeNovo = arrayDaFrase.join(" ");

console.log(fraseDeNovo);

const itensParaComprar = ["Mouse", "Teclado", "Monitor"];

const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`;

console.log(fraseDeCompra);

// repeat
const palavra = "Testando repeat ";

console.log(palavra.repeat(5));

// rest operator / rest parameters

const somaInfinita = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};

console.log(somaInfinita(1, 2, 3));
console.log(somaInfinita(1, 2, 3, 999, 82443, 6345, 7345345, 33, 2, 3456));

// estrutura de repetição for...of
const somaInfinita2 = (...args) => {
  let total = 0;

  for (num of args) {
    total += num;
  }
  return total;
};

console.log(somaInfinita2(1, 2, 4));
console.log(somaInfinita2(5, 14, 52, 127, 217));

// Destructuring em objetos

const userDetails = {
  firstName: "Marcelo",
  lastName: "Araujo",
  job: "Programador",
};

// const firstName = userDetails.firstName
// console.log(firstName)

const { firstName, lastName, job } = userDetails;

console.log(firstName, lastName, job);

// renomear variaveis
const { firstName: primeiroNome } = userDetails;

console.log(primeiroNome);

// Destructuring em arrays
const myList = ["avião", "Submarino", "Carro"];

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC);

// JSON

const myJson = '{"name":"Marcelo","age":24, "skills": ["HTML",  "CSS", "JavaScript"]}';

console.log(typeof myJson)

// JSON para objeto e objeto para JSON

const myObject = JSON.parse(myJson);

console.log(myObject);

console.log(myObject.name);

console.log(typeof myObject);

myObject.isOpenToWork = true

console.log(myObject);

const myNewJson = JSON.stringify(myObject)

console.log(myNewJson)
console.log(typeof myNewJson)





// json invalido
// const badJson= '{"name": Matheus,"age": 24}'

// const myBadObject = JSON.parse(badJson)
// console.log(myBadObject)
