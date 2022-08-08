//EcmaScript 11 - 2020

//Import dinámico -- llamar piezas de código
const button = document.getElementById("btn");
button.addEventListener("click",async function(){
    const module = await import("./file.js");
    module.hello();
});