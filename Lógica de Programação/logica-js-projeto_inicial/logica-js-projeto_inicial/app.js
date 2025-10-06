alert("Boas vindas ao jogo do número secreto!");

//criando uma variável
let numeroSecreto = 29;

//igual um alerta mas com caixa de texto para enviar resposta
let chute = prompt("Escolha um número entre 1 e 10");

//realizando uma comparação, usando condição
if (chute == numeroSecreto) {
  console.log("Parabéns! Você descobriu o número secreto.");
}
