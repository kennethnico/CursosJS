//Formula para descuentos p * (100 - descuento)/100
/*let precio = document.getElementById("precioProducto").value;
let descuento =document.getElementById("descuentoProducto").value;*/
let costoFinal;

function precioOferta(){
    let precio = document.getElementById("precioProducto").value;
    let descuento =document.getElementById("descuentoProducto").value;
    costoFinal = (precio * (100-descuento))/100;
    console.log(costoFinal);
    document.getElementById("resultado_del_descuento").innerText = "El precio con descuento es: $"+costoFinal;
}

//costoFinal = precioOferta(precio,descuento);
//document.getElementById("resultado_del_descuento").innerText = costoFinal;