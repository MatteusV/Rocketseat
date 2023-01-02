// Modelagem
class Queue {
    constructor() {
        this.data = [];
    }

    enqueue(item) {
        this.data.push(item);
        console.log(`${item} Chegou na fila!`)
    }

    dequeue() {
        const item = this.data.shift()
        console.log(`${item} saiu da fila!`)
    }
}

// Utilizando
const fila = new Queue();

fila.enqueue('Lucas');
fila.enqueue('Guilherme');
fila.enqueue('Matteus')
console.log('')
fila.dequeue()
fila.dequeue()
fila.dequeue()