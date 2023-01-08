

const persona = {
    nombre:"Giancarlo",
    edad: 22,
    desarrollador : true,
    "fecha_nacimiento":"25 Agosto",
     libro : {
        titulo:"El desarrollo",
        autor:"Da vinci",
        hoy : new Date(),
        url:"https://desarrollo.com"
    }
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.desarrollador);
console.log(persona.fecha_nacimiento);
console.log(persona.libro.hoy);
