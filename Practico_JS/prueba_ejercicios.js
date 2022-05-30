//Variables y Operaciones
let estudiante={
    nombre: "Edwin Kenet",
    apellido: "Nicolás Ruiz",
    user_platzi:"Kenneth Nico",
    edad: 28,
    email: "nico12345@gmail.com",
    mayo: true,
    dinero_ahorrado: 50,
    deudas: 20
}
console.log("Nombre completo :"+estudiante.nombre+" "+estudiante.apellido);
console.log("Dinero real : $"+String(estudiante.dinero_ahorrado-estudiante.deudas));

//Funciones
function miFuncion(nombre, apellido, nickname){
    return "Mi nombre es: "+nombre+" "+apellido+", pero prefiero que me digas: "+nickname;
}

console.log(miFuncion("Edwin Kenet","Nicolás", "Ken"));

//Condicionales
const tipoDeSuscripcion0 = "Basic";
switch (tipoDeSuscripcion0) {
    case "Free":
        console.log("Solo puedes tomar los cursos gratis");
        break;
    case "Basic":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        break;
    case "Expert":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        break;
    case "ExpertPlus":
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        break;
}

   /*Usando If, else if & else*/
const tipoDeSuscripcion1 = "Expert";
if(tipoDeSuscripcion1 === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}else if(tipoDeSuscripcion1 === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(tipoDeSuscripcion1 === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else{
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
    /*Usando solo if*/
const tipoDeSuscripcion2 = "ExpertPlus";
let respuesta = tipoDeSuscripcion2 === "Free" ? "Solo puedes tomar los cursos gratis" : tipoDeSuscripcion2 === "Basic" ? "Puedes tomar casi todos los cursos de Platzi durante un mes": tipoDeSuscripcion2 === "Expert" ? "Puedes tomar casi todos los cursos de Platzi durante un año" : "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año";

 /*Usando arrays y solo un condicional */
let suscripcion ="Free";
let tipoDeSuscripcion3 = ["Free", "Basic","Expert", "ExpertPlus"];
let mensaje = ["Solo puedes tomar los cursos gratis","Puedes tomar casi todos los cursos de Platzi durante un mes","Puedes tomar casi todos los cursos de Platzi durante un año","Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];
if (tipoDeSuscripcion3.indexOf(suscripcion) !== -1){
    console.log(mensaje[tipoDeSuscripcion3.indexOf(suscripcion)]);
}

//Ciclos
/*Replica el comportamiento de los siguientes ciclos for utilizando ciclos while*/
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
let car = 0;
while(car < 5){
    console.log("El valor de car es: " + car);
    car++;
}
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
let cont = 10;
while(cont >= 2){
    console.log("El valor de cont es: " + cont);
    cont--;
}

/*Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.*/
let userInt = parseInt(prompt("¿Cuánto es 2+2?"));
while (userInt !== 4){
    userInt = parseInt(prompt("¿Cuánto es 2+2?"));
}
console.log("Felicitaciones, sabes sumar");

//Listas
let numeros =["uno","dos","tres","cuatro"];
let objetoAutos=[{anio:2005, color: "rojo"}, {anio:1999, color: "azul"}, {anio:2002, color: "verde"}];
/*Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.*/
function retornaPrimerElemento(miArray){
    return miArray[0];
}
/*Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).*/
function elementos(miArray){
 for(let elemento of miArray){
    console.log("Elemento: " + elemento);
 }
}
/*Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).*/
function recorreObjetos(miObjeto){
    for(let objeto of miObjeto){
        console.log("OBje: "+objeto.anio);
        console.log("Año: "+objeto.anio);
        console.log("Color: "+objeto.color);
    }
}
console.log(retornaPrimerElemento(numeros));
elementos(numeros);
recorreObjetos(objetoAutos);