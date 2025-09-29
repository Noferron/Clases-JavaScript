let n1 = 3;
let n2 = 3;
let suma = n1+n2;
console.log("El resultado de la suma es: " + suma);

n2= 9;
let suma2 = n1+n2;
console.log("El resultado de la suma es: " + suma2);

n2= 9;
let suma3 = (n1+n2)*2;
console.log("El resultado de la suma es: " + suma3);

n2= 9;
 suma = n1+n2;
console.log("El resultado de la suma es: " + suma);

n1;
n2;
let resta = n1-n2;
console.log("El resultado de la resta es: " + resta);

n1 = 3;
n2 = 8;
resta = n1-n2;
console.log("El resultado de la resta es: " + resta);

n1 = 3.14;
n2 = 1.25;
resta = n1-n2;
console.log("El resultado de la resta es: " + resta);

n1 = false;
n2 = true;
resta = n1-n2;
console.log("El resultado de la resta es: " + resta);

n1 = "hola";
n2 = "adios";
suma = n1+n2;
console.log("El resultado de la resta es: " + suma);

n1=4;
n2=5;
let multi= n1*n2;
console.log("El resultado de la multiplicación es: " + multi);


//Imagina que estas en una tienda y quieres comprar 3 camisetas que valen 15 euros cada una 
// y tiene tienen un descuento del 10%

let camiseta = 3;
let precio= 15;
let total= camiseta * precio;

console.log("El precio total es:  " + total + " €");

descuento= (camiseta*precio)*10/100;
total=(camiseta*precio)-descuento;

console.log("El descuento del 10% es un total de : " + descuento +" €");
console.log("El precio total es: " + total +" €");

camiseta *= 15;
console.log("No sé por qué sale bien " +camiseta);

let n3=10;
let n4=5;
suma=n4+=n3; //n4=n4+n3
console.log("El resultado de la suma es: " + suma);


//--juego--

let puntos=0;
let letra1="P";
let letra2="R";
let letra3="E";
let letra4="M";
let letra5="I";
let letra6="O";
let mensaje= letra1+letra2+letra3+letra4+letra5+letra6;
console.log("Puntos iniciales", puntos);
function muerteJugador(){
    if(puntos<0){
        puntos="Game over";
    }
    return puntos;
    
}

//El jugador mata un enemigo (+10 puntos) y consigue letra 5

puntos+=10;
console.log (muerteJugador(),"Después de enemigo pequeño: ", puntos, letra5);

//Bonus doble por combo

puntos*=2;
console.log(muerteJugador(),"Con bonus doble",puntos, letra4,letra1);

//Jugador mata jefe con bonus por combo (+50 puntos * 2)

puntos+=50;
puntos*=2;
console.log(muerteJugador(),"Puntos totales muerte jefe: ", puntos, letra3, letra6, letra2);
console.log("LO HAS CONSEGUIDO: ", mensaje);

//Jugador muere cayendo a un pozo (Penalización mitad de puntos)

puntos/=2;
console.log(muerteJugador(),"El jugador pierder la mitad de los puntos", puntos);

//Roban al jugador en un callejon (Pierde 50 puntos)

puntos-=50;
console.log(muerteJugador(),"Pierde puntos por robo: ", puntos);

//Jugador es absorbido por kirby (pierde 40 puntos)

puntos-=40;
console.log(muerteJugador(),"Jugador muere absorbido por Kirby: ", puntos);

//Jugador reaparece y coge un arma nueva (10 puntos)

/*puntos+=10;
console.log("Nueva arma conseguida: ", puntos);*/


//operadores de concatenacion
let mensaje2= "Has conseguido un ";
mensaje2+=letra1;
mensaje2+=letra2;
mensaje2+=letra3;
mensaje2+=letra4;
mensaje2+=letra5;
mensaje2+=letra6;
console.log(mensaje2);

//operadores de comparación

let n=5;
let m=5.0 ;

let b= n==m;
console.log("Esto es " + b);
 b= n===m;
console.log("Esto es " + b);

let v3=false;
let v4= false;
v4=!v3
console.log(v4);

//Ejercicio

/*Vamos a enviar un paquete
El peso máximo permitido para envío estándar es 20 kg.
Para usar envío exprés no puede superar los 10 kg.
Los paquetes que pesen menos de 2 kg tienen descuento especial.
Además, se quiere comprobar si el paquete es considerado pesado (más de 30 kg).
nuestro paquete 1 pesa 5 kilos */

let paquete=5;
let pesoMax=20;
let xpress=10;
let pesado=30;
let especial=2;


let puedoEnviar = paquete<=pesoMax;
console.log("Puedo enviar mi paquete? " + puedoEnviar);

let envioX= paquete>=xpress;

console.log("Puedo hacer envío xpress? " + envioX);

let especialEnvio = paquete>=especial;
console.log("Puedo hacer el envío especial?" + especialEnvio);

let pqPesado = paquete<=pesado;
console.log("Mi paquetes es pasado?" + pqPesado);

/*imagina esta situación:
tienes dinero (tengoDinero = true)
tienes permiso (tengoPermiso = false)
tus padres no están en casa (noEstanPadres = true)
La condición para poder salir es:
"Puedo salir si tengo dinero y tengo permiso, o si no están mis padres".
Escribe la expresión en JavaScript:
Evalúa la misma expresión con paréntesis:
Compara los resultados y explica por qué los paréntesis cambian (o no) la interpretación.*/

let tengoDinero = true;
let tengoPermiso = false;
let noEstanPadres = true;

let puedoSalir = tengoDinero || (tengoPermiso && noEstanPadres);

console.log ("Puedo salir?", puedoSalir);

//Con parentesis

puedoSalir = (tengoDinero && tengoPermiso) ||noEstanPadres;
console.log ("Puedo salir?", puedoSalir);

//Primero se evalua el && y luego el ||

puedoSalir = tengoDinero && tengoPermiso ||noEstanPadres;
console.log ("Puedo salir?", puedoSalir);

puedoSalir = (tengoDinero || tengoPermiso) && noEstanPadres;
console.log ("Puedo salir?", puedoSalir);

/*Ejercicio: Queremos entrar en la bibioteca. Puedes entrar si eres mayor de edad y tiene carnet.
Puedes entrar si eres menor y vas acompañado.  Declara tantas variables como necesites*/

let mayorEdad = false;
let carnet = true;
let padres = false;

let entrar = mayorEdad && carnet || padres;
console.log("Puedes entrar?", entrar);


mayorEdad = true;
carnet = true;
padres = false;

entrar = (mayorEdad && carnet) || padres;
console.log("Puedes entrar?", entrar);

mayorEdad = false;
carnet = false;
padres= true;

entrar = (mayorEdad && carnet) || padres;
console.log("Puedes entrar?", entrar);
