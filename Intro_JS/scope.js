var name ="Ken";

function scope_local(){
    var apellidos ="Nicolás Ruiz";
    return name+" "+apellidos;
}

console.log(scope_local());