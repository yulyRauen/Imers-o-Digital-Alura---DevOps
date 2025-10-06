alert("Boas vindas ao jogo do número secreto!");

//criando uma variável
let numeroSecreto = 2;

//deixando o numeroSecreto escondido
console.log(numeroSecreto);

//igual um alerta mas com caixa de texto para enviar resposta
let chute = prompt("Escolha um número entre 1 e 10");

//realizando uma comparação, usando condição
if (chute == numeroSecreto) {
  alert(`Parabéns! Você descobriu o número secreto: ${numeroSecreto}`);
} else {
  alert("Errou! Tente novamente.");
}
