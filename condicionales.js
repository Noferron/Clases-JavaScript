//if(condicion){codigo que se ejecuta si la condicion es verdadera}
let edad = 18;
if (edad >= 18) {
    console.log("Eres mayor de edad");
}

//Si tiene 20€ aparezca un mensaje "eres rico"

let dinero=19;

if(dinero >=20){
    console.log(`Eres rico, tienes ${dinero} €`);
}
else{
    console.log(`Eres pobre, tienes ${dinero} €`);
    console.log("Eres pobre, tienes" + dinero + " €");
}

//Ejercicio
let grados = 22; 

if(grados >=30){
    console.log (`Muy caluroso, la temperatura es ${grados} ºC`);
}
else if (grados >=20){
    console.log (`Agradable, la temperatura es ${grados} ºC`);
}
else if (grados>=10){
    console.log (`Fresco, la temperatura es ${grados} ºC`);
}
else{
    console.log (`Muy frío, la temperatura es ${grados} ºC`);
}

//Operador ternario condicion ? valorSiVerdadero : valorSiFalso

edad>=18 ? console.log("Eres mayor de edad") : console.log("Eres menor de edad");
console.log ( edad>=18 ? "Eres mayor de edad" : "Eres menor de edad");

/*Ejercicio: Queremos entrar en la bibioteca. Puedes entrar si eres mayor de edad y tiene carnet.
Puedes entrar si eres menor y vas acompañado.  Declara tantas variables como necesites*/


let mayorEdad = false;
let carnet = false;
let padres = true;


if (mayorEdad ==true && carnet ==true){
    console.log("Puedes entrar");
}//No funciona bien, revisar
else if(mayorEdad ==false && carnet ==false){
    console.log("No puedes entrar");
}
else if((mayorEdad ==false && carnet== false) || padres==true){
    console.log("Puedes entrar");
}
else{
    console.log("No puedes entrar");
}





//Switch, ejercicio

let diaSemana ="miércoles";

switch (diaSemana){
    case "lunes": console.log("Lunes-Reunion de equipo");
    break;
    case "martes": console.log("Martes- Clases de JavaScript");
    break;
    case "miércoles": console.log("Miércoles- Proyecto personal");
    break;
    case "jueves": console.log("Jueves- Revisión de código");
    break;
    case "viernes": console.log("Viernes- Presentación");
    break;
    default: console.log("Fin de semana- Descanso!")
}


//Ejercicio Sistema de niveles

let jugador ="Snake";
let puntos = 10;
let moneda= "oro";
let nivel;

if(puntos>=2000){
    console.log("Maestro");
    nivel = "Maestro";
}
else if(puntos>=1000){
    console.log("Experto");
    nivel = "Experto";
}
else if(puntos>=500){
    console.log("Intermedio");
    nivel = "Intermedio";
}
else {
    console.log("Novato");
    nivel= "Novato";
}

switch(moneda){
    case "oro": console.log("+100 puntos");
    puntos = puntos + 100;
    break;
    case "plata": console.log ("+50 puntos");
    puntos = puntos + 50;
    break;
    case "bronce": console.log ("+25 puntos");
    puntos = puntos + 25;
    break;
    default: console.log("+0 puntos");
    puntos = puntos + 0;
}

console.log(`${jugador} - ${nivel} | Puntos: ${puntos} | Bono: ${moneda}`);


//Ejercicio Calculadora de notas

let estudiante = "Ana";
let examen = 7.5;
let trabajos = 8.2;
let asistencia = 65;
let notaFinal = (examen*0.6) + (trabajos*0.4);
let nota;

if(notaFinal >=9){
    console.log("Excelente");
}
else if (notaFinal >=7){
    console.log("Notable");
}
else if (notaFinal>=5){
    console.log("Aprobado");
}
else{
    console.log("Suspenso");
}

//Operador ternario donde indica si aprueba o suspende. 
notaFinal>=5 && asistencia >=80 ?  nota = "Aprobado" :  nota="Supenso";


let notaEntera = Math.floor(notaFinal); //Redondea hacia abajo la nota para ajutarlo a los casos de switch
let mensaje; 
switch (notaEntera){
    case 10: mensaje="Enhorabuena!";
    break;
    case 9: mensaje="Sigue así";
    break;
    case 8: mensaje="Sigue así";
    break;
    case 7: mensaje="Vas bien, necesitas un empujón";
    break;
    case 6: mensaje="Necesitas un empujón";
    break;
    case 5: mensaje="Vas bien, pero necesitas mejorar";
    break;
    case 4: mensaje="Estás cerca, aprieta un poco";
    break;
    case 3: mensaje="Necesitas ayuda?";
    break;
    case 2: mensaje="Tienes que estudiar más";
    break;
    case 1: mensaje="No has estudiado o no lo has comprendido";
    break;
    case 0: mensaje="Debes asistir a clase";
    break;
    default: mensaje="Nota no encontrada";
}


let decimales= notaFinal.toFixed(2);

console.log(`Nombre: ${estudiante}| Nota del examen: ${examen}|Trabajos: ${trabajos}|Asistencia: ${asistencia}|
    Nota final: ${decimales}|Mensaje: ${mensaje}`);