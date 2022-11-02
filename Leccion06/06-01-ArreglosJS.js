//let autos = new Array('BMW','Mercedes Benz', 'Volvo');

const autos = ['BMW','Mercedes Benz','Volvo'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i <= autos.length; i++){
    console.log(autos[i]);
}


autos[1] = 'MercedesBenz';
console.log(autos[1]);

//Agregar elementos al arreglo con la funcion push
autos.push('Audi');
console.log(autos);

//Agregar elementos al arreglo mediante el largo del arreglo
console.log(autos.length);
autos[autos.length] = 'Cadillac';

console.log(autos);
//Agregar elementos al arreglo mediante el indice
autos[6] = 'Porshe';
console.log(autos);

//como preguntar si es un arreglo
console.log(typeof autos);

console.log(Array.isArray(autos));

console.log(autos instanceof Array);