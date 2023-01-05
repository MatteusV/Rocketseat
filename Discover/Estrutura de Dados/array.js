// posição do index [0]     [1]         [2]         [3]
const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton',]

console.log(pilotos[0]) //Senna

console.log(pilotos[1]) //Prost

console.log(pilotos[2]) //Schumacher

console.log(pilotos[3]) //Hamilton

// acessar o tamanho do array 
console.log("Tamanho do array")
console.log(pilotos.length)

// interavel
console.log('interavel')

for(let piloto of pilotos) {
    console.log(piloto)
}

// adicionar elementos
console.log('adicionar elementos')
pilotos.push('Alonso')
console.log(pilotos)

// encontrar um elemento
console.log('encontrar um elemento')
const senna = pilotos.find(piloto => piloto === 'Senna')
console.log(senna)

// deletar um elemento 
pilotos.splice(1,1)
console.log(pilotos)
