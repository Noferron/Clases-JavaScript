let miLista  = [];
let miLista2 = ["Ana", "López","López", 37,"Sevilla"];

console.log(miLista2[3]);

miLista2.length;
console.log(miLista2.length);

//Accede al último elemento
console.log(miLista2[miLista2.length -1]);

//Agrega elementos al final
miLista2.push("Luis","Juan",45);
console.log(miLista2);
//Agrega elementos al principio
miLista2.unshift("Córdoba",35,"Pepe");
console.log(miLista2);

//Borra el último elemento del array
let elemento= miLista2.pop(); //Podemos guardar en una variable "elemento" lo que borra el método
console.log(elemento);
console.log(miLista2);

//Borra el primer elemento del array
console.log(miLista2.shift());
console.log(miLista2);

//Verificar si es un array


//.indexOf para buscar elementos que hay o no en las arrays
console.log(miLista2.indexOf("López"));
console.log(miLista2.indexOf("Córdoba"));



//.includes

console.log(miLista2.includes("López"));
console.log(miLista2.includes("Córdoba"));

//Vaciar un array

miLista2 = [];
console.log(miLista2);
miLista2 = ["Ana", "López","López", 37,"Sevilla"];

//splice() -->Corta, pega y reemplaza elementos del array
let eliminados = miLista2.splice(0,2); //elimina 2 elementos desde la posición 0
console.log(miLista2);
console.log(eliminados); //Aquí podemos ver los elementos eliminados y es otro array
//splice() -->agregar elementos sin borrar

miLista2.splice(2,0,"Cádiz");
console.log(miLista2);

miLista2.splice(0,0,35,"Huelva");
console.log(miLista2);

//splice() --> Reemplazar elementos
miLista2.splice(1,1,"Almeria");
console.log(miLista2);

//forEach
miLista2.forEach(element =>{
    console.log("hola",element);
});

//.map
miLista2.map


