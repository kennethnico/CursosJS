//Formula para descuentos p * (100 - descuento)/100
let precio;
let descuento;
let costoFinal;

function precioOferta(precio,descuento){
    return (precio * (100-descuento))/100;
}