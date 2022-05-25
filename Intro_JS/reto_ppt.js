let pi = "piedra";
let pa ="papel";
let ti = "tijeras";

function game(sel1,sel2){
    if (sel1 === sel2){
        return "Empate";
    }else if(((sel1 === r)&&(sel2 === "papel"))||((sel1 === "papel")&&(sel2 =="tijeras"))||((sel1 == "tijeras")&&(sel2 === "piedra"))){
        return "Gana Jugador 2";
    }else{
        return "Gana Jugador 1";
    }
}

console.log(game(r,r));