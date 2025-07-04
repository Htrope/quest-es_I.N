let quantidade = parseInt(prompt("Quantos números você quer inserir?"));
let numeros = [];
for (let i = 0; i < quantidade; i++) {
  let numero = parseInt(prompt("Digite o número " + (i + 1) + ":"));
  numeros.push(numero);
}
let contagemCrescente = 0;
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > numeros[i - 1]) {
    contagemCrescente=contagemCrescente+1;
  }
}
alert("Números inseridos: " + numeros);
alert("Quantidade de números em ordem crescente em relação ao anterior: " + contagemCrescente);