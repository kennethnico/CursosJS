let Ken={
    nombreCompleto: "Edwin Kenet Nicolás Ruiz",
    edad: "29 años",
    peso: "50kg",
    detalleKen: function (){
        console.log(`Person: ${this.nombreCompleto}, ${this.edad}`);
    }
};
console.log(Ken);
console.log(Ken.edad);
console.log(Ken.nombreCompleto);
console.log(Ken.peso);
console.log(Ken.detalleKen());