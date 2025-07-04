function encontrarElementoUnico(lista) {
  for (let i = 0; i < lista.length; i++) {
    let cont = 0
    for (let j = 0; j < lista.length; j++) {
      if (lista[i] == lista[j]) {
        cont=cont+1
      }
    }
    if (cont == 1) {
      return lista[i]
    }
  }
}
