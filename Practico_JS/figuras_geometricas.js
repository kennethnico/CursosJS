/*Funciones de figuras.html*/
/*****************************************************************************/
/*****************************************************************************/
//Cuadrado
/*
const ladoCuadrado = 5; //Medida en centimetros.
const perimetroCuadrado = ladoCuadrado*4;
const areaCuadrado = ladoCuadrado*ladoCuadrado;
console.group("Cuadrado")
console.log("Los lados del cuadrado miden: "+ladoCuadrado+" cms." );
console.log("El perimetro del cuadrado es: "+perimetroCuadrado+" cms." );
console.log("El área del cuadrado es: "+areaCuadrado+" cm^2." );
console.groupEnd();

//triángulo
const ladoUno = 6;
const ladoDos = 6;
const base = 4;
const altura =5.5;
const perimetroTriangulo = ladoUno+ladoDos+base;
const areaTriangulo = (base*altura)/2;
console.group("Triángulo");
console.log(
    "Los lados del triángulo miden: "
    +ladoUno
    +"cm, "
    +ladoDos
    +"cm y "
    +base
    +"cm"
);
console.log("La altura del triángulo es: "+altura+" cm" );
console.log("El perimetro del triángulo es: "+perimetroTriangulo+" cm" );
console.log("El área del triángulo es: "+areaTriangulo+" cm^2" );
console.groupEnd();

//Círculo
//Radio
const radioCirculo = 4;
//Diametro
const diametroCirculo = radioCirculo*2;
//Pi
const pi = 3.1415;
const pi2 = Math.PI;
//Circunferencia
const circunferenciaCirculo = pi2*diametroCirculo;
//Area Circulo
const areaCirculo = pi2*radioCirculo*radioCirculo;
console.group("Círculo");
console.log("El radio del circulo es: "+radioCirculo);
console.log("Pi es: "+pi+", el otro PI2 es: "+pi2);
console.log("El diámetro del circulo es: "+diametroCirculo);
console.log("La circunferencia del circulo es: "+circunferenciaCirculo);
console.log("El área del circulo es: "+areaCirculo);
console.groupEnd();
*/
/*****************************************************************************/
/*****************************************************************************/
//Usando funciones
//Cuadrado

function perimetroCuadrado(lado){
    return lado*4;
}
function  areaCuadrado(lado){
    return lado*lado;
}
//Triangulo
function perimetroTriangulo(ladoUno,ladoDos,base){
    return ladoDos+ladoUno+base;
}
function  areaTriangulo(base,altura){
    return base*altura;
}
//Circulo
function diametroCirculo(radio){
    return radio*2;
}
function circunferenciaCirculo(radio){
    return diametroCirculo(radio)*Math.PI;
}
function areaCirculo(radio){
    return Math.PI*radio*radio;
}

function calcularPerimetroCuadrado(){
    alert(perimetroCuadrado(parseInt(document.getElementById("ladoCuadrado").value)));
}
function calcularAreaCuadrado(){
    alert(areaCuadrado(parseInt(document.getElementById("ladoCuadrado").value)));
}