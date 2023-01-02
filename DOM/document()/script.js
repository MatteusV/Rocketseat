// getElementById

const pegarId = document.getElementById('id-title')

console.log("Id:",pegarId)

// getElementByClassName

const pegarClass = document.getElementsByClassName('class-title')

console.log("Class:",pegarClass)

// getElementByTagName

const pegarTag = document.getElementsByTagName('meta')

console.log("Tag:",pegarTag)

// querySelector()

const querySelector = document.querySelector('.class-title')

console.log("querySelector:",querySelector)

// querySelectorAll()

const querySelectorall = document.querySelectorall('.class-title')

querySelectorall.forEach(el => console.log(el)); 