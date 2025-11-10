let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do número secreto"); //a primeira vez que chamar a função chama o h1 e a segunda chama o p
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

exibirMensagemInicial(); //chamando a função pela primeira vez quando for lido a primeira vez o arquivo

//criando uma função para chamar no botão
function verificarChute() {
  //pegar a função, não exibir
  let chute = document.querySelector("input").value; //para pegar apenas o valor do campo;

  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou");

    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"; //se tentativas for maior que 1 mostra tentativas se não mostra tentativa
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;

    exibirTextoNaTela("p", mensagemTentativas);

    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é menor");
    } else {
      exibirTextoNaTela("p", "O número secreto é maior");
    }

    tentativas++;
    limparCampo();
  }
}

//função que não tem parametro e tem retorno
function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
  chute = document.querySelector("input");
  customElements.value = " ";
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
