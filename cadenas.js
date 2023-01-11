let nombre = "Giancarlo"
let apellido = "Zanarini"
let estudiante = nombre.concat(" ",apellido)
let estudiante_mayus=estudiante.toUpperCase;
let estudiante_minus=estudiante.toLowerCase;
let cant_letras=estudiante.length
let primer_letra=nombre.charAt(0)
let ultima_pos_ape=apellido.lastIndexOf("i")
let ultima_letra=apellido.charAt(ultima_pos_ape)
let sin_espacios=estudiante.replace(/ /g,"")
let boolean=estudiante.includes(nombre)
console.log(boolean);