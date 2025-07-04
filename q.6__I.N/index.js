function fibonacci(n) {
  let sequencia = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      sequencia.push(0);
    } else if (i == 1) {
      sequencia.push(1);
    } else {
      sequencia.push(sequencia[i - 1] + sequencia[i - 2]);
    }
  }
  return sequencia;
}
let n = parseInt(prompt("Quantos termos da sequência de Fibonacci?"));
let valores = fibonacci(n);
console.log('sequência de Finonacci:',valores);

