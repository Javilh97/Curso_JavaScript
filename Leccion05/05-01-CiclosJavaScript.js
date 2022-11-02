//Ciclo while
/*
let contador = 0;

while(contador < 3){
    console.log(contador);
    contador++;
}
*/

//Ciclo do while
/*
let contador = 0;

do {
    console.log(contador);
    contador++;
}while(contador < 9);
console.log("Fin ciclo do while");
*/

//Ciclo for
/*
for (contador = 0; contador < 3; contador++){
    console.log(contador);
}
*/

//Break
/*
for(let contador = 0; contador <= 10; contador++){
    if(contador % 2 == 0){
        console.log(contador);
        break;
    }
}

console.log("Fin del ciclo for");
*/

//Continue  --   Etiquetas
inicio:
for (let contador = 0; contador <= 10; contador++){
    if(contador % 2 !== 0){
        continue inicio; //Ir a la siguiente iteracion
    }
    else{
        console.log(contador);
    }
}
















