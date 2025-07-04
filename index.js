let time = []

function adicionarJogador() {
  let nome = prompt("Nome do jogador:")
  let idade = parseInt(prompt("Idade do jogador:"))
  let posicao = prompt("Posição do jogador:")
  let pontuacao = parseFloat(prompt("Pontuação do jogador:"))

  let jogador = {
    nome: nome,
    idade: idade,
    posicao: posicao,
    pontuacao: pontuacao
  }

  time.push(jogador)
  alert("Jogador adicionado com sucesso!")
}

function buscarPorPosicao() {
  let posicaoBuscada = prompt("Digite a posição que deseja buscar:")
  let encontrados = []

  for (let i = 0; i < time.length; i = i + 1) {
    if (time[i].posicao == posicaoBuscada) {
      encontrados.push(time[i])
    }
  }

  if (encontrados.length == 0) {
    alert("Nenhum jogador encontrado nessa posição.")
  } else {
    let resultado = "Jogadores na posição " + posicaoBuscada + ": "
    for (let i = 0; i < encontrados.length; i = i + 1) {
      resultado = resultado + "- " + encontrados[i].nome + " "
    }
    alert(resultado)
  }
}

function listarTime() {
  if (time.length == 0) {
    alert("O time está vazio.")
  } else {
    let lista = "Jogadores cadastrados: "
    for (let i = 0; i < time.length; i = i + 1) {
      let j = time[i]
      lista = lista + (i + 1) + ". " + j.nome + " | Idade: " + j.idade + " | Posição: " + j.posicao + " | Pontos: " + j.pontuacao + " "
    }
    alert(lista)
  }
}

function calcularPontuacaoMedia() {
  if (time.length == 0) {
    alert("Não há jogadores no time.")
    return
  }

  let soma = 0
  for (let i = 0; i < time.length; i = i + 1) {
    soma = soma + time[i].pontuacao
  }

  let media = soma / time.length
  alert("Pontuação média do time: " + media.toFixed(2))
}

let opcao = 0
while (opcao != 5) {
  opcao = parseInt(prompt(
    "MENU DO TIME " +
    "1 - Adicionar jogador " +
    "2 - Buscar por posição " +
    "3 - Listar time " +
    "4 - Calcular pontuação média " +
    "5 - Sair " +
    "Escolha uma opção:"
  ))

  if (opcao == 1) {
    adicionarJogador()
  } else if (opcao == 2) {
    buscarPorPosicao()
  } else if (opcao == 3) {
    listarTime()
  } else if (opcao == 4) {
    calcularPontuacaoMedia()
  } else if (opcao == 5) {
    alert("Encerrando o programa. Até mais!")
  } else {
    alert("Opção inválida, tente novamente.")
  }
}
