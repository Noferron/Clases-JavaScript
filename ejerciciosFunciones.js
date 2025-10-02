//Pares del 2 al 30 (sin filtar)

function pares (){
    for(let i=2; i<=30; i=i+2){
        console.log(i);
    }
}
pares();

//Cuenta atrá del 10 al 1

function reves (){
    for(let atras=10; atras>=1; atras--){
        console.log(atras);
    }
}
reves();

//Mostrar 10 animales (solo recorrer)

function animales(){
   
    let ani= ["pato","gato","perro","gallina","elefante","ganso","serpiente","pez","rata","raton","escarabajo"]
    
     for(let cont=0 ;cont<=ani.length;cont++){
        console.log (`Animales: ${ani[cont]}`);
    }
}
animales();
//Tabla de multiplicar

function multiplicar(x){  //con x podemos poner cualquier numero y generará su tabla correspondiente
    for (let a=1;a<=10;a++){
        let multiplicacion= a*x;
        console.log(multiplicacion);
    }
   
}
multiplicar(6);
//Números en posiciones pares del array 

function arrayPar(){
    let array = ["a","b","c","d","e","f"];
    for(let b=0; b<array.length;b=b+2){
        console.log(`${array[b]}`);
    }
}
arrayPar();


//Sumar todos los elementos del array
