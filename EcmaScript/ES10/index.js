//Aplanar arreglos
let array =[1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat(2));

//Flat Map
let array2 =[1,2,3,4,5];
console.log(array2.flatMap(value => [value, value*2]));

//Trim Start - Elimina espacios en blanco de string
let hello= "        Hello world        ";
console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());

//Optional catch binding - Pasar de forma opcional el Parametro de error al Catch
/*
Antes
try {
}catch(error){
error
}
Ahora
try{
}catch{
error
}
* */

//Construir un objeto a partir de un arreglo
let entries = [["name","Edwin"],["age",29]];
console.log(Object.fromEntries(entries));

let mySymbol = `My symbol`;
symbol = Symbol(mySymbol);
console.log(symbol.description);