function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirTextoNaTela("h1", "Jogo do número secreto"); //a primeira vez que chamar a função chama o h1 e a segunda chama o p
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");

//criando uma função para chamar no botão
function verificarChute() {
  console.log("o botão foi clicado");
}
