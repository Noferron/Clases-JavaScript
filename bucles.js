//while

let contador=1;

while(contador<=5){
    console.log("Estoy contando...");
    contador++;
}

while(contador<=10){
    console.log(`Número: ${contador}`);
    contador++;
}
//Recorrer array con bucles while
let colores=["rojo","amarillo","verde","morado","rosa","azul","blanco","negro"];

let posicion=0;
//posicion<colores.length -->sigue contando siempre que posicion sea menor que el número de elementos tenga el array
while(posicion<colores.length){
    //con este código sumamos 1 a posición para que nos muestre color 1, color 2, color 3,...
    //colores[posicion] indicamos que comience la array desde el 0 que es el valor de posicion
    console.log(`Color ${posicion+1}:${colores[posicion]}`);
    posicion++;
}


//Sumar número mientras sean menores de 20
let numero=1;
let suma=0;

while(suma < 20){
    suma= suma+ numero;
    console.log(`Sumamos ${numero}, total:${suma}`);
    numero++; 
}
console.log(`Hemos llegado a ${suma}`);

//Ejercicio

contador=10;

while(contador>0){
    
    console.log(contador);
    contador--;
}

//For

for(let i=0; i<=5; i++){
    console.log(i);
}

//Ejercicio for --> recorrer array

let animales=["perro","gato","pájaro"];

for(let conta=0; conta<animales.length;conta++){
    console.log(`Animal ${conta +1}: ${animales[conta]}`);
}

//Ejercicio for --> Sumar números con for

let listado=[10,20,30,40,50];
let suma2=0; //Aquí se guarda el valor de la suma de los elementos del array
for(let i=0; i<listado.length; i++){
    
    suma2+=listado[i]; //suma2= suma2+ el elemento de la posicion i del listado
    console.log(`Suma parcial: ${suma2}`);
}
console.log(`La suma total es: ${suma2}`);