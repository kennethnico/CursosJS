//Replace all
const myString = "JS es maravilloso, con JS puedo crear el futuro de la web";
const myStringR = myString.replace("JS","Python");
const myStringRA = myString.replaceAll("JS","Python");
console.log(myString);
console.log(myStringR);
console.log(myStringRA);

//Clase privada
class Message {
    show(val){
        console.log(val);
    }
}
const message = new Message();
message.show("Valor");

//Promise any
const promise1 = new Promise((resolve,reject) => reject ("1"));
const promise2 = new Promise((resolve,reject) => resolve ("2"));
const promise3 = new Promise((resolve,reject) => resolve ("3"));

Promise.any([promise1,promise2,promise3])
    .then(response => console.log(response));

//WeakRef element
class anyClass{
    constructor(element) {
        this.ref = new WeakRef(element);
    }
    //{...}
}

//Nuevo operadores lógicos
let isTrue = true;
let isFalse = false;
console.log (isTrue &&= isFalse);

let isTrue2 = true;
let isFalse2 = false;
console.log(isTrue2 ||= isFalse2);

let isTrue3 = true;
let isFalse3 = false;
console.log(isTrue3 ??= isFalse3);
