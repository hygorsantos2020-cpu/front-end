console.log("JS!")


function calculaMedia(){
let soma=0;
let media=0;
let valores = document.getElementById("valores").value;
console.log(valores);
let array_numeros = valores.split("/");
console.log(array_numeros.length);
let qtdeNum = array_numeros.length;
for(let i = 0; i < array_numeros.length; i ++){
 soma = soma + Number(array_numeros[i]);
 console.log(array_numeros[i]);
 
}
console.log(soma);
media = soma/qtdeNum;
console.log(media);
let p = document.getElementById("media");
p.innerText = "A media é : " + media;

}
