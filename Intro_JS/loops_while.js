let estudiantes =["Edwin", "Jamy", "Ferit", "Panchis"];

function saludarE(estudiante){
    console.log(`Hola, ${estudiante}`);
}

while (estudiantes.length>0){
    var estudiante = estudiantes.shift();
    saludarE(estudiante);
}