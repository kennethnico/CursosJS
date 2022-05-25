console.log(miNombre);
miNombre = "Edwin Kenet";
//undefined

let myName = undefined;
console.log(myName);
myName="Edwin Kenet";
// undefined
// Edwin Kenet

/**Hoisting de funciones**/
hey(); //Mandamos a llamar la función.
function hey(){ //Declaramos la función.
    console.log("Hola compañero " + myNName); //¿Qué imprime?
}
let myNName ="Edwin";
// Hola compañero undefined
// Las funciones se procesan antes de ejecutar cualquier código
//Pero las variables se declaran después.
//Las variables se declaran hasta arriba, como buena práctica.