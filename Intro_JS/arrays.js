let frutas =["Fresa","Manzana","Piña","Banana"];
//LENGTH
console.log(frutas.length) //Tamaño del arreglo
console.log(frutas);
//PUSH
frutas.push("Uvas","Kiwi"); //Inserta un elemento hasta el final del arreglo.
console.log(frutas);
//POP
frutas.pop(); //Elimina el último elemento del arreglo.
console.log(frutas);
//UNSHIFT
frutas.unshift("Frutotas"); //Agrega un elemento al inicio del Array.
console.log(frutas);
//SHIFT
//frutas.shift("Uvas");
//console.log(frutas);
//INDEXOF
let indiceF = frutas.indexOf("Piña");
console.log(indiceF);

console.log("Enlistemos a las frutas:");
for (i=0;i<frutas.length;i++){
    console.log(frutas[i]);
}