// Control flow

// se estiver sujo
// console.log("Lavar o copo")

// if...else

let copo = "limpo"

if(copo == "limpo") {
    console.log("Pode utilizar")
} else if(copo == "mais ou menos") {
    console.log("Lavar o copo")
} else if(copo == "muito sujo") {
    console.log("Demitir quem não limpo")
}

// Switch

let expression = "Tudo bem?"

switch(expression) {
    case "Oi":
        console.log("Oi, tudo bem?")
        break
    
    case "Tudo bem?":
        console.log("Tudo certo, e com você?")
        break
    
    default:
        console.log("Oi, quanto tempo, tudo certo?")
        break
}