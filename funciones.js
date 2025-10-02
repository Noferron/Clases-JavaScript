function nombreFunccion(){
    console.log("hola");
}
nombreFunccion();

function hola(nombre,edad){
    console.log("Hola " + nombre);
    console.log("Tienes " + edad + " años");
}
hola("Roberto",32);

function suma(a="Falta completa campo",b="Error"){
    console.log(a+b);
}

suma(37.5,2.5);
suma(undefined,5);

//Valores por defecto

function saludo(nombre="Amigo", saludo="Hola"){
    console.log("Hola " +nombre);
}
saludo();
saludo("María");


//Ejercicio sin parámetros
function saludar(){
    console.log("Hola mundo!");
}

saludar();

//Ejercicio con parámetros

function saludarPersona(nombre="Roberto"){
    console.log(`Hola ${nombre}`);
}
saludarPersona();

//Ejercicio función que devuelve resultado

function sumar(num1,num2){
    console.log(num1+num2);
}

sumar(2,6);

//Funcción calculadora de área

function calcularArea(ancho,alto){
    return ancho*alto;
}
let solucion= (calcularArea(3,4));
console.log(solucion);


//Funcion que devuelve algo

function resta(a,b){
    return a-b;
}

let resultado=resta(4,2);
console.log(resultado);

//Funcion calculadora

function calcular(a,b,c="sumar"){
    //variable donde ralizamos las operaciones y se guarda el resultado
    let resultado;
    //si el parámetro C es identico a "sumar", se ejecuta esta condición
    if(c==="sumar"){
        resultado=a+b;
    }
    //si el parámetro C es identico a "multiplicar", se ejecuta esta condición
    else if (c==="multiplicar"){
        resultado=a*b;
    }
    //si el parámetro C es identico a "dividir", se ejecuta esta condición
    else if(c==="dividir"){
        resultado=a/b;
    }
    //según la condición que se cumpla mostrará un resultado
    console.log("Resultado: " +resultado);
    return resultado;
}

calcular(10,5);
calcular(10,5,"multiplicar");
calcular(10,5,"dividir");

//Ejercico validador de edad

function esMayorDeEdad(edad){
    if(edad>=18){
        let mayor=true;
        return mayor;
    }
    else if(edad<=18){
        let mayor=false;
        return mayor;
    }
    
}

console.log(esMayorDeEdad(15));

//Función flecha
const doblar =(numero)=> {
    return numero * 2;
}
console.log(doblar(5));
//forma abreviada
const doblars=(numero)=>numero*2;
console.log(doblars(2));
