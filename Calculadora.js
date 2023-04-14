function somar(){
    let numero1 = parseInt (document.getElementById("num1").value);
    let numero2 = parseInt (document.getElementById("num2").value);
    let resultado = numero1+numero2;
    //alert("O resultado da soma é igual a  "+resultado);
    document.getElementById("resultado").value = resultado
}

function subtrair(){
    let numero1 = parseInt (document.getElementById("num1").value);
    let numero2 = parseInt (document.getElementById("num2").value);
    let resultado = numero1 - numero2;
    alert("O resultado da subtração dos dois numeros é "+resultado);
}

function multiplicar(){
    let numero1 = parseInt (document.getElementById("num1").value);
    let numero2 = parseInt (document.getElementById("num2").value);
    let resultado = numero1 * numero2;
    alert("O resultado da subtração dos dois numeros é "+resultado);
}

function dividir(){
    let numero1 = parseInt (document.getElementById("num1").value);
    let numero2 = parseInt (document.getElementById("num2").value);
    let resultado = numero1 / numero2;
    alert("O resultado da subtração dos dois numeros é "+resultado);
}

function calcular(){
    var conta = parseInt (document.getElementsByClassName("btnCalc")[0].innerHTML); // o primeiro botão sempre começa por 0 (no nosso caso o somar)
    if(conta=="Somar"){
        let numero1 = parseInt (document.getElementById("num1").value);
        let numero2 = parseInt (document.getElementById("num2").value);
        let resultado = numero1+numero2;
        alert("O resultado da soma é igual a  "+resultado);
    }

    if(conta=="Subtrair"){
        let numero1 = parseInt (document.getElementById("num1").value);
        let numero2 = parseInt (document.getElementById("num2").value);
        let resultado = numero1 - numero2;
        alert("O resultado da subtração dos dois numeros é "+resultado);
    }

    if(conta=="Multiplicar"){
        multiplicar()
    }

    if(conta=="Dividir"){  //pode ser desse jeito tambem, pois -dividir()- é a função criada anteriormente
        dividir()
    }
    
}