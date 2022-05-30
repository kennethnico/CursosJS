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



