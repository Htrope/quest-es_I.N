function ordenarNomes(lista) {
  let resultado = []
  for (let i = 0; i < lista.length; i++) {
    resultado.push((i + 1) + ", " + lista[i])
  }
  return resultado
}

let filaDeEspera = [' João', ' maria', ' eduardo']
let ordem = parseInt(prompt('O que deseja fazer'))

while (ordem != 0) {
  if (ordem == 1) {
    let nome = prompt('Nome do cliente:')
    filaDeEspera.push(nome)
  }

  if (ordem == 2) {
    filaDeEspera.shift()
  }

  let filaOrdenada = ordenarNomes(filaDeEspera)
  alert('Fila de Espera: ' + filaOrdenada)

  ordem = parseInt(prompt('Oque deseja fazer?'))
}
