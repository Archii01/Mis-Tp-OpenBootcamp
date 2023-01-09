let j=0
let factor=1
let res_final=3628800
calculadora :while(factor!=res_final){
    factor=facto*(j+1)
    if(j<10){
        j++
    }
    if(j>10){
        break calculadora
    }
    console.log("break",factor)
}