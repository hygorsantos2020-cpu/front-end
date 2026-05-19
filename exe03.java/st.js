function verifiMaior() {

    let valores = document.getElementById("valores").value;

    let numeros = valores.split(",");

    let n1 = parseFloat(numeros[0]);
    let n2 = parseFloat(numeros[1]);
    let n3 = parseFloat(numeros[2]);

    let maior = n1;

    if (n2 > maior) {
        maior = n2;
    }

    if (n3 > maior) {
        maior = n3;
    }

    document.getElementById("media").innerHTML =
        "O maior número é: " + maior;
}