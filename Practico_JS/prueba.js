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
    console.log("Mi nombre es: "+nombre+" "+apellido+", pero prefiero que me digas: "+nickname);
}

console.log(miFuncion("Edwin Kenet","Nicolás", "Ken"));