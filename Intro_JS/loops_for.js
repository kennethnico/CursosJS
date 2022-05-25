/*
* for - recorre un bloque de código varias veces
* for/in - recorre las propiedades de un objeto
* for/of - recorre los valores de un objeto iterable
* while - recorre un bloque de código mientras se cumple una condición específica
* do/while - también recorre un bloque de código mientras se cumple una condición específica*/
let estudiantes =["Edwin", "Jamy", "Ferit", "Panchis"];

function saludarE(estudiante){
    console.log(`Hola, ${estudiante}`);
}
for(let i=0;i<estudiantes.length;i++){
    saludarE(estudiantes[i]);
}
for (var estudiante of estudiantes){
    saludarE(estudiante);
}