// for(inicialização de uma variável; condição de continuação para o loop; expressão final)
// Break = para parar o loop
// Continue = pula a execução do momento
// for(let i = 100; i >= 0; i--) {
//     console.log(i)
// }


// while

// let a = 1200;

// while(a >= 0) {
//     console.log(a)
//     a--
// }


// for...of

// let name = 'Matteus'
// let names = ['Matteus' ,'João', 'Paulo', 'Pedro']

// for(let char of names) {
//     console.log(char)
// }

// For...in

let person = {
    name: 'Matteus',
    age: '18',
    weight: 60.7
}

for(let property in person ) {
    console.log(property)
    console.log(person[property])
}