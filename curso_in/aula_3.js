let estoque=['Dom Quixote','1984', 'O senhor dos Anéis', 'Cem Anos de Solidão']
estoque.unshift('A Revolução dos Bichos','Os Miseráveis' )
console.log(estoque)
let variavel =estoque.pop()
console.log(variavel)
console.log(estoque)
let exixste=estoque.includes('1984')
console.log(exixste)
let indice=estoque.indexOf('O senhor dos Anéis')
console.log(indice)
let estoque_popular=['1984','Cem Anos de Solidão','Os Miseráveis']
console.log(estoque_popular)
for(let indice=0;indice<estoque_popular.length;indice++){
    console.log('posição'+indice+':'+estoque_popular[indice])
}