console.log("JS externo OK");

//ex01








function soma(){
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    console.log(n1);
    console.log(n2);
    let resultado = Number(n1) + Number(n2);
    console.log(resultado);

    let result= document.getElementById("result");
    result.value = resultado;

}

function subtracao(){
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
   
    let resultado = Number(n1) - Number(n2);
   
    let result= document.getElementById("result");
    result.value = resultado;
    
}

function multiplicacao(){
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
   
    let resultado = Number(n1) * Number(n2);
   
    let result= document.getElementById("result");
    result.value = resultado;
    
}

function divisao(){
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
   
    let resultado = Number(n1) / Number(n2);
   
    let result= document.getElementById("result");
    result.value = resultado;
    
}




