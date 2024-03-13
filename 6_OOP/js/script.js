// continuação estudo de JS

// 1- métodos (executando função dentro do objeto)
const animal = {
  nome: "Fred",
  latir: function () {
    console.log("au au");
  },
};

console.log(animal.nome);

animal.latir();

// 2- Aprofundando em métodos

const pessoa = {
  nome: "Marcelo",

  getNome: function () {
    return this.nome;
  },
  setNome: function (novoNome) {
    this.nome = novoNome;
  },
};

console.log(pessoa.nome);
console.log(pessoa.getNome());

pessoa.setNome("Sung");

console.log(pessoa.getNome());

// 3 - prototype
const text = "asd";

console.log(Object.getPrototypeOf(text));

const bool = true;

console.log(Object.getPrototypeOf(bool));

const arr = [];

console.log(arr.length);

console.log(Object.getPrototypeOf(arr));

// 4- mais sobre prototype

const myObject = {
  a: "b",
};
console.log(Object.getPrototypeOf(myObject));

console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);

console.log(mySecondObject);

console.log(mySecondObject.a);

console.log(Object.getPrototypeOf(mySecondObject) === myObject);

// 5- classes básicas
const cachorro = {
  raca: null,
  patas: 4,
};
const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão";

console.log(pastorAlemao);

console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);

bulldog.raca = "Bulldog";

console.log(bulldog);

// 6- função como classe - função construtora
function criarCachorro(nome, raca) {
  const cachorro = Object.create({});

  cachorro.nome = nome;
  cachorro.raca = raca;

  return cachorro;
}

const fred = criarCachorro("Fred", "Dalmata");

console.log(fred);

const ayla = criarCachorro("Ayla", "Vira-lata");

console.log(ayla);

console.log(Object.getPrototypeOf(ayla));

// 7- funções como classe
function Cachorro(nome, raca) {
  this.nome = nome;
  this.raca = raca;
}

const husky = new Cachorro("Gudan", "Husky");

console.log(husky);

// 8- métodos na função construtora
Cachorro.prototype.uivar = function () {
  console.log("Auuuu!");
};

husky.uivar();

// 9- classes ES6
class CachorroClasse {
  constructor(nome, raca) {
    this.nome = nome;
    this.raca = raca;
  }
}

const loki = new CachorroClasse("Loki", "Schitzu");

console.log(loki);

// 10- mais sobre classes
class Caminhao {
  constructor(eixos, cor) {
    this.eixos = eixos;
    this.cor = cor;
  }
  descreverCaminhao() {
    console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);
  }
}

const scania = new Caminhao(6, "vermelha");
console.log(scania);

scania.descreverCaminhao();

Caminhao.prototype.motor = 4.0;

const c2 = new Caminhao(4, "preta");
console.log(c2);
console.log(c2.motor);

// 11- override

class Humano {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const marcelo = new Humano("Marcelo", 24);

console.log(marcelo);

Humano.prototype.idade = "Não definida";

// não interfere
console.log(marcelo.idade);

console.log(Humano.prototype.idade);

// 12- Symbol
class Aviao {
  constructor(marca, turbinas) {
    this.marca = marca;
    this.turbinas = turbinas;
  }
}

const asas = Symbol();
const pilotos = Symbol();

// Deixa fixo nas propriedades da classe
Aviao.prototype[pilotos] = 3;

// Deixa fixo nas propriedades da classe
Aviao.prototype[asas] = 2;

const boeing = new Aviao("Boeing", 10);

console.log(boeing);

console.log(boeing[asas]);

console.log(boeing[pilotos]);

// 13- getter and setter
class Post {
  constructor(titulo, descricao, tags) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.tags = tags;
  }
  get exibirTitulo() {
    return `Você está lendo: ${this.titulo}`;
  }
  set adicionarTags(tags) {
    const tagsArray = tags.split(", ");
    this.tags = tagsArray;
  }
}

const myPost = new Post("Algum post", "É um post sobre programação");

console.log(myPost);

console.log(myPost.exibirTitulo);

myPost.adicionarTags = "programação, Javascript, js";

console.log(myPost);

// 14- Herança

class Mamifero {
  constructor(patas) {
    this.patas = patas;
  }
}

class Lobo extends Mamifero {
  constructor(patas, nome) {
    super(patas, patas);
    this.nome = nome;
  }
}

const shark = new Lobo(4, "Shark");

console.log(shark);

// 15- instanceof
console.log(shark instanceof Lobo);

// False, pois estou verificando classes
console.log(Lobo instanceof Mamifero);

// True, pois estou verificando objeto
console.log(new Lobo(4, "teste") instanceof Mamifero);

// False, pois simplesmente não possuem relação
console.log(new Post("a", "b") instanceof Cachorro);
