//EcmaScript 11 - 2020

//Import dinámico -- llamar piezas de código
const button = document.getElementById("btn");
button.addEventListener("click",async function(){
    const module = await import("./file.js");
    module.hello();
});

//Big int 2^53
const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

//Promise all Settle -
const promise1 = new Promise((resolve, reject) => reject("Reject"));
const promise2 = new Promise((resolve, reject) => resolve("Resolve"));
const promise3 = new Promise((resolve, reject) => resolve("Resolve 1"));

Promise.allSettled([promise1,promise2,promise3])
    .then(response =>console.log(response));

//Global This
console.log(window);
console.log(globalThis);

//Operador Nulo - nos devuelve su operando cuando el operador es Nulo
const foo0 = null ?? 'default string';
const foo1 = 'nonull' ?? 'default string';
console.log(foo0);
console.log(foo1);

//Optional Chaining
const user = {};
console.log(user?.profile?.email);
