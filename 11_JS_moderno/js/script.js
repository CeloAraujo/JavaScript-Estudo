// 1 1- var, let e const
var x = 10;
var y = 15;

// altera os valores das variaveis iniciais
if (y > 10) {
  var x = 5;
  console.log(x);
}

console.log(x);

let a = 10;
let b = 15;

// não altera as variaveis iniciais
if (b > 10) {
  let a = 5;
  console.log(a);
}
console.log(a);

//   basicamente o mesmo funciona aqui
function logName() {
  const name = "Marcelo";
  console.log(name);
}

const name = "Pedro";

logName();

console.log(name);

//   2- arrow function

const sum = function (a, b) {
  return a + b;
};

const arrowSum = (a, b) => a + b;

console.log(sum(5, 5));

console.log(arrowSum(5, 5));

// mais um exemplo de arrow, mas com if
const greeting = (name) => {
  if (name) {
    return `Hello ${name}!`;
  } else {
    return `Hello!`;
  }
};

console.log(greeting("Marcelo"));
console.log(greeting());

// outro exemplo
//o "this" não é mais objeto, pois esta encapsulado uma função dentro do método
const user = {
  name: "Theo",
  sayUserName() {
    setTimeout(function () {
      console.log(this);
      console.log(`Username: ${this.name}`);
    }, 1000);
  },
  //com arrow function consigo usar o "this" como objeto *IMPORTANTE
  sayUserNameArrow() {
    setTimeout(() => {
      console.log(this);
      console.log(`Username: ${this.name}`);
    }, 2000);
  },
};

user.sayUserName();

user.sayUserNameArrow();

// 3- filter
const arr = [1, 2, 3, 4, 5, 6];

const highNumbers = arr.filter((n) => {
  if (n >= 3) {
    return n;
  }
});

console.log(highNumbers);

// outro exemplo
const users = [
  { name: "Marcelo", available: true },
  { name: "Joao", available: false },
  { name: "Maria", available: false },
  { name: "Cleber", available: true },
  { name: "Ana", available: true },
];

const availableUsers = users.filter((user) => user.available);

console.log(availableUsers);

// 4- map
// filter seleciona, o map modifica o array
const products = [
  { name: "Camisa", price: 10.99, category: "Roupa" },
  { name: "Televisão", price: 2299.0, category: "Eletro" },
  { name: "Fogão", price: 1100.0, category: "Eletro" },
  { name: "Sneaker", price: 899.0, category: "Roupa" },
];

products.map((product) => {
  if (product.category === "Roupa") {
    product.onSale = true;
  }
});

console.log(products);

// 5- template literals
const userName = "Marcelo";
const age = 24;

console.log(`O nome do usuário é ${userName} e ele tem ${age} anos!`);

// 6- destructuring
const fruits = ["Maça", "Mamão", "Laranja"];

const [f1, f2, f3] = fruits;

console.log(f1, f3);

// outro exemplo
const productDetails = {
  name: "Monitor",
  price: 1199.99,
  category: "Eletro",
  color: "Preto",
};

const { name: productName, price, category, color } = productDetails;

console.log(
  `O nome do produto é ${productName}, ele custa R$${price} e é da cor ${color}`
);

// 7- spread operator
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];

console.log(a3);

// outro exemplo,mesclando
const a4 = [0, ...a3, 7];

console.log(a4);

// outro exemplo
const carName = { name: "Polo" };
const carBrand = { brand: "VW" };
const otherInfos = { km: 2800, price: 80000 };

const car = { ...carName, ...carBrand, ...otherInfos };

console.log(car);

// 8- classes
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

const shirt = new Product("Camisa", 250);

console.log(shirt);

console.log(shirt.productWithDiscount(10));
console.log(shirt.productWithDiscount(15));

// 9- Herança
class ProductWithAttributes extends Product {
  constructor(name, price, colors) {
    super(name, price);
    this.colors = colors;
  }

  showColors() {
    console.log("As cores são: ");
    this.colors.forEach((color) => {
      console.log(color);
    });
  }
}

const hat = new ProductWithAttributes("Chapéu", 129.99, [
  "Preto",
  "Azul",
  "Cinza",
]);

console.log(hat);

console.log(hat.name);

hat.showColors();