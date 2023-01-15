const yo = 
    {nombre: "Giancarlo", apellido:"Zanarini", edad: 22, altura: 184, eresDesarrollador:true}

const edad1 = yo.edad
console.log(edad1);

const ellos = [
    
    {nombre: "Martin", apellido:"Dominguez", edad: 24, altura: 174, eresDesarrollador:false},

    {nombre: "Lucia", apellido:"Ramos", edad: 21, altura: 168, eresDesarrollador:true}

]

ellos.push(yo)

console.log(ellos);

const datos_personales = [ellos]

ellos.sort((a,b) => a.edad - b.edad)
console.log(ellos);


