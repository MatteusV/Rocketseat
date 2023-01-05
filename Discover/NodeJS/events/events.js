const { inherits } = require('util');
const { EventEmitter } = require('events');

// const ev = new EventEmitter()

// ev.once('saySomething', (message) => {
//     console.log('Eu ouvi você:',message)
// })
// ev.emit('saySomething', 'Matteus')
// ev.emit('saySomething', 'Lucas')
// ev.emit('saySomething', 'Guilherme')

function Character(name) {
    this.name = name;
}

inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin')

chapolin.on('Help', () => console.log(`Eu o ${chapolin.name} colorado}`))

console.log('Oh! e agora, quem poderá me defender?')