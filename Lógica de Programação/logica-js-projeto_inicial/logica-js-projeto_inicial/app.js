alert("Boas vindas ao jogo do número secreto!");

//criando uma variável
let numeroSecreto = 2;

//deixando o numeroSecreto escondido
console.log(numeroSecreto);

//igual um alerta mas com caixa de texto para enviar resposta
let chute;

//inicia com 1 porque a pessoa precisa fazer pelo menos uma tentativa
let tentativas = 1;

//enquanto chute não for igual ao número secreto
while (chute != numeroSecreto) {
  chute = prompt("Escolha um número entre 1 e 10");
  //realizando uma comparação, usando condição
  if (chute == numeroSecreto) {
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
    //tentativas = tentativas + 1
    tentativas++;
  }
}

// if (tentativas > 1) {
//   alert(
//     `Parabéns! Você descobriu o número secreto: ${numeroSecreto}, com ${tentativas} tentativas`
//   );
// } else {
//   alert(`Parabéns! Você descobriu o número secreto de primeira!!!`);
// }

//fazendo da mesma maneira mas mais simples sem tantos ifs
let palavraTentativa = tentativas > 1 ? "tentantivas" : "tentativa"; // operador ternario: se tentativa for mais que 1 faz uma coisa se não (?) faz outra
alert(
  `Parabéns! Você descobriu o número secreto: ${numeroSecreto}, com ${tentativas} ${palavraTentativa}`
);
