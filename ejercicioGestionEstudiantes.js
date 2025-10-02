const estudiantes=[
    {
        id:1,
        nombre:"Ana López",
        edad:20,
        curso:"JavaScript",
        nota:[8.5,9.0,7.5],
        activo:true,
        email:"ana@gmail.com",
        
    },
    {
        id:2,
        nombre:"Carlos Martín",
        edad:22,
        curso:"JavaScript",
        nota:[7.0,8.5,9.0],
        activo:true,
        email:"carlos@gmail.com",
    },
    {
        id:3,
        nombre:"Elena García",
        edad:19,
        curso:"JavaScript",
        nota:[9.5,9.0,9.5],
        activo:false,
        email:"elena@gmail.com",
    }
    
];

console.log(estudiantes);

//Queremos saber quien sigue en el curso
let aqui;
function continuidad(){
    
    for(let i=0; i<estudiantes.length; i++){
        let est=estudiantes[i];
        if(est.activo==true){
            aqui = "Sigue cursando";
            
        }
        else{
            aqui= "No cursa";
          
        }
        console.log(aqui);
    }
    //return aqui;
    
}
console.log(continuidad());

//Lista de estudiantes
for (let i= 0; i<estudiantes.length; i++){
    const est =estudiantes[i];
    console.log("👤 " + est.nombre + " (" + est.edad + " años) - " + est.email);
}

//Promedios

for(let i=0;i<estudiantes.length;i++){
    const est=estudiantes[i];
    let suma =0;
    
    for (let j=0;j<est.nota.length;j++){
        suma+=est.nota[j];
    }
    const promedio=suma/est.nota.length;
    console.log (est.nombre + ":" + promedio.toFixed(2));
}

//