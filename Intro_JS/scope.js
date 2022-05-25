const name ="Ken";

function scope_local(){
    let apellidos ="Nicolás Ruiz";
    return name+" "+apellidos;
}

console.log(scope_local());