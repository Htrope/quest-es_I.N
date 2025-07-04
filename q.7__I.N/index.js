let frase = prompt("Entre com uma frase:")
let novaFrase = "";
for (let i = 0; i < frase.length; i++) {
    let caractere = frase[i]
    if (caractere !== " ") {
        novaFrase=novaFrase + caractere.toLowerCase()
    }
}
let positivoPalindromo = true;
for (let i = 0; i < novaFrase.length / 2; i++) {
    if (novaFrase[i] !== novaFrase[novaFrase.length - 1 - i]) {
        ehPalindromo = false
        break
    }
}

if (positivoPalindromo) {
    console.log('A frase é um palindromo')
} else {
    console.log("A frase não é um palíndromo.")
}