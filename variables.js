let miMascota ="Perro";
let miColor ="Azul";
let miNumero = 7;

console.log(miMascota);
console.log(miColor);
console.log(miNumero);

miMascota ="Gato";
miColor="Rojo";
miNumero = 3;

console.log(miMascota);
console.log(miColor);
console.log(miNumero);

console.log("Mi mascota favorita es un " + miMascota + " de color "+ miColor + " y mi número favorito es " + miNumero );


// Ejemplo básico de typeof
let edad1 = 18;
let nombre = "Juan";
let esEstudiante = true;

console.log(typeof edad1);         // number
console.log(typeof nombre);       // string
console.log(typeof esEstudiante); // boolean 

let mascota ="perro";
console.log("Mi mascota es un " + mascota);
mascota ="gato";
console.log("Ahora mi mascota es " + mascota);

let edad=5;
console.log("Mi edad es " + edad);
edad = 6;
console.log("Ahora mi edad es " + edad);

let mayorDeEdad = true;
if (mayorDeEdad == true) {
    mayorDeEdad = "Sí, así es";
}
console.log("Soy mayor de edad? " + mayorDeEdad);
mayorDeEdad = false;
console.log("Ahora soy mayor de edad? " + mayorDeEdad);

let miEdad = 15;
console.log(miEdad);

let miAltura = 1.65;
console.log(miAltura);

 miEdad = 16;
miAltura = 1.70;

console.log(miEdad);
console.log(miAltura);

console.log("Tengo "+miEdad + " años");

//Strings

let miNombre = "Roberto";

let presentacion = console.log("Hola mi nombre es " + miNombre);

presentacion =console.log(`Hola mi nombre es ${miNombre}`);
