var line = document.getElementsByClassName("line")
const clear = document.getElementById("clear")
var resultado = document.getElementById("caixaDeTexto")
var conta = document.getElementById("conta")
var operacao = ""
var ultimo = null

function registrarNumeros(){

    if(conta.value=="Resultado:"){
        limpar()
    }
   
    digitado = ((event.target).value) //recebe valor


        if(digitado=="minus" || digitado=="plus" || digitado=="divided" || digitado=="times" || digitado=="equals"){

            if(ultimo=="minus" || ultimo=="plus" || ultimo=="divided" || ultimo=="times"){ //para n aceitar dois ++ seguidos
            window.alert("Ação inválida: inserir dois operadores em sequência. Por favor, tente novamente.")
            }else if (digitado=="minus"){
                conta.value += ` - ` 
                operacao += `-`
              
            }else if(digitado=="plus"){
                conta.value += ` + ` 
                operacao += `+`
              
            }else if(digitado=="times"){
                conta.value += ` x `
                operacao += `*` 
               
            }else if(digitado=="divided"){
                conta.value += ` / ` 
                operacao += `/`
            
            }
            
            resultado.value = `Valor digitado`
            
            } 
        
            if(resultado.value == `Valor digitado`){
                resultado.value=""
            }
    
            if(conta.value == `Conta`){
                conta.value=""
            }

            if(digitado =="dot" && ultimo != "dot"){
                if(ultimo==null){
                    conta.value += `0`
                    operacao += `0`
                    resultado.value += `0`
                }
                conta.value += `.`
                operacao += `.`
                resultado.value += `.`          //adicionei virgula   
            }else{
        
            if(digitado!="minus" && digitado!="plus" && digitado!="divided" && digitado!="times" && digitado!="dot"){
                conta.value += `${digitado}`
                operacao += `${digitado}`
                resultado.value += `${digitado}`            
            } 
console.log(operacao)
    }

   ultimo = `${digitado}`
}


function limpar(){
    resultado.value = `Valor digitado` 
    conta.value = `Conta` 
    operacao=''
    ultimo=null
}

function realizarConta(){

    var resultadoFinal= eval(operacao)
    resultado.value = resultadoFinal
    conta.value = "Resultado:"
   console.log(resultadoFinal)
    
}