/* Troca do texto do botão */

let codificar = document.getElementById('codificar');
let decodificar = document.getElementById('decodificar');
let botao = document.getElementById('botao');

function trocaTexto () {
  if (decodificar.checked) {
    botao.innerText = "decodificar";
  } else if (codificar.checked) {
    botao.innerText = "codificar";
  }
}

/* Mostrar ou esconder a opção inclemento */
let cesar = document.getElementById('cesar');
let base64 = document.getElementById('base64');
let incrementar = document.getElementById('incrementar');

function mostraIncremento() { 
  incrementar.style.display = "block"; 
}

function escondeIncremento() {
  incrementar.style.display = "none";
}

cesar.addEventListener('change', mostraIncremento);
base64.addEventListener('change', escondeIncremento);

let resposta = document.getElementById('resultado');
let incremento = parseInt(document.getElementById('incrementacao').value);
console.log(incremento);
console.log(typeof incremento);

botao.addEventListener('click', function(event) {
  event.preventDefault();
  opcaoEscolhida();
});

/* Calculos */

function codificarCesar(mensagem) {
  mensagem = mensagem.split("");
    console.log(mensagem);
  let mensagemAtual = mensagem.map((valor) => valor.charCodeAt());
    console.log(mensagemAtual);
  let mensagemInclemento = mensagemAtual.map((valor) => valor+incremento);
    console.log(mensagemInclemento);
  let mensagemNova = mensagemInclemento.map((valor) => String.fromCharCode(valor)).join("");
    console.log(mensagemNova);
      return mensagemNova;
    }

function decodificarCesar(mensagem) {
  mensagem = mensagem.split("");
let mensagemAtual = mensagem.map((valor) => valor.charCodeAt())
let mensagemInclemento = mensagemAtual.map((valor) => valor-incremento);
let mensagemNova = mensagemInclemento.map((valor) => String.fromCharCode(valor)).join("");
  console.log(mensagemNova);
    return mensagemNova;
  }

function opcaoEscolhida () {
  let mensagem = document.getElementById('mensagem').value;
   console.log(mensagem);
     if (codificar.checked) {
      if (cesar.checked) {
      console.log("Codificar Cesar")
          resposta.innerText = codificarCesar(mensagem);
      } else {
          console.log("Codificar Base64")
          resposta.innerText = btoa(mensagem);
      } 
      } else if (decodificar.checked) {
        if (cesar.checked) {
          console.log("Decodificar César")
          resposta.innerText = decodificarCesar(mensagem);
        } else {
          console.log("Decodificar base64")
          resposta.innerText = atob(mensagem);
        } 
        } else {
         resposta.innerText = "Informe o tipo de código ";
      }
  }









