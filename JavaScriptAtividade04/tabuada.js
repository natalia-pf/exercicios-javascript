function gerar() {
    var n = document.getElementById('numero')
    var t = document.getElementById('tabuada')

    if(n.value.length==0)
    {window.alert("Preencha o campo obrigatório!")
    }
        else{
            numero=Number(n.value)
            t.innerHTML=''
            for(var c=1; c<=10; c++){
                var item = document.createElement('option')
                item.text =`${numero} x ${c} = ${numero*c}`
                t.appendChild(item)
            }
            

        }




}