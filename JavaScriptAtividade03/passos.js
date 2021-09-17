function executar(){
    window.alert("ENTROU")
    var n1 = document.getElementById("numeroI")
    var n2 = document.getElementById("numeroF")
    var n3 = document.getElementById("passos")

    if(n1.value.lengtht== 0 || n2.value.length == 0 || n3.value.length == 0){
        window.alert("Por favor, preencha todos os campos!")
    }
        else{

        var inicio = Number(n1.value)
        var fim = Number(n2.value)
        var passos= Number(n3.value)

        for(var c=inicio; c<fim; c+=passos){
            if(c<fim){
                resultado.innerHTML+=`${c}... `}
            }
            
            resultado.innerHTML+=`chegou!`
        }
    }
