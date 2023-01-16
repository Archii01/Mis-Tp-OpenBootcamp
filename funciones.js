function devolver_true(){
    return true
}

const f = devolver_true();
console.log (f)


function saludar(nombre){
    console.log(`Que haces ${nombre}`)
}

setTimeout (function(){
    saludar("Juancito")
},500)


function* generador(){
    let num = 0
    while(true){
        num++
        if (num ==10){
            return num
        }
        if (num % 2 ==0){
            yield num
        }
       
    }
}

const pares = generador();

console.log(pares.next().value)
console.log(pares.next().value)
console.log(pares.next().value)
console.log(pares.next().value)
console.log(pares.next().value)