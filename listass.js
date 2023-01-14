const lista_compra = ["arroz", "pescado", "mandarinas", "queso", "bifes"]
lista_compra.push("Aceite de girasol")
console.log(lista_compra);
lista_compra.pop();
console.log(lista_compra);

////

const peliculas = [
    {titulo: "Piratas del caribe", director: "Martins", fecha: 2001},
    {titulo: "Escape", director: "Dominico", fecha: 2002},
    {titulo: "Un paso", director: "Jhonson", fecha: 2011}
]

peliculas_2010= peliculas.filter(peli=>peli.fecha>2010)
console.log(peliculas_2010);

directores = peliculas.map(nombre =>nombre.director)
console.log(directores);

titulos = peliculas.map(peli=>peli.titulo)
console.log(titulos);

const directores_y_titulos=titulos.concat(directores);
console.log(directores_y_titulos);

const directores_y_titulos2=[...titulos, ...directores]
console.log(directores_y_titulos2);