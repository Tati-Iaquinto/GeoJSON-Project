document.getElementById("saveLocation").addEventListener("click",validForm)

function validForm (){
    if(document.getElementById("name").value != "" && document.getElementById("lat").value != ""&& document.getElementById("lon").value !=""){
    alert("Posição cadastrada com sucesso!")
  }else{
    alert("Por favor, preencha os campos do formulário")
  }
}