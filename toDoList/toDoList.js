    var indice = Number(0)

const criarItem = () => {
    var conteudo = document.getElementById("newItem").value
    
    const item = document.createElement("label")
        item.classList.add("todo_item")
        item.innerHTML=`
        <input type="checkbox" class="feito${indice}" onclick="riscar()"> 
        <div class="divConteudo"> ${conteudo} </div>
        <input type="button" id="buttonItem" value="&#128465" onclick="deletar()">`
    
    document.getElementById('listaItens').appendChild(item)

    document.querySelector('input[type="text"]').value = ''
}

function verificar(){
    if(event.keyCode === 13){
        criarItem();
    }
}

function riscar(){
   feito = event.target
   // var feito = document.querySelector('input[type="checkbox"]')
    
if(feito.checked){
    feito.parentNode.style.backgroundColor = "rgb(0, 90, 90)";
    feito.nextElementSibling.style.backgroundColor = "rgb(0, 90, 90)";
    (feito.nextElementSibling).nextElementSibling.style.backgroundColor = "rgb(0, 90, 90)";
    feito.nextElementSibling.style.textDecoration = "line-through"
   
}else{
    feito.parentNode.style.backgroundColor = "teal";
    feito.nextElementSibling.style.backgroundColor = "teal";
    (feito.nextElementSibling).nextElementSibling.style.backgroundColor = "teal";
    feito.nextElementSibling.style.textDecoration='none';
}
}

function deletar(){
    var alvo = event.target
    alvo.parentNode.remove()
}