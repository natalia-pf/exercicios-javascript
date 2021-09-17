function carregar(){
    var msg = window.document.getElementById("mensagem")
    var foto = window.document.getElementById("manha")
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    //ative abaixo para testar qualquer hora desejada
    //var hora = 19
    //var minutos = 15

    if(hora>=0 && hora<13)
    {//console.log("Bom dia!")
    foto.src='manha.png'
    document.body.style.background = 'fcf8c3'}

        else if (hora>=13 && hora<18)
        {//console.log("Boa tarde!")
        foto.src = 'tarde.png'
        document.body.style.background = "#fcc7c3"
        }

            else{
              //  console.log("Boa noite")
                foto.src = 'noite.png'
                document.body.style.background = '#c3c9fc'
            }
    msg.innerHTML = `Agora são ${hora}:${minutos} horas`
}