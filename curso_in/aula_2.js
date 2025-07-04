let nome = prompt("Insira o nome do cliente:");
let idade = parseint(prompt("insira a idade do cliente"));
console.log("Nome: =" + nome + " Idade:" + idade);
if (idade >= 16) {
  if (idade < 18) {
    alert(
      "Entrada autorizada mediante a apresentação de autorização dos responsáveis"
    );
  } else {
    let estudante = confirm("é estudante?");
  }
  if (estudante) {
    if (idade >= 25) {
      alert("Entrada autorizada com 30 % de desconto");
    } else {
      alert("Entrada autorizada com 20 % de desconto");
    }
  } else {
    alert("Entrada autorizada com 10 % de desconto");
  }
} else {
  alert("A entrada não está autorizada");
}
