function verificarIdades(anosNascimento) {
  let anoAtual = 2025
  let resultados = [];
  for (let i = 0; i < anosNascimento.length; i++) {
    const idade = anoAtual - anosNascimento[i];
    if (idade >= 18) {
      resultados.push("maior");
      console.log("Pessoa ", i + 1, ": Maior de idade");
    } else {
      resultados.push("menor");
      console.log("Pessoa ", i + 1, ": Menor de idade");
    }
  }
  return resultados;
}
let anosNascimento = [2000, 1999, 2015];
const resultados = verificarIdades(anosNascimento);
