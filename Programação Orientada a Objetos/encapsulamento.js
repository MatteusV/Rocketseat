// Estrutural
let altura = 50
let largura = 60

function calcularArea() {
    return altura * largura
}

let area = calcularArea()

// Orientado a objetos

class Poligono {
    constructor(altura, largura) {
        this.altura = altura
        this.largura = largura
    }

    get area() {
        return this.#calcularArea()
    }

    #calcularArea() {
        return this.altura * this.largura
    }
}

// Criar o objeto
let poligno = new Poligono(50, 60)
console.log("Altura")
console.log(poligno.altura)
console.log("Largura")
console.log(poligno.largura)
console.log("Area")
console.log(poligno.area)