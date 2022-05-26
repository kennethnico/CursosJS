/*Template de una objeto
* Podría funcionar con los eventos de Conatrib
* */
function addEvent(fecha,nombre,encargado){
    this.fecha = fecha;
    this.nombre = nombre;
    this.encargado = encargado;
}
let eventoNuevo= new addEvent("12/Mayo/2022","Evento 1","Encargado 1");
let eventoNuevo2= new addEvent("15/Mayo/2022","Evento 2","Encargado 2");
let eventoNuevo3= new addEvent("20/Mayo/2022","Evento 3","Encargado 3");
