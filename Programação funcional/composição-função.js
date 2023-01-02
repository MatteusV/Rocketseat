const people = ['Rafa', 'Diego', 'Dani', 'Rodrigo',]
const upperCasePeopleThatStarsWidth = people
.filter(person => person.startsWith('D'))
.map(dperson => dperson.toUpperCase)
console.log(upperCasePeopleThatStarsWidth)