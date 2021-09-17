  let valores = []
//faltou a validação dos dados
function listar(){
    var selecao = document.getElementById('selecao')
    let resultado = document.getElementById('resultado')
  
    let numero = document.getElementById('numero')
    let n = Number(numero.value)

    if(n>100|| n<=0){
        window.alert("Valor inválido!")}
        else{
        valores.push(n)

        var item = document.createElement('option')
        item.text = `Número ${n}`
        selecao.appendChild(item)
        var i=0
        while(i<valores.length)
       { resultado.innerHTML = ` ${valores}, `
      i++}
        
    }  }

    function carregar(){

      var soma = 0
      for (i=0; i<valores.length; i++){
       soma +=  Number(valores[i])   }

        valores.sort()
        var maior =(valores[(Number(valores.length))-1])
        //não coloca em ordem crescente de forma correta
        resultado.innerHTML += `<p>Temos ${Number(valores.length)} valores cadastrados</p>`
        resultado.innerHTML += `<p>O maior valor informado foi: ${Number(maior)} </p>`
        resultado.innerHTML += `<p>A soma de todos os valores é: ${Number(soma)} </p>`
    }

    