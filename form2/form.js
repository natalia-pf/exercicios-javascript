function finalizar(){

    var name = document.getElementById("name").value
    var date = new Date(document.getElementById("date").value)
    var email0 = document.getElementById("email").value
    var uf = document.getElementById("selectUf").value
    var password = document.getElementById("password").value

    var nome = String(name)
    var email = String(email0)
    var estado = String(uf)
    var senha = String(password)

    var data_atual = new Date()

    var age = Number(((data_atual.getFullYear() - date.getFullYear()) - 1))

    if(data_atual.getMonth() > date.getMonth()){
        age++
    }else if(data_atual.getMonth() == date.getMonth()){
        if(data_atual.getDay() >= date.getDay()){
            age++
        }
    }

    var showName = document.getElementById("showName")
    var showPassword = document.getElementById("showPassword")
    var showEmail = document.getElementById("showEmail")
    var showUf = document.getElementById("showUf")
    var showAge = document.getElementById("showAge")


    showName.innerHTML= `Nome: ${nome}`
    showEmail.innerHTML=`Email: ${email}`
    showPassword.innerHTML=`Senha: ${senha}`
    showUf.innerHTML=`Estado: ${estado}`
    showAge.innerHTML=`Idade: ${age}`


}