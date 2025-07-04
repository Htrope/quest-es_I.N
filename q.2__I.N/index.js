let n = parseInt(prompt("Entre com um número inteiro positivo:"));
while (n <= 0) {
  alert("Entrada inválida, digite um número inteiro positivo.");
  n = parseInt(prompt("entre com um número inteiro positivo:"));
}
let fat = 1;
let querContinuar = true;
while (querContinuar) {
  for (let i = 1; i <= n; i++) {
    fat *= i;
  }
    console.log("fatorial =", fat);
    querContinuar = confirm("Deseja continuar?");

  if (querContinuar) {
    fat = 1;
    n = parseInt(prompt("entre com um número inteiro positivo:"));
    while (n <= 0) {
      alert("Entrada inválida, digite um número inteiro positivo.");
      n = parseInt(prompt("Entre com um número inteiro positivo:"));
    }
  }
}
