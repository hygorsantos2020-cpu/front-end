
let botaoExe01;

botaoExe01 = document.getElementById("btnExe01");
botaoExe01.addEventListener("click", mostrarMensagem);

function mostrarMensagem() {
    let nomeExe01, respostaExe01;

    nomeExe01 = document.getElementById("nomeExe01").value;
    respostaExe01 = document.getElementById("pExe01");

    if (nomeExe01 != "") {
        respostaExe01.innerText = "Olá " + nomeExe01 + "! Seja bem-vindo(a)!";
    } else {
        respostaExe01.innerHTML = "<span style='color: red; font-size: 25px;'>Digite seu nome!</span>";
    }
}



let btnExe02, paragrafoExe02;

btnExe02 = document.getElementById("btnExe02");
paragrafoExe02 = document.getElementById("pExe02");

btnExe02.addEventListener("click", estiloNovo);

function estiloNovo() {
    let textoBotao;

    textoBotao = btnExe02.innerText;

    if (textoBotao == "Alterar Estilo") {
        paragrafoExe02.style.color = "white";
        paragrafoExe02.style.backgroundColor = "darkblue";
        paragrafoExe02.style.fontSize = "30px";

        btnExe02.innerText = "Estilo Original";
    } else {
        paragrafoExe02.style.color = "";
        paragrafoExe02.style.backgroundColor = "";
        paragrafoExe02.style.fontSize = "";

        btnExe02.innerText = "Alterar Estilo";
    }
}




let botoesCor;

botoesCor = document.querySelectorAll(".cor");

for (let i = 0; i < botoesCor.length; i++) {
    botoesCor[i].addEventListener("click", trocarCor);
}

function trocarCor() {
    let cor;

    cor = this.dataset.cor;
    document.body.style.backgroundColor = cor;
}




document.getElementById("btnCriar").addEventListener("click", criarParagrafo);
document.getElementById("btnRemover").addEventListener("click", removerParagrafo);

function criarParagrafo() {
    let p, textoParagrafo;

    p = document.createElement("p");

    textoParagrafo = prompt("Digite um texto para o parágrafo:");

    if (textoParagrafo != "" && textoParagrafo != null) {
        p.innerText = textoParagrafo;
        document.getElementById("conteudo").appendChild(p);
    } else {
        alert("Você não digitou nenhum texto.");
    }
}

function removerParagrafo() {
    let conteudo;

    conteudo = document.getElementById("conteudo");

    if (conteudo.lastElementChild) {
        conteudo.removeChild(conteudo.lastElementChild);
    } else {
        alert("Não existe mais parágrafo para ser excluído!");
    }
}





document.getElementById("imgExe05").addEventListener("click", trocarImagem);



function trocarImagem() {
    let imagem = document.getElementById("imgExe05");

    if (imagem.style.visibility == "hidden") {
        imagem.style.visibility = "visible";
    } else {
        imagem.style.visibility = "hidden";
    }
}



let seletor;

seletor = document.getElementById("selectExe06");
seletor.addEventListener("change", trocarVeiculo);

function trocarVeiculo() {
    let valorSelecionado, foto, figura;

    valorSelecionado = seletor.value;
    foto = document.getElementById("fotoExe06");

    switch (valorSelecionado) {
        case "car":
            figura = "carro.jpg"
            break;

        case "moto":
            figura = "moto.jpg"
            break;

        case "bus":
            figura = "onibos.jpg"
            break;

        case "bike":
            figura = "bike.jpg"

        default:
            figura = "";
            break;
    }

    foto.src = figura;
}



let caixa;

caixa = document.getElementById("divExe07");

caixa.addEventListener("mouseover", entrou);
caixa.addEventListener("mouseleave", saiu);

function entrou() {
    caixa.style.backgroundColor = "red";
    caixa.style.transform = "scale(1.2)";
    caixa.style.borderRadius = "50px";
}

function saiu() {
    caixa.style.backgroundColor = "orange";
    caixa.style.transform = "scale(1)";
    caixa.style.borderRadius = "0px";
}



let imgExe08, txtExe08;

imgExe08 = document.getElementById("imgExe08");
txtExe08 = document.getElementById("textoExe08");


imgExe08.addEventListener("mouseover", mostrarTexto);
imgExe08.addEventListener("mouseout", esconderTexto);

function mostrarTexto() {
    txtExe08.style.color = "red";
    txtExe08.style.fontSize = "30px";
    txtExe08.innerText = "Nokia tijolão!";
}

function esconderTexto() {
    txtExe08.style.color = "";
    txtExe08.style.fontSize = "";
    txtExe08.innerText = "";
}



let btnExe09;

btnExe09 = document.getElementById("btnExe09");
btnExe09.addEventListener("click", criarLista);

function criarLista() {
    let qtd, lista;

    qtd = Number(document.getElementById("qtdExe09").value);
    lista = document.getElementById("listaExe09");

    lista.innerHTML = "";

    if (qtd > 0) {
        for (let i = 1; i <= qtd; i++) {
            let texto, li;

            texto = prompt("Digite o texto para o item " + i + ":");

            li = document.createElement("li");
            li.innerText = texto;

            lista.appendChild(li);
        }
    } else {
        alert("Digite uma quantidade de itens válida.");
    }
}



let produtos;

produtos = document.querySelectorAll(".produto");

for (let i = 0; i < produtos.length; i++) {
    produtos[i].addEventListener("click", adicionarProduto);
}

let totalExe10 = 0;

function adicionarProduto() {
    let descricao, preco, lista, item;

    descricao = this.dataset.descr;
    preco = Number(this.dataset.preco);

    lista = document.getElementById("listaProdutos");

    item = document.createElement("li");
    item.innerText = descricao + " - R$ " + preco.toFixed(2);

    lista.appendChild(item);

    totalExe10 = totalExe10 + preco;

    document.getElementById("valorCompraExe10").innerText = "R$ " + totalExe10.toFixed(2);
}




let produtosDesafio;
let carrinho = [];

produtosDesafio = document.querySelectorAll(".produtoDesafio");

for (let i = 0; i < produtosDesafio.length; i++) {
    produtosDesafio[i].addEventListener("click", selecionarProduto);
}

function selecionarProduto() {
    let descricao, preco, posicaoProduto;

    descricao = this.dataset.descr;
    preco = Number(this.dataset.preco);

    posicaoProduto = carrinho.findIndex(function(produto) {
        return produto.descricao == descricao;
    });

    if (posicaoProduto == -1) {
        let quantidade;

        quantidade = Number(prompt("Digite a quantidade de " + descricao + ":"));

        if (quantidade > 0) {
            carrinho.push({
                descricao: descricao,
                preco: preco,
                quantidade: quantidade
            });

            this.classList.add("selecionado");
        } else {
            alert("Quantidade inválida.");
        }
    } else {
        carrinho.splice(posicaoProduto, 1);
        this.classList.remove("selecionado");
    }

    atualizarListaDesafio();
}

function atualizarListaDesafio() {
    let lista, total;

    lista = document.getElementById("listaDesafio");
    total = 0;

    lista.innerHTML = "";

    for (let i = 0; i < carrinho.length; i++) {
        let item, subtotal;

        subtotal = carrinho[i].preco * carrinho[i].quantidade;

        item = document.createElement("li");
        item.innerText = carrinho[i].descricao +
            " - Quantidade: " + carrinho[i].quantidade +
            " - Subtotal: R$ " + subtotal.toFixed(2);

        lista.appendChild(item);

        total = total + subtotal;
    }

    document.getElementById("totalDesafio").innerText = "R$ " + total.toFixed(2);
}