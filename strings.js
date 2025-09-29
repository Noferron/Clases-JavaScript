
//Strings, formas de concatenar strings 

let miNombre = "Roberto";
let edad= "32 años";
let hobby=" me encanta el karate";
let presentacion = console.log("Hola mi nombre es " + miNombre + ",tengo " + edad + "y" + hobby);

presentacion =console.log(`Hola mi nombre es ${miNombre}, tengo ${edad} y ${hobby}`);

//Has pedido [plato] con [bebida]. El precio total es [precio]€

let plato = "Calamares fritos";
let bebida= "Coca-cola";
let precio = 8.5;

let comida = console.log(`Has pedido ${plato} y una ${bebida}. 
El precio es ${precio}€ `);

let password = "Tengosueño";


//Métodos
//length indica la longitud en carateres de la variable
console.log(`Tu contraseña tiene ${password.length} caracteres`);

if(password.length >=8){
    console.log("Contraseña suficientemente larga");
} else {
    console.log("Contraseña demasiado corta");
}

//${variable[3]} expresa el caracter que se encuentre en la posición indicada dentro de los corchetes
//Es un array y busca la posición indicada y te lo muestra.
presentacion =console.log(`Hola mi nombre es ${miNombre[0]}, tengo ${edad [4]} y ${hobby}`);

//.toUpperCase() convierte el texto en mayuscula y .toLowerCase() convierte el texto en minúscula

let saludo = "Hola, buenos días";
presentacion =console.log(saludo.toUpperCase());
presentacion =console.log(saludo.toLowerCase());

//indexOf busca la palabra indicada y te dice donde está, si no existe el resultado es -1
console.log(saludo.indexOf("Hola"));
console.log(saludo.indexOf("días"));

//includes() es más simple que indexOf(), devuelve true o false
console.log(saludo.includes("Hola"));
console.log(saludo.includes("año"));

//replace sustituye una palabra
