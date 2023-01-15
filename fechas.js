const fecha_hoy = new Date()
console.log(fecha_hoy);

const fecha_du_nacimento = new Date("August 25 2000")
console.log(fecha_du_nacimento.toLocaleDateString());

console.log(fecha_hoy.getTime() === fecha_du_nacimento.getTime());

const dia = fecha_du_nacimento.getDate()
console.log(dia);

const mes = fecha_du_nacimento.getMonth()+1
console.log(mes)

const anio = fecha_du_nacimento.getFullYear()
console.log(anio)