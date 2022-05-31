function calculaAltura(ladoA, ladoB, base){
    if(ladoA !== ladoB){
        console.log("Las medidas dadas no corresponden a un triángulo isosceles");
    }else{
        //Dividimos en a la mitad el triángulo, y sus lados serían a=base/2, c=ladoA b=altura a calcular
        //c^2 = a^2 + b^2 => b^2 = c^2 - a^2
        let a= base/2;
        let c = ladoA;
        return Math.sqrt((c*c)-(a*a));
    }
}
calculaAltura(5,5,6);
