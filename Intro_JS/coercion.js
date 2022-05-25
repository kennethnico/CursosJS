/*Coreción implicita*/
let a = 4+ "7";
typeof a;
//"string" //Se concatena por el simbolo + //El resultado sería "47"
let b= 4 * "7";
typeof  b;
//"number" //JS deduce que queremos hacer una operación aritmética //El resultado sería 28

/*Coerción explícita*/
let a = 20;
let b = a + "";
typeof b;
//string //convertimos 20 a string concatenandolo con otra cadena.
let c=String(a);
typeof c;
//string //El método String convierte un número a cadena.
let d = Number(c);
typeof d;
//number //Convertimos una string a número con el método Number