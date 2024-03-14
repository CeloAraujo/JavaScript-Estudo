// 1- Movendo-se pelo DOM
console.log(document.body);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1].textContent);

// 2-Selecionando por tag
const listItens = document.getElementsByTagName("li")

console.log(listItens)