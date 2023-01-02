// Função impura
// Exemplo 1: está dependendo de dado externo, que não foi passado como parâmetro
// function calcularCircumFerence(radius) {
//     return Math.PI * (radius * radius);
// }

// Exemplo 2:
let person = {
    name: 'Rafael',
    age: '33'
}

function changeName(name) {
    person.name = name;
}

// Função pura

// Exemplo 1:
// const calcularCircumFerences = function(pi, radius) {
//     return pi * (radius + radius)

// }

// com arrow function

const calcularCircumFerence = (pi, radius) => 
    pi * (radius + radius)

// Exemplo 2:
const changePersonName = (person, name) => ({...person, name})


