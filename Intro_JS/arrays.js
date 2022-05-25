let frutas =["Fresa","Manzana","Piña","Banana"];
console.log(frutas.length) //Tamaño del arreglo
console.log(frutas);
frutas.push("Kiwi"); //Inserta un elemento hasta el final del arreglo.
console.log(frutas);
frutas.pop(); //Elimina el último elemento del arreglo.
console.log(frutas);

console.log("Enlistemos a las frutas:");
for (i=0;i<frutas.length;i++){
    console.log(frutas[i]);
}