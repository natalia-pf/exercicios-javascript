function confirmar(){
    var data = new Date();
    var anoA = Number.parseInt(data.getFullYear());
    var anoF = document.getElementById('anoformulario');
    var resultado = document.getElementById("resultado");
    var sexoF = document.getElementsByName('sexo') //masc e fem
    var img = document.createElement('img') //em um programa real deve-se adicionar mais fotos
    if(anoF.value==0){
        window.alert("Por favor, preencha os campos obrigatórios!")
    }
        else if(anoF.value<1890 || anoF.value>anoA){
            window.alert("Insira um ano válido!")
        }
            else if(anoF.value>1899 && anoF.value<=anoA){
                var idade = anoA - anoF.value 
                var genero = ''
                if(sexoF[0].checked){
                    genero = 'masculino'
                        if(idade<20){
                            img.setAttribute('src', 'meninoE.png')
                        }
                        else if(idade<50){
                            img.setAttribute('src', 'adultoE.png')
                        }
                        else{
                            img.setAttribute('src', 'idosoE.png')

                        }

                }
                else{
                    genero = 'feminino'

                    if(idade<20){
                        img.setAttribute('src', 'sofia.png')
                    }
                    else if(idade<50){
                        img.setAttribute('src', 'adultaE.png')
                    }
                    else{
                        img.setAttribute('src', 'idosaE.png')
                    }
                }
                resultado.innerHTML = `Foi detectada uma pessoa do sexo ${genero} de ${idade} anos de idade! </br>`

                resultado.appendChild(img)
            }
}