let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirTextoNaTela("h1", "Jogo do número secreto"); //a primeira vez que chamar a função chama o h1 e a segunda chama o p
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");

//criando uma função para chamar no botão
function verificarChute() {
  //pegar a função, não exibir
  let chute = document.querySelector("input").value; //para pegar apenas o valor do campo;

  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou");
    exibirTextoNaTela("p", "Você descobriu o número secreto!");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é menor");
    } else {
      exibirTextoNaTela("p", "O número secreto é maior");
    }
  }
}

//função que não tem parametro e tem retorno
function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}
