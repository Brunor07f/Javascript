function calcularMedia(){
    let nome = document.getElementById("nomeAluno").value
    let nota1 = parseFloat(document.getElementById("nota1").value )
    let nota2 = parseFloat(document.getElementById("nota2").value)
   
    let media = (nota1 + nota2)/2
   
    if(media>=7){
        document.getElementById("labelResultado").innerHTML = "O aluno "+nome+" está aprovado, sua média é = "
        document.getElementById("resultado").value = media
    }else if(media<5){
        document.getElementById("labelResultado").innerHTML = "O aluno "+nome+" está reprovado, sua média é = "
        document.getElementById("resultado").value = media
    }else{
        document.getElementById("labelResultado").innerHTML = "O aluno "+nome+" está de recuperação, sua média é = "
        document.getElementById("resultado").value = media
    }



}