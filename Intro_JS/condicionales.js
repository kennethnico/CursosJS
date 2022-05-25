if (true){
    console.log("Hola");
}
//Hola
if (false){
    console.log("Hola");
}
//No hace nada

if (true){
    console.log("Hola");
}else{
    console.log("soy falso");
}

/*Votar cuando tenga 18 o más*/
let mayor=18;
if(mayor === 18){
    console.log("Puedes votar.");
}else if(mayor > 18){
    console.log("Puedes volver a votar.");
}else{
    console.log("Regresa cuando seas mayor.");
}
/*Operador ternario
* condition ? true:false;
* mayor === 18 ? true:false;
* */
let num = 1;
let resultado = num === 1 ? "Si, soy un 1":"No, no soy un 1";
console.log(resultado);
